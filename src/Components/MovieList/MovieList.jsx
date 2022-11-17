import Movie from "../Movie/Movie";
import './MovieList.css'

const MovieList = (props) => {
    return (
        <div>
            <h1 className="movie-list-title">MOVIE LIST</h1>
            <div className="movie-list">
                {props.movies.map((movie) => {
                    return <Movie key={movie.id} movie={movie} />
                })}
            </div>
        </div>
    );
}
 
export default MovieList;