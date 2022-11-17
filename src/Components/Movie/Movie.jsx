import './Movie.css'

const Movie = (props) => {
    return (
        <div className="card movie-card" >
            <img className="card-img-top" src={props.movie.image} alt="movie poster" />
            <div className="card-body">
                <div className="card-title movie-title">{props.movie.name}</div>
                <div className="card-text movie-text">
                    Directed by: {props.movie.director}
                    <br/> Genre: {props.movie.genre}
                </div>
            </div>
        </div>
    );
}
 
export default Movie;