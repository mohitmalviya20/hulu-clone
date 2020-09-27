import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";
const VideoCard = forwardRef(({ data }, ref) => {
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path
        }`}
        alt="some movie"
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={data.overview}
      />

      <h2>{data.title || data.original_name}</h2>
      <p className="stats">
        {data.release_date || data.first_air_data} • <ThumbUpSharp />{" "}
        {data.vote_count}
      </p>
    </div>
  );
});
export default VideoCard;
