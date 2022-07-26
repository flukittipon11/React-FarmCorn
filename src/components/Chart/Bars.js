import React, { useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export default function Bars(props) {
  const [isLoading, setisLoading] = useState(false);

  return (
    <>
      <div style={{ width: "320px", height: "300px", position: "relative" }}>
        <PolarArea data={props.dataBars} />
      </div>
    </>
  );
}
