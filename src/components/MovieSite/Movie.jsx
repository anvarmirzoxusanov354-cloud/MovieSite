import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import "../../index.css"; 

function Movie() {
  const API_KEY = "dcea1fd7b3e65d34387ad6de7ef9cc5e";
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState("top_rated");
  const [search, setSearch] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [score, setScore] = useState("");
  const [page, setPage] = useState(1);

  const getMovies = () => {
    let url = `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&page=${page}`;
    if (search.trim() !== "") {
      url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}&page=${page}`;
    }

    axios.get(url).then((res) => {
      let results = res.data?.results || [];
      if (score) results = results.filter(m => m.vote_average >= parseFloat(score));
      if (min) results = results.filter(m => new Date(m.release_date).getFullYear() >= parseInt(min));
      if (max) results = results.filter(m => new Date(m.release_date).getFullYear() <= parseInt(max));
      setMovies(results);
    }).catch(err => console.log(err));
  };

  useEffect(() => { 
    getMovies(); 
  }, [type, page, search, min, max, score]);

  return (
    <div>
      <div className="header-inner">
        <div className="container rel">
          <div className="row2">
            <button className="btns" onClick={() => setType("top_rated")}>Top kinolar</button>
            <button className="btns" onClick={() => setType("popular")}>popular</button>
            <button className="btns" onClick={() => setType("upcoming")}>upcoming</button>
          </div>

          <div className="fl">
            <input type="text" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)} />
            <input type="number" placeholder="min" value={min} onChange={(e) => setMin(e.target.value)} />
            <input type="number" placeholder="max" value={max} onChange={(e) => setMax(e.target.value)} />
            <input type="number" placeholder="score" value={score} onChange={(e) => setScore(e.target.value)} />
            <button className="btn" type="button">button</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="append">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <div className="pn">
          <button className="prev" disabled={page === 1} onClick={() => setPage(page - 1)}>prev</button>
          <span className="title">{page}</span>
          <button className="next" onClick={() => setPage(page + 1)}>next</button>
        </div>
      </div>
    </div>
  );
}

export default Movie;