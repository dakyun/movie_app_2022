import React from 'react';
import propTypes from 'prop-types';
import "./Movie.css";
import {Link} from 'react-router-dom';
import { string } from 'prop-types';

function Movie({title,year,summary,poster,genres}){
    return (
        <div className='movie__data'>
            <Link to={{pathname:'/movie-detail', state:{year,title,summary,poster,genres}}}>
                <img src={poster} alt={title} />
                <h3 className='movie__title'>{title.slice(0,40)}</h3>
                <h5 className='movie__year'>{year}</h5>
            </Link>
            <Link to={{pathname:'/movie-detail', state:{year,title,summary,poster,genres}}}>
                <div className="hover_box"><span>MORE</span></div>
            </Link>
        </div>
    )
}

Movie.propTypes={
    year:propTypes.number.isRequired,
    title:propTypes.string.isRequired,
    summary:propTypes.string.isRequired,
    poster:propTypes.string.isRequired,
    genres:propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;