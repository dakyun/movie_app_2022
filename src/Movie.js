import React from 'React';
import propTypes from 'prop-types';

function Movie(){
    return <h1></h1>
}

Movie.propTypes={
    id:propTypes.number.isRequired,
    year:propTypes.number.isRequired,
    title:propTypes.string.isRequired,
    summary:propTypes.string.isRequired,
    poster:propTypes.string.isRequired,
};

export default Movie;