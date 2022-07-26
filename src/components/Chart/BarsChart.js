import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const option = {
  options: {
    legend: {
        display: false
    },
    tooltips: {
        callbacks: {
           label: function(tooltipItem) {
                  return tooltipItem.yLabel;
           }
        }
    }
}
};

export default function BarsChart(props) {
  return (
    <div style={{ width: "450px", height: "300px", position: "relative" }}>
      <Bar data={props.dataBarsChart} options={option} />
    </div>
  );
}
