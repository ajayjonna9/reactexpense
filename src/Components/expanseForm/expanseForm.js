import React, { useState } from "react";
import "./ExpanseForm.css";

const ExpanseForm = () => {
  const onChangeInput = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="form">
      <form>
        <h5>Expanse Titile</h5>
        <input
          type="text"
          name="expanseTitile"
          onChange={onChangeInput}
        ></input>
        <h5>Expanse Amount</h5>
        <input
          type="number"
          name="expanseAmount"
          onChange={onChangeInput}
        ></input>
        <h5>Date</h5>
        <input type="date" name="date" onChange={onChangeInput}></input>
        <button>submit</button>
      </form>
    </div>
  );
};

export default ExpanseForm;
