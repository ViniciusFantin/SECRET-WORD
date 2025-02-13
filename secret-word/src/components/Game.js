import "./Game.css";

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  guesses,
  score,
  letter,
}) => {
  return (
    <div>
      <div className="game">
        <p className="points">
          <span>Pontuação: {score}</span>
        </p>
        <h1>Adivinhe a Palavra</h1>
        <h3 className="tip">
          Dica sobre a palabra: <span>{pickedCategory}</span>
        </h3>
        <p>Você ainda tem {guesses} tentativas(s).</p>
        <div className="wordContainer">
          {letters.map((letter, i) =>
            guessedLetters.includes(letter) ? (
              <span key={i} className="letter">
                {letter}
              </span>
            ) : (
              <span key={i} className="blankSquare">
                {" "}
              </span>
            )
          )}
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
