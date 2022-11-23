import "./App.css";
import ExpenseItem from "./Components/ExpenseItem/ExpenseItem";
import Card from "./Components/Card/Card";
import ExpanseForm from "./Components/expanseForm/expanseForm";
import { useState } from "react";
function App() {
  const [obj, setObj] = useState([
    {
      expeseTitle: "carinsurence",

      expanseAmount: 200,
      date: new Date(2022, 11, 21),
    },
    {
      expeseTitle: "homerent",

      expanseAmount: 500,
      date: new Date(2022, 11, 21),
    },
    {
      expeseTitle: "laptop",

      expanseAmount: 600,
      date: new Date(2022, 11, 21),
    },
    {
      expeseTitle: "newTv",

      expanseAmount: 800,
      date: new Date(2022 - 11 - 21),
    },
  ]);
  const onadding = (data) => {
    setObj((pre) => {
      return [...pre, data];
    });
    console.log(obj);
  };
  return (
    <Card>
      <h1>Expense tracker</h1>
      <ExpanseForm onadding={onadding} />
      {obj.map((data) => {
        return (
          <ExpenseItem
            title={data.expeseTitle}
            date={data.date}
            cost={data.expanseAmount}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
}

export default App;
