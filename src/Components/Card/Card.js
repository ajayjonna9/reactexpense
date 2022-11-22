import React from "react";
import "./Card.css";
const Card = (props) => {
  const clas = "card " + props.className;
  return <div className={clas}>{props.children}</div>;
};

export default Card;
