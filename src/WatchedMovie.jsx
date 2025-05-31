export default function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runTime} min</span>
        </p>
      </div>

      <button
        onClick={() => onDeleteWatched(movie.imdbID)}
        className="btn-delete"
      >
        X
      </button>
    </li>
  );
}
