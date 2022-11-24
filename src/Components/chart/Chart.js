import React from "react";
import Chartbar from "./Chartbar";
import "./chart.css";
const Chart = (props) => {
  const datapointsValues = props.datapoints.map((data) => {
    return data.value;
  });
  const maximum = Math.max(...datapointsValues);
  return (
    <div className="chart">
      {props.datapoints.map((data) => {
        return (
          <Chartbar
            key={data.label}
            value={data.value}
            max={maximum}
            label={data.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
