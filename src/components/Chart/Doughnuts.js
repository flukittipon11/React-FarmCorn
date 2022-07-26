import React from "react";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Doughnuts(props) {
  return (
    <>
      <div style={{width:'300px',height:'300px'}}>
        <Doughnut data={props.dataDoughnut} />
      </div>
    </>
  );
}
