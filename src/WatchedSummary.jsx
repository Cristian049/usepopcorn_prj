export default function WatchedSummary({ watched, average }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runTime));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{parseFloat(avgImdbRating).toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{parseFloat(avgUserRating).toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{parseFloat(avgRuntime).toFixed(2)} min</span>
        </p>
      </div>
    </div>
  );
}
