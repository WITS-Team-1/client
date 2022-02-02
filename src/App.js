import React from "react";
import logo from './logo.svg';
import './App.css';
import ClockComponent from "./ClockComponent/ClockComponent";
import DateComponent from "./ClockComponent/DateComponent";
import SoundWidget from "./SoundWidget/SoundWidget"

function App() {
  return (
    <div className="font-face">
      <header className="App-header">
        <ClockComponent/>
        <DateComponent/>
        <SoundWidget/>
      </header>
    </div>
  );
}

export default App;
