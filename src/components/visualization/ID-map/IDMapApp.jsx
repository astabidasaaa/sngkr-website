import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import styled from "styled-components";

const IDMapStyle = styled.div`
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

  const svgContainerWidth = "100%",
    svgContainerHeight = window.innerWidth / 2.5;

  useEffect(() => {
    d3.select("#svgContainer")
      .append("svg")
      .attr("id", "svg")
      .attr("width", svgContainerWidth)
      .attr("height", svgContainerHeight)
      .attr("viewBox", "-1517 580 512 100");

    d3.select("#container")
      .append("div")
      .attr("id", "tooltip")
      .style("opacity", 0);

    loadData();
  }, []);

  useEffect(() => {
    drawMap();
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
        "https://www.bps.go.id/indikator/indikator/download_json/0000/api_pub/UFpWMmJZOVZlZTJnc1pXaHhDV1hPQT09/da_01/1",
        {
          method: "GET",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const data = await response.json();
      console.log(data);
      //  console.log(data.features);
      //  setDataPeta(data.features);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const svg = d3.select("#svgContainer").select("svg");

  const drawMap = () => {
    // let projection = d3.geoMercator();

    // let geoGenerator = d3.geoPath().projection(projection);

    console.log(dataPeta);

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
        // console.log(d3.geoPath());
        return d.properties.Propinsi;
      })
      .attr("data-kode", (d, i) => d.properties.kode);
  };

  return (
    <IDMapStyle id="container">
      {/* <h1>Peta Indonesia</h1> */}
      <div id="svgContainer"></div>
    </IDMapStyle>
  );
};

export default IDMapApp;
