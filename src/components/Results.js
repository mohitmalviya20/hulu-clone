import React, { useState, useEffect } from "react";
import FlipMove from "react-flip-move";
import VideoCard from "./VideoCard";
import "./Results.css";
import axios from "./Axios";
function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedOption]);
  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} data={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
