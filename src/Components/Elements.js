import React from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
const Elements = (props) => {
  if (props.filterarr.length === 0) {
    return <h3>No expanse found</h3>;
  } else {
    return props.filterarr.map((data, ind) => {
      return (
        <ExpenseItem
          key={data.id}
          index={data.id}
          title={data.expeseTitle}
          date={data.date}
          cost={data.expanseAmount}
          //changeCost={changeCost}
        ></ExpenseItem>
      );
    });
  }
};

export default Elements;
