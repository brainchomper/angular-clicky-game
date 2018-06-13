import React from "react";
import "./Navbar.css";

const Navbar = props => (
	<nav className="navbar fixed-top navbar-dark navbar-custom p-3">
		<span className="navbar-brand">React Clicky Game</span>
		<span className="navbar-text text-white bold">{props.message}</span>
		<a className="navbar-text text-white" href="http://kvnsmith.com/portfolio">Kevin Smith's Portfolio</a>
	</nav>
);

export default Navbar;