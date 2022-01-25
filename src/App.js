import React from "react";
import logo from './logo.svg';
import './App.css';
import ClockComponent from "./ClockComponent/ClockComponent";
import DateComponent from "./ClockComponent/DateComponent";
import ChooseTheme from './ChooseThemeComponent/ChooseTheme';

function App() {
  return (
    <div className="font-face">
        <ChooseTheme></ChooseTheme>
        <header className="App-header">
          <ClockComponent/>
          <DateComponent/>
        </header>
    </div>
  );
}

export default App;
