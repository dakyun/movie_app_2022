import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import MainVisual from "../components/MainVisual";

import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;

    return (
      <section>
        <div className="main__visual">
          <MainVisual />
        </div>
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">"로딩중입니다"</span>
          </div>
        ) : (
          <div className="container">
            <div className="movies">
              {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default Home;
