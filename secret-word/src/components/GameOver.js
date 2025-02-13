import "./GameOver.css";

const GameOver = ({ Retry }) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={Retry}>Recomeçar</button>
    </div>
  );
};

export default GameOver;
