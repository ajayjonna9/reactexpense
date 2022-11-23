import React from "react";
import "./filter.css";
const Filter = (props) => {
  const onChangeFilter = (e) => {
    props.onFilter(e.target.value);
  };
  return (
    <div className="filter">
      <h4>Filter by Year</h4>
      <select name="year" value={props.filter} onChange={onChangeFilter}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
};

export default Filter;
