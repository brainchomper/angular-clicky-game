import React from "react";
import "./Instructions.css";

const Instructions = props => (
<div className="jumbotron jumbotron-fluid bg-cover text-white text-center">
    <h2 className="display-4 font-weight-bold">Clicky Game!</h2>
    <p className="lead font-weight-bold">Click on an image to earn points, but don't click the same image twice!</p>
    <p>Written by Kevin Smith</p>
  </div>);

export default Instructions;