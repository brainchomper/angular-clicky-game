import React from "react";
import "./ScoreBoard.css";

// Footer component
const ScoreBoard = props => (
    <div className="stickyScoreBoard animated hoverable">
		<h5 className="text-white bold text-center">Score<p></p>{props.score}
		<hr/>Best<p></p>{props.topScore}</h5></div>
);

export default ScoreBoard;