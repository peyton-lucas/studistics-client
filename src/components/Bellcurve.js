import React, {Component} from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HistogramBellCurve from "highcharts/modules/histogram-bellcurve";
import "../styles.scss";

HistogramBellCurve(Highcharts);

export default class Bellcurve extends Component {
  render() {
    const options = {
      title: {
        text: this.props.title,
        style: {
          color: "#2e373b"
        }
      },
      chart: {
        plotBackgroundColor: "#ffffff",
        backgroundColor: "#ffffff",
        shadow: {
          color: "#bdbdbd",
          offsetX: 1,
          offsetY: 1,
          opacity: "0.1",
          width: 7
        },
        borderColor: '#bdbdbd',
        borderWidth: 1,
        borderRadius: 5,
        style: {
          fontFamily: "Montserrat",
          color: "#2e373b"
        }
      },
      credits: {
        enabled: false
      },
      xAxis: [{
        title: {
          text: "Ear Tag ID"
        },
        alignTicks: false
      }, {
        alignTicks: false,
        opposite: true
      }],
      yAxis: [{
        title: {
          text: "Weights"
        }
      }, {
        opposite: true,
      }],
      series: [{
        name: this.props.title,
        type: "bellcurve",
        color: this.props.color,
        xAxis: 1,
        yAxis: 1,
        baseSeries: 1,
        zIndex: -1
      }, {
        name: "Ear Tag ID", // add this.props path to earId
        type: "scatter",
        data: this.props.value,
        // data: data,
        color: "#2e373b",
        marker: {
          radius: 1.5
        }
      }]
    }
    return (
      <HighchartsReact highcharts={Highcharts} options={options}/>
    );
  }
}
