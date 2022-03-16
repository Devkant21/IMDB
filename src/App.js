import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import './App.css'
import SearchIcon from './search.svg'

const movie1 = {
  "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  "Title" : "Batman v Superman: Dawn of Justice",
  "Type" : "movie",
  "Year" : "2016",
  "imdbID" : "tt2975590"
}

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm ] =useState('');

  const API_URL = process.env.REACT_APP_API_KEY

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }
  useEffect(()=> {
    searchMovies('Superman');
  }, []);
  return (
    <div className="App">
      <h1>Incredible Movie List</h1>

      <div className="search">
        <input
          placeholder="Search Movies" 
          value = {searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
        src = {SearchIcon}
        alt = "search"
        onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {
        movies?.length > 0
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie}/>
              ))}
            </div>
        ) : (
          <div className="empty">
            <h2>
              No movies found
            </h2>
          </div>
        )
      }
    </div>
  );
}

export default App;
