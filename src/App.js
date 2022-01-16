import React from "react";
import logo from './logo.svg';
import './App.css';
import ClockComponent from "./ClockComponent/ClockComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClockComponent/>
      </header>
    </div>
  );
}

export default App;
