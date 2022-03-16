import { useEffect } from "react";

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
      <h1>Hello</h1>
    </div>
  );
}

export default App;
