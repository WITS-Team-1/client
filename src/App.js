import React from 'react';
import logo from './logo.svg';
//import './App.css';

import ClockComponent from './ClockComponent/ClockComponent';
import DateComponent from './ClockComponent/DateComponent';
import ChooseTheme from './ChooseThemeComponent/ChooseTheme';
import SoundWidget from './SoundWidget/SoundWidget';
import SplashScreen from './SplashScreen/SplashScreen';
import SoundWidgetv2 from './SoundWidget2/SoundWidget';

function App() {
  return (
    // <div className='App'>
    //   <ChooseTheme /> 
    //   <div className='font-face'>
    //     <header className='App-header'>
    //       <ClockComponent />
    //       <DateComponent />
    //       <SplashScreen />
    //     </header>
    //     <SoundWidget/>
    //   </div>
    // </div>
    <SoundWidgetv2/>
  );
}

export default App;
