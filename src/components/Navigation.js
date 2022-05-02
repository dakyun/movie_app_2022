import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "./Navigation.css"

function Navigation(){
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });
    return (
        <div className="nav">
            <div className={scrollPosition < 150 ? "original_header" : "change_header"}>
                <Link to="/"><span className="nav_1">홈</span></Link>
                <div class="gnb">
                    <Link to="/about" className="nav_2">ABOUT</Link>
                    <Link to="#" className="nav_2">MOVIES</Link>
                    <Link to="#" className="nav_2">EVENTS</Link>
                    <Link to="#" className="nav_2">MY PAGE</Link>
                </div>
                <div class="search"><a href="#" className="nav_2">검색</a></div>
            </div>
        </div>
    )
}

export default Navigation;