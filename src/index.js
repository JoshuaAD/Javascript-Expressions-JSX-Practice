//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Joshua Daniels.
//Copyright 2021.
import React from "react";
import ReactDOM from "react-dom";

const myName = "Joshua Daniels";
const currentYear = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {myName}</p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
