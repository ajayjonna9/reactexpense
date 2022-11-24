import "./App.css";
import ExpenseItem from "./Components/ExpenseItem/ExpenseItem";
import Card from "./Components/Card/Card";
import ExpanseForm from "./Components/expanseForm/expanseForm";
import { useState } from "react";
import Filter from "./Components/Filter/Filter";
function App() {
  const [filter, setFilter] = useState("2020");

  const [obj, setObj] = useState([
    {
      id: 1,
      expeseTitle: "carinsurence",

      expanseAmount: 200,
      date: new Date(2022, 11, 21),
    },
    {
      id: 2,
      expeseTitle: "homerent",

      expanseAmount: 500,
      date: new Date(2021, 11, 21),
    },
    {
      id: 3,
      expeseTitle: "laptop",

      expanseAmount: 600,
      date: new Date(2021, 11, 21),
    },
    {
      id: 4,
      expeseTitle: "newTv",

      expanseAmount: 800,
      date: new Date(2022, 11, 21),
    },
  ]);

  const onadding = (data) => {
    setObj((pre) => {
      return [...pre, data];
    });
    console.log(obj);
  };
  const filterarr = obj.filter((ele) => {
    return ele.date.getFullYear().toString() === filter;
  });
  let element = <p>No expanse found</p>;
  if (filterarr.length > 0) {
    element = filterarr.map((data, ind) => {
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

  return (
    <Card>
      <h1>Expense tracker</h1>

      <ExpanseForm onadding={onadding} />
      <Filter onFilter={setFilter} filter={filter} />
      {element}
      {/* {filterarr.length === 0 ? (
        <p>No expanse found</p>
      ) : (
        filterarr.map((data, ind) => {
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
        })
      )} */}
    </Card>
  );
}

export default App;
