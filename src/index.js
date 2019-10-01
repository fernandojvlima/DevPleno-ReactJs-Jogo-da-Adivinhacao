import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App(props) {
  //Entrada, Rodando, Fim
  const [estadoJogo, setJogo] = useState("ENTRADA");

  //Min e Maximo Numero
  const [numMin, setNumMin] = useState(0);
  const [numMax, setNumMax] = useState(300);

  //Palpites
  const [palpite, setPalpite] = useState(150);

  //Contador de Palpites
  const [numTentativas, SetTentativas] = useState(1);

  const iniciarJogo = () => {
    setJogo("RODANDO");
    setNumMin(0);
    setNumMax(300);
    setPalpite(150);
    SetTentativas(1);
  };

  const Menor = () => {
    SetTentativas(numTentativas + 1);
    setNumMax(palpite);
    setNumMin(numMin);
    const proxPalpite = parseInt((palpite - numMin) / 2) + numMin;
    setPalpite(proxPalpite);
  };

  const Maior = () => {
    SetTentativas(numTentativas + 1);
    setNumMin(palpite);
    setNumMax(numMax);
    const proxPalpite = parseInt((numMax - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const Acertou = () => {
    setJogo("FIM");
  };

  if (estadoJogo === "ENTRADA") {
    return (
      <div className="App">
        <h2>Bem Vindo Ao Jogo da Adivinhação</h2>
        <h3>Escolha um número entre 0 e 300</h3>
        <button onClick={iniciarJogo}>Iniciar</button>
      </div>
    );
  }

  if (estadoJogo === "FIM") {
    return (
      <div className="App">
        <h3>O Computador acertou o número em {numTentativas} palpites </h3>
        <h4>Deseja Jogar Novamente?</h4>
        <button onClick={iniciarJogo}>Reiniciar</button>
      </div>
    );
  }

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
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
