
import React, { useEffect, useState} from 'react';
import './App.css';
import seachIcon from './search.svg'
import MovieCard from './MovieCard'

const API_URL = 'https://www.omdbapi.com?apikey=67db1d36'

function App() {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Star Wars');
    },[])

    return (
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input 
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
                <img 
                    src={seachIcon} 
                    alt='search icon'
                    onClick={() => searchMovies(searchTerm)} 
                />
            </div>
            {
                movies?.length > 0 ? (   
                    <div className='container'>
                       {movies.map((movie) => (
                        <MovieCard movie = {movie}/>
                       ))} 
                    </div>)
                : (
                    <div className="empty">
                        <h2>No Movie found</h2>
                    </div>
                )
                    
            }
        </div>
    )
}

export default App