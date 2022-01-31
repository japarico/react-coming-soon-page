import React from "react";
import ReactDOM from "react-dom";
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import Optin from "./components/Optin/Optin";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Lulu 路路
          <br />
          Coming Soon
        </h1>
        <h2>Your new way to trade NFTs, crypto, metaverse, and so on<h2>
        <h2>Platform agnostic and independent, totally decentralized, non-opinated</h2>
        <Timer />
        <Optin />
        <Preloader />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
