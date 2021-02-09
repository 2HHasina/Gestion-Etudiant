import React, { Component } from "react";
import Chart from "react-apexcharts";

class NoteChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Note",
          data: [12, 16, 17, 20, 7, 11],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
          width: '10%'
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "GL",
            "JEE",
            "Management",
            "Securite",
            "ERP",
            "BI",
          ],
        },
        yaxis: {
            max: 20,
          title: {
            text: "Note  /20",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return `${val}`;
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
        />
      </div>
    );
  }
}

export default NoteChart;
