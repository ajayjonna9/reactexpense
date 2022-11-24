import React, { useState } from "react";
import "./Expenceitems.css";
import ExpenceDate from "../ExpenseData/ExpenceDate";
import ExpenseDetails from "../ExpenseDetails/ExpenseDetails";
import Card from "../Card/Card";
const ExpenseItem = (props) => {
  const [price, setPrice] = useState(props.cost);
  const onchange = () => {
    //props.changeCost(props.index);
    console.log(props.index);
    setPrice(100);
  };
  return (
    <Card className="expense-item">
      <ExpenceDate date={props.date} />
      <ExpenseDetails amount={price} title={props.title} />
      <button onClick={onchange}>Delete</button>
    </Card>
  );
};

export default ExpenseItem;
