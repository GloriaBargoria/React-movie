import React from "react";


//pass list in movies as props and use map fn to loop through movies
const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className='image-container d-flex justify-content-start m-3'>
                    <img src={movie.Poster} alt='movie'></img>
                </div>
            ))}
        </>
    );
};

export default MovieList;