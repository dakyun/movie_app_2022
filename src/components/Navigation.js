import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css"

function Navigation(){
    return (
        <div className="nav">
            <Link to="/"><span className="nav_1">홈</span></Link>
            <div class="gnb">
                <Link to="/about" className="nav_2">ABOUT</Link>
                <Link to="#" className="nav_2">MOVIES</Link>
                <Link to="#" className="nav_2">EVENTS</Link>
                <Link to="#" className="nav_2">MY PAGE</Link>
            </div>
            <div class="search"><a href="#" className="nav_2">검색</a></div>
        </div>
    )
}

export default Navigation;