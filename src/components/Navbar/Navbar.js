import React from "react";
import "./Navbar.css";

const Navbar = props => (
	<nav className="navbar fixed-top navbar-dark navbar-custom p-3">
		<span className="navbar-brand">React Clicky Game</span>
		<span className="navbar-text text-white" href="http://kvnsmith.com/portfolio">Portfolio</span>
		<span className="navbar-text text-white bold">{props.message}</span>
		<span className="navbar-text text-white">Score: {props.score}, Top Score: {props.topScore}</span>
	</nav>
);

export default Navbar;