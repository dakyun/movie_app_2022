import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css"

function Navigaton(){
    return (
        <div className="nav">
            <Link to="/"><span className="nav_1">Home</span></Link>
            <Link to="/about"><span className="nav_2">About</span></Link>
        </div>
    )
}

export default Navigaton;