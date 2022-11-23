import React, { useState } from "react";
import "./ExpanseForm.css";
const ExpanseForm = (props) => {
  //   const [expeseTitle, setExpeseTitle] = useState("");
  //   const [expanseAmount, setExpanseAmount] = useState("");
  //   const [date, setdate] = useState("");
  const [inputValues, setInputValues] = useState({
    expeseTitle: "",
    expanseAmount: "",
    date: "",
  });
  const { expeseTitle, expanseAmount, date } = inputValues;

  const onChangeInput = (e) => {
    e.preventDefault();
    if (e.target.name === "expanseTitle") {
      //   setExpeseTitle(e.target.value);
      // setInputValues({...inputValues,expeseTitle:e.target.value})
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
      ...inputValues,
    };
    props.onadding(obj);
    console.log(obj);

    setInputValues({
      expeseTitle: "",
      expanseAmount: "",
      date: "",
    });
  };
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
          value={date}
          onChange={onChangeInput}
        ></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default ExpanseForm;
