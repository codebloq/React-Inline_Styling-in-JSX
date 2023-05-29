import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "#394867",
  fontSize: "36px",
  textAlign: "center",
  border: "1px solid black"
};

// customStyle.color = "#482121";

ReactDOM.render(
  <h1 style={customStyle}>Know your rights!</h1>,
  document.getElementById("root")
);
