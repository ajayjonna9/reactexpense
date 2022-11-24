import React from "react";
import Chart from "./Components/chart/Chart";

const ExpanseChart = (props) => {
  const updatedData = [
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "mar", value: 0 },
    { label: "apr", value: 0 },
    { label: "may", value: 0 },

    { label: "jun", value: 0 },
    { label: "jul", value: 0 },
    { label: "aug", value: 0 },
    { label: "sep", value: 0 },
    { label: "oct", value: 0 },
    { label: "nov", value: 0 },
    { label: "dec", value: 0 },
  ];
  for (let expense of props.chartData) {
    const month = expense.date.getMonth();
    console.log(month);
    console.log(expense.date);
    console.log(updatedData[month]);

    console.log(updatedData[month].value);
    updatedData[month].value = updatedData[month].value + expense.expanseAmount;
    console.log(updatedData[month].value);
  }
  return <Chart datapoints={updatedData} />;
};

export default ExpanseChart;
