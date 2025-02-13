import "./Game.css";

const Game = ({ verifyLetter }) => {
  return (
    <div>
      <div className="game">
        <p className="points">
          <span>Pontuação: 000</span>
        </p>
        <h1>Adivinhe a Palavra</h1>
        <h3 className="tip">
          Dica sobre a palabra: <span>Dica...</span>
        </h3>
        <p>Você ainda tem XXX tentativas(s).</p>
        <div className="wordContainer">
          <span className="letter"> A </span>
          <span className="blankSquare"></span>
        </div>
        <div className="letterContainer">
          <p>Tente adivinhar a letra da palavra: </p>
          <form>
            <input type="text" name="letter" maxLength="1" required />
            <button>Jogar!</button>
          </form>
        </div>
        <div className="wrongletters">
          <p>Letras já utilizadas: </p>
          <span> a, </span>
          <span>c, </span>
        </div>
      </div>
    </div>
  );
};

export default Game;
