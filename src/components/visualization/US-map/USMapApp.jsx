import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import USMapStyle from "../../../styles/map/USMapStyle";

const USMapApp = () => {
  const colorRange = [
    "#ca3e47",
    "#d74d42",
    "#e25d3c",
    "#eb6d35",
    "#f27f2d",
    "#f69124",
    "#f8a31b",
    "#f8b612",
    "#f6c90e",
  ].reverse();

  const urls = [
    "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json",
    "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json",
  ];

  const [county_data, setCounty_data] = useState({});
  const [state_data, setState_data] = useState({});
  const [education_data, setEducation_data] = useState([]);
  const [screenSize, setScreenSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });

  useEffect(() => {
    const svgContainerWidth =
        screenSize.x > 480 ? screenSize.x - 50 : screenSize.x,
      svgContainerHeight = screenSize.x / 1.5;

    d3.select("#svgContainer")
      .append("svg")
      .attr("id", "svg")
      .attr("width", svgContainerWidth)
      .attr("height", svgContainerHeight)
      .attr("viewBox", "0 0 950 620");

    d3.select("#container")
      .append("div")
      .attr("id", "tooltip")
      .style("opacity", 0);

    loadData();

    console.log("useEffect");
  }, []);

  useEffect(() => {
    drawMap();
  }, [education_data, screenSize]);

  const loadData = async () => {
    try {
      const data = await Promise.all(
        urls.map((url) => fetch(url).then((response) => response.json()))
      );

      const dataEducation = data[0];
      const dataTopograph = data[1];

      setState_data(
        topojson.mesh(
          dataTopograph,
          dataTopograph.objects.states,
          function (a, b) {
            return a !== b;
          }
        )
      );

      setCounty_data(
        topojson.feature(dataTopograph, dataTopograph.objects.counties).features
      );

      setEducation_data(dataEducation);
    } catch (error) {
      console.log(error);
    }
  };

  const svg = d3.select("#svgContainer").select("svg");
  const tooltip = d3.select("#tooltip");

  const drawMap = () => {
    const education = education_data.map((item, index) => {
      return item.bachelorsOrHigher;
    });

    const thresholdDomain = () => {
      let array = [];
      let step = (d3.max(education) - d3.min(education)) / colorRange.length;
      let base = d3.min(education);
      for (let i = 1; i < colorRange.length; i++) {
        array.push(Math.round(base + i * step));
      }
      return array;
    };

    const legendThreshold = d3
      .scaleThreshold()
      .domain(thresholdDomain())
      .range(colorRange);

    // County Line
    svg
      .selectAll("path")
      .data(county_data)
      .enter()
      .append("path")
      .attr("d", d3.geoPath())
      .attr("data-fips", (datum, index) => datum.id)
      .attr("data-education", (datum, index) => {
        const found = education_data.find((obj) => {
          return obj.fips === datum.id;
        });
        const result = found.bachelorsOrHigher;
        return result;
      })
      .classed("county", true)
      .attr("fill", (datum, index) => {
        const filtered = education_data.filter((obj) => {
          return obj.fips === datum.id;
        });

        const percentage = filtered[0].bachelorsOrHigher;

        return legendThreshold(percentage);
      })
      .on("mouseover", (datum, index) => {
        const found = education_data.find((obj) => {
          return obj.fips === datum.srcElement.__data__.id;
        });

        const areaName = found.area_name;
        const state = found.state;
        const percentage = found.bachelorsOrHigher;

        tooltip
          .style("display", "block")
          .style("opacity", 0.9)
          .style("position", "absolute")
          .style("top", `${datum.pageY - 130}px`)
          .style(
            "left",
            `${datum.pageX + (screenSize.x / 2 < datum.pageX ? -160 : 20)}px`
          )
          .attr("data-education", percentage)
          .html(`${areaName}, ${state} <br> ${percentage}%`);
      })
      .on("mouseout", (datum, index) => {
        tooltip.style("display", "none").style("opacity", 0);
      });

    // State Line
    svg
      .append("path")
      .datum(state_data)
      .attr("class", "states")
      .attr("d", d3.geoPath());

    // legend
    const legendWidth = 400,
      legendHeight = 20;

    // screenSize.x / 2;

    const g = svg
      .append("g")
      .attr("class", "key")
      .attr("id", "legend")
      .attr("transform", "translate(400,0)")
      .attr("width", legendWidth)
      .attr("height", legendHeight);

    const legendXScale = d3
      .scaleLinear()
      .domain([d3.min(education), d3.max(education)])
      .range([0, legendWidth]);

    g.selectAll(".legendCell")
      .data(colorRange)
      .enter()
      .append("rect")
      .classed("legendCell", true)
      .attr("width", legendWidth / colorRange.length)
      .attr("height", 10)
      .attr("x", (datum, index) => {
        return (index * legendWidth) / colorRange.length;
      })
      .attr("fill", (datum, index) => {
        return datum;
      });

    const legendAxis = d3
      .axisBottom(legendXScale)
      .tickValues(thresholdDomain())
      .tickFormat((d) => {
        return d + "%";
      })
      .tickSizeOuter([0])
      .tickPadding([10]);

    g.append("g")
      .attr("transform", "translate(0, 10)")
      .attr("y", 0)
      .attr("x", 0)
      .attr("id", "legendAxis")
      .call(legendAxis);
  };

  return (
    <USMapStyle id="container">
      <div id="main-map">
        <div id="svgContainer"></div>

        <p id="source">
          Data Source:{" "}
          <a href="https://www.ers.usda.gov/data-products/county-level-data-sets/download-data.aspx">
            USDA Economic Research Service
          </a>
        </p>
      </div>
    </USMapStyle>
  );
};

export default USMapApp;
