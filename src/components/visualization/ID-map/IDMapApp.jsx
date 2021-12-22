import React, { useEffect, useState } from "react";
import * as d3 from "d3";
// import * as topojson from "topojson-client";
import dataCovid from "../../../constants/covid-province.json";
import useIsSsr from "../../IsSSR";
import IDMapStyle from "../../../styles/map/IDMapStyle";

const IDMapApp = () => {
  const isSSR = useIsSsr();

  const [dataPeta, setDataPeta] = useState({});
  const [screenSize, setScreenSize] = useState({
    x: 480,
    y: 320,
  });

  useEffect(() => {
    if (isSSR) {
      setScreenSize({
        x: window.innerWidth,
        y: window.innerHeight,
      });
    }
  }, [isSSR]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    drawContainer();
    drawMap();

    return () => {
      d3.select("#svgContainer").select("#svg").remove();
      d3.select("#container").select("#tooltip").remove();
    };
  }, [dataPeta, screenSize]);

  // const urls = [
  //   "https://raw.githubusercontent.com/ans-4175/peta-indonesia-geojson/master/indonesia-prov.geojson",
  //   "https://www.bps.go.id/indikator/indikator/download_json/0000/api_pub/UFpWMmJZOVZlZTJnc1pXaHhDV1hPQT09/da_01/1",
  // ];

  const drawContainer = () => {
    const svgContainerWidth = "100%",
      svgContainerHeight = screenSize.x / 2.5;

    d3.select("#svgContainer")
      .append("svg")
      .attr("id", "svg")
      .attr("width", svgContainerWidth)
      .attr("height", svgContainerHeight)
      .attr("viewBox", "-1517 580 512 100");

    d3.select("#container").append("div").attr("id", "tooltip");
  };

  const loadData = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/ans-4175/peta-indonesia-geojson/master/indonesia-prov.geojson"
      );

      const data = await response.json();

      setDataPeta(data.features);
    } catch (error) {
      console.log(error);
    }
  };

  const drawMap = () => {
    const svg = d3.select("#svgContainer").select("svg");

    const tooltip = d3.select("#tooltip");

    svg
      .selectAll("path")
      .data(dataPeta)
      .enter()
      .append("path")
      .attr("d", d3.geoPath())
      // .attr("fill", "tomato")
      .attr("data-province", (d, i) => {
        return d.properties.Propinsi;
      })
      .attr("data-kode", (d, i) => d.properties.kode)
      .on("mouseover", (d, i) => {
        const areaName = d.srcElement.__data__.properties.Propinsi;

        tooltip
          .style("display", "block")
          .style("opacity", 0.9)
          .style("position", "absolute")
          .style("top", `${d.pageY - 100}px`)
          .style(
            "left",
            `${d.pageX + (screenSize.x / 2 < d.pageX ? -130 : 20)}px`
          )
          .html(`${areaName}`);
      })
      .on("mouseout", (d, i) => {
        tooltip.style("display", "none").style("opacity", 0);
      });
  };

  return (
    <IDMapStyle id="container">
      <div id="svgContainer"></div>
    </IDMapStyle>
  );
};

export default IDMapApp;
