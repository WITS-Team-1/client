import React from "react";
import logo from './logo.svg';
import './App.css';
import ClockComponent from "./ClockComponent/ClockComponent";
import DateComponent from "./ClockComponent/DateComponent";

function App() {
  return (
    <div className="font-face">
      <header className="App-header">
        <ClockComponent/>
        <DateComponent/>
      </header>
    </div>
  );
}

export default App;
