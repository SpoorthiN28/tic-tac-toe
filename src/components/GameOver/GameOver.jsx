import classes from './GameOver.module.css';

export default function GameOver({ winner, onRestart }) {
  return (
    <div className={classes.gameOver}>
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It&apos;s a draw!</p>}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}