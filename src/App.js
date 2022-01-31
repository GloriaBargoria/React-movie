import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddToFavorites';

const App = () => {
	const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState(''); //state value to store what the user types
    const [favorites, setFavorites] = useState([]);

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=82f1a1ee`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search){
            setMovies(responseJson.Search);
        }
    };

    const AddFavoriteMovie = (movie) => {
        const newFavoriteList = [...favorites, movie];
        setFavorites(newFavoriteList);
    };

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);
	
	return (
		<div className='container-fluid movie-app'>
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeading heading='Movies'/>
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
			<div className='row'>
                <MovieList 
                    movies={movies} 
                    favoriteComponent={AddFavorites}
                    handleFavoriteClick={AddFavoriteMovie} 
                />
			</div>
            <div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Favourites' />
			</div>
			<div className='row'>
				<MovieList movies={favorites} favoriteComponent={AddFavorites} />
			</div>
		</div>

        //line 35 we are passing AddFavorite component as a prop(favoriteComponent)
	);
};

export default App;
