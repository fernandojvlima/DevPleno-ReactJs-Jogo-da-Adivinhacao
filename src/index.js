import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App(props) {
  const [numMin, setNumMin] = useState(0);
  const [numMax, setNumMax] = useState(300);
  const [palpite, setPalpite] = useState(150);
  const [numTentativas, SetTentativas] = useState(1);
  const [estadoJogo, setJogo] = useState("ENTRADA");

  const Menor = () => {
    setNumMax(palpite);
    setNumMin(numMin);
    SetTentativas(numTentativas + 1);
  };

  const Maior = () => {
    setNumMin(palpite);
    setNumMax(numMax);
    SetTentativas(numTentativas + 1);
  };

  const iniciarJogo = () => {
    setJogo("RODANDO");
  };

  const Acertou = () => {
    setJogo("FIM");
    return (
      <div>
        <h3>O Computador acertou o número em {numTentativas} palpites </h3>
        <br />
        <h4>Deseja Jogar Novamente?</h4>
        <button onClick={iniciarJogo}>Reiniciar</button>
      </div>
    );
  };

  if (estadoJogo === "RODANDO") {
    return (
      <div className="App">
        <h2>Jogo da Adivinhação</h2>O número escolhido foi : {palpite} ?
        <br />
        <br />
        <button onClick={Menor}>Menor</button>
        <button onClick={Acertou}>Acertou</button>
        <button onClick={Maior}>Maior</button>
        <h4>
          Intervalo de números entre Min: {numMin} e Max: {numMax}
        </h4>
        <h5>Numero de Tentativas Utilizadas: {numTentativas}</h5>
      </div>
    );
  }

  if (estadoJogo === "ENTRADA") {
    return (
      <div className="App">
        <h2>Bem Vindo Ao Jogo da Adivinhação</h2>
        <h3>Escolha um número entre 0 e 300</h3>
        <button onClick={iniciarJogo}>Iniciar</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
