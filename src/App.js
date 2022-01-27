import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClockComponent from './ClockComponent/ClockComponent';
import DateComponent from './ClockComponent/DateComponent';

import SplashScreen from './SplashScreen/SplashScreen';

function App() {
  return (
    <div className='App'>
      <div className='font-face'>
        <header className='App-header'>
          <ClockComponent />
          <DateComponent />
          <SplashScreen />
        </header>
      </div>
    </div>
  );
}

export default App;
