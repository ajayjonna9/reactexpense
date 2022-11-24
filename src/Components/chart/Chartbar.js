import React from "react";
import "./chartbar.css";

const Chartbar = (props) => {
  let barheight = "0%";
  if (props.max > 0) {
    barheight = Math.round((props.value / props.max) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barheight }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default Chartbar;
