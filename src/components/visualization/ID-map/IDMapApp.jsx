import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import styled from "styled-components";
import dataCovid from "../../../constants/covid-province.json";

const IDMapStyle = styled.div`
  #tooltip {
    padding: 0.5rem;
    border-radius: 0.3rem;
    font: var(--regularWeight) var(--subPara) var(--sansSerif);
    color: var(--white);
    background-color: var(--gray);
    text-transform: lowercase;

    &:first-line {
      text-transform: capitalize;
    }
  }

  #svgContainer {
    svg {
      // border: 1px solid red;

      path {
        transform: scale(11, -11);
        transform-origin: center;
        stroke: var(--black);
        stroke-width: 0.01px;

        &:hover {
          fill: var(--gray);
        }
      }
    }
  }
`;

const IDMapApp = () => {
  const [dataPeta, setDataPeta] = useState({});
  const [screenSize, setScreenSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });

  const svgContainerWidth = "100%",
    svgContainerHeight = window.innerWidth / 2.5;

  useEffect(() => {
    d3.select("#svgContainer")
      .append("svg")
      .attr("id", "svg")
      .attr("width", svgContainerWidth)
      .attr("height", svgContainerHeight)
      .attr("viewBox", "-1517 580 512 100");

    d3.select("#container").append("div").attr("id", "tooltip");
    // .style("opacity", 0);

    loadData();
  }, []);

  useEffect(() => {
    drawMap();
    // console.log(dataCovid.list_data);
  }, [dataPeta]);

  const urls = [
    "https://raw.githubusercontent.com/ans-4175/peta-indonesia-geojson/master/indonesia-prov.geojson",
    "https://www.bps.go.id/indikator/indikator/download_json/0000/api_pub/UFpWMmJZOVZlZTJnc1pXaHhDV1hPQT09/da_01/1",
  ];

  const loadData = async () => {
    try {
      // const data = await Promise.all(
      //   urls.map((url) => fetch(url).then((response) => response.json()))
      // );
      const response = await fetch(
        "https://raw.githubusercontent.com/ans-4175/peta-indonesia-geojson/master/indonesia-prov.geojson"
        // {
        //   method: "GET",
        //   mode: "no-cors",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(data),
        // }
      );
      const data = await response.json();
      //  console.log(data.features);
      setDataPeta(data.features);
    } catch (error) {
      console.log(error);
    }
  };

  const svg = d3.select("#svgContainer").select("svg");

  const tooltip = d3.select("#tooltip");

  const drawMap = () => {
    // console.log(dataPeta);

    svg
      .selectAll("path")
      .data(dataPeta)
      .enter()
      .append("path")
      .attr("d", d3.geoPath())
      //   .attr("transform", "scale(2, -2)")
      //   .attr("transform-origin", "center")
      .attr("fill", "tomato")
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
          // .style("text-transform", "capitalize")
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
      {/* <h1>Peta Indonesia</h1> */}
      <div id="svgContainer"></div>
    </IDMapStyle>
  );
};

export default IDMapApp;
