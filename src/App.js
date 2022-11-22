import "./App.css";
import ExpenseItem from "./Components/ExpenseItem/ExpenseItem";
import Card from "./Components/Card/Card";
import ExpanseForm from "./Components/expanseForm/expanseForm";
function App() {
  const obj = [
    {
      title: "carinsurence",
      date: new Date(2022, 11, 21),
      cost: 200,
    },
    {
      title: "homerent",
      date: new Date(2022, 11, 21),
      cost: 500,
    },
    {
      title: "laptop",
      date: new Date(2022, 11, 21),
      cost: 600,
    },
    {
      title: "newTv",
      date: new Date(2022, 11, 21),
      cost: 800,
    },
  ];
  return (
    <Card>
      <h1>Expense tracker</h1>
      <ExpanseForm />
      {obj.map((data) => {
        return (
          <ExpenseItem
            title={data.title}
            date={data.date}
            cost={data.cost}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
}

export default App;
