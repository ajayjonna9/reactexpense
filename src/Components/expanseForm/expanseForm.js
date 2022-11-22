import React, { useState } from "react";
import "./ExpanseForm.css";
const ExpanseForm = () => {
  const [expeseTitle, setExpeseTitle] = useState("");
  const [expanseAmount, setExpanseAmount] = useState("");
  const [date, setdate] = useState("");

  const onChangeInput = (e) => {
    e.preventDefault();
    if (e.target.name === "expanseTitle") {
      setExpeseTitle(e.target.value);
    } else if (e.target.name === "expanseAmount") {
      setExpanseAmount(e.target.value);
    } else {
      setdate(e.target.value);
    }
  };
  return (
    <div className="form">
      <form>
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
        <button>submit</button>
      </form>
    </div>
  );
};

export default ExpanseForm;
