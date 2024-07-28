import React, { useState } from "react";
import "./MainSelection.css";

const MainSelection = (props) => {
  const [labelState, setLabelState] = useState("label");
  return (
    <div
      onClick={props.onClick}
      className="main-selection"
      onMouseEnter={() => {
        if (props.hover) {
          setLabelState("hover");
        }
      }}
      onMouseLeave={() => {
        if (props.hover) {
          setLabelState("label");
        }
      }}
    >
      <span>{labelState == "hover" ? props.hover : props.label}</span>
      <div />
    </div>
  );
};

export default MainSelection;
