import React from "react";
import "./Instructions.css";

const Instructions = props => (
<div className="jumbotron jumbotron-fluid bg-cover text-white text-center">
    <h2 className="display-4 font-weight-bold">Clicky Game!</h2>
    <p className="lead font-weight-bold">Click on an image to earn points, but don't click the same image twice!</p>
    <p>Written by Kevin Smith</p>
		<h3 className="text-white bold">{props.message}</h3>
  </div>);

export default Instructions;