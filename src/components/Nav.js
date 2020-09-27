import React from "react";
import "./Nav.css";
import Request from "./Request";
function Nav({ setSelectedOption }) {
  return (
    <div className="nav">
      <h2 onClick={() => setSelectedOption(Request.fetchTrending)}>Trending</h2>
      <h2 onClick={() => setSelectedOption(Request.fetchTopRated)}>
        Top Rated
      </h2>
      <h2 onClick={() => setSelectedOption(Request.fetchActionMovies)}>
        Action
      </h2>
      <h2 onClick={() => setSelectedOption(Request.fetchComedyMovies)}>
        Comedy
      </h2>
      <h2 onClick={() => setSelectedOption(Request.fetchHorrorMovies)}>
        Horror
      </h2>
      <h2 onClick={() => setSelectedOption(Request.fetchRomanceMovies)}>
        Romance
      </h2>
      <h2 onClick={() => setSelectedOption(Request.fetchMystery)}>Mystery</h2>
      <h2 onClick={() => setSelectedOption(Request.fetchSciFi)}>Sci-fy</h2>
      <h2 onClick={() => setSelectedOption(Request.fetchWestern)}>Western</h2>
      <h2 onClick={() => setSelectedOption(Request.fetchAnimation)}>
        Animation
      </h2>
      <h2 onClick={() => setSelectedOption(Request.fetchTV)}>TV</h2>
    </div>
  );
}

export default Nav;
