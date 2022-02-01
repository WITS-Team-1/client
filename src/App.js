import React from "react";
import logo from './logo.svg';
import './App.css';
import ClockComponent from "./ClockComponent/ClockComponent";
import DateComponent from "./ClockComponent/DateComponent";
import ChooseTheme from './ChooseThemeComponent/ChooseTheme';

function App() {
  return (
    <div className="App">
      <ChooseTheme></ChooseTheme> 
    {/* <div className="font-face">
      <header className="App-header">
        <ClockComponent />
        <DateComponent />
      </header>
    </div> */}
  </div>

  );
}

export default App;
