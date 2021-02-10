import React, { Component } from "react";
import Chart from "react-apexcharts";

class NoteChart extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.note)
    
    };

  render() {
    const series = [
      {
        name: "Note",
        data: this.props.note,
      },
    ]
    const options= 
    {
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
        categories: this.props.module,
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
        }
      }
    }

    return (
      <div id="chart">
        <Chart
          options={options}
          series={series}
          type="bar"
          height={350}
        />
      </div>
    );
  }
}

export default NoteChart;
