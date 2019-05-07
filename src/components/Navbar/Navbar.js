import React from "react";
import "./style.css";

const Navbar = props => (
<div className="navybar">
    <nav className="navbar fixed-top navbar-dark bg-dark">
    <span className="navbar-brand mb-0 h1">MEMORY GAME</span>
    <span className="navbar-text">
     <h5 className="text-muted"> Score: {props.userScore} || Top Score: {props.topScore} </h5>
    </span>
   
    </nav>
</div>
)

export default Navbar;