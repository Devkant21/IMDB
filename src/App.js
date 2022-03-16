import { useEffect } from "react";
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

  const API_URL = process.env.REACT_APP_API_KEY

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
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
          value = "Batman"
          onChange={() => {}}
        />
        <img 
        src = {SearchIcon}
        alt = "search"
        onClick={() => {}}
        />
      </div>
      <div className="container">

      </div>
    </div>
  );
}

export default App;
