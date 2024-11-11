import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-52  relative z-20 pl-12 ">
        <MovieList
          title={"Now Playing Movies"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"popular"} movies={movies.popularMovies} />
        <MovieList title={"horror"} movies={movies.nowPlayingMovies} />
        <MovieList title={"comedy"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
