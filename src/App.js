import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClockComponent from './ClockComponent/ClockComponent';
import DateComponent from './ClockComponent/DateComponent';
import ThemeButton from './ThemeButton/ThemeButton';
import SplashScreen from './SplashScreen/SplashScreen';

function App() {
  return (
    <div className='App'>
      <ThemeButton></ThemeButton> 
      {/*<div className='font-face'>
        <header className='App-header'>
          <ClockComponent />
          <DateComponent />
          <SplashScreen />
        </header>
  </div> */}
    </div>
  );
}

export default App;
