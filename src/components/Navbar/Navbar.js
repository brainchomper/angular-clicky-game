import React from "react";
import "./Navbar.css";

const Navbar = props => (
	<nav className="navbar fixed-top navbar-dark navbar-custom p-3">
		<a className="navbar-text text-white" href="https://kvnsmith.com/portfolio">Portfolio</a>
		<span className="navbar-text text-white bold animated bounceIn">{props.message}</span>
		<a className="navbar-text text-white" href="https://github.com/brainchomper/react-clicky-game">Repo</a>
	</nav>
);

export default Navbar;