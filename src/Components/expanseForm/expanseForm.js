import React, { useState } from "react";
import "./ExpanseForm.css";
const ExpanseForm = (props) => {
  //   const [expeseTitle, setExpeseTitle] = useState("");
  //   const [expanseAmount, setExpanseAmount] = useState("");
  //   const [date, setdate] = useState("");
  const [addExpanse, setAddExpanse] = useState(false);
  const [inputValues, setInputValues] = useState({
    expeseTitle: "",
    expanseAmount: "",
    date: "",
  });
  const { expeseTitle, expanseAmount, dat } = inputValues;

  const onChangeInput = (e) => {
    e.preventDefault();
    if (e.target.name === "expanseTitle") {
      setInputValues((prevals) => {
        return {
          ...prevals,
          expeseTitle: e.target.value,
        };
      });
    } else if (e.target.name === "expanseAmount") {
      setInputValues((prevals) => {
        return {
          ...prevals,
          expanseAmount: e.target.value,
        };
      });
    } else {
      setInputValues((prevals) => {
        console.log(typeof e.target.value);

        return {
          ...prevals,
          date: new Date(e.target.value),
        };
      });
    }
  };
  const onsubmit = (e) => {
    e.preventDefault();

    const obj = {
      id: Math.random(),
      ...inputValues,
    };
    props.onadding(obj);
    console.log(obj);

    setInputValues({
      expeseTitle: "",
      expanseAmount: "",
      date: "",
    });
    if (addExpanse) {
      setAddExpanse(false);
    } else {
      setAddExpanse(true);
    }
  };
  const onAddExpanse = () => {
    if (addExpanse) {
      setAddExpanse(false);
    } else {
      setAddExpanse(true);
    }
  };
  function showForm() {
    return (
      <div className="form">
        <form onSubmit={onsubmit}>
          <h5>Expanse Titile</h5>
          <input
            type="text"
            name="expanseTitle"
            value={expeseTitle}
            onChange={onChangeInput}
          ></input>
          <h5>Expanse Amount</h5>
          <input
            type="number"
            name="expanseAmount"
            value={expanseAmount}
            onChange={onChangeInput}
          ></input>
          <h5>Date</h5>
          <input
            type="date"
            name="date"
            value={dat}
            onChange={onChangeInput}
          ></input>
          <br />
          <button className="button" type="submit">
            AddExpanse
          </button>
          <button className="button" onClick={onAddExpanse}>
            close
          </button>
        </form>
      </div>
    );
  }
  return (
    <div className="addexpanse">
      {addExpanse ? (
        showForm()
      ) : (
        <button className="button" onClick={onAddExpanse}>
          AddExpanse
        </button>
      )}
    </div>
  );
};

export default ExpanseForm;
