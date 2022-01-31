import React from "react";


//pass list in movies as props and use map fn to loop through movies
const MovieList = (props) => {
    //take favoriteComponent prop and declare it as a variable and render it in overlay(line 14)
    const FavouriteComponent = props.favouriteComponent;
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className='image-container d-flex justify-content-start m-3'>
                    <img src={movie.Poster} alt='movie'></img>
                    <div 
                        onClick={() => props.handleFavouritesClick(movie)}
                        className='overlay d-flex align-items-center justify-content-center'
                    >
						<FavouriteComponent />
					</div>
                </div>
            ))}
        </>
    );
};

export default MovieList;