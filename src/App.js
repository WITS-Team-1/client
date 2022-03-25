import React, { useState } from 'react';
import SoundWidget from './SoundWidget/SoundWidget';
import styles from './App.module.css';

import Dock from './components/Dock/Dock';
import TimeWidget from './components/TimeWidget/TimeWidget';
import Pomodoro from './components/Pomodoro/Pomodoro';
import { CourierProvider } from "@trycourier/react-provider";
import { Toast } from "@trycourier/react-toast";


function App() {
  const [showPomodoro, setShowPomodoro] = useState(true);

  const showPomodoroHandler = () => {
    setShowPomodoro(true);
  };

  const hidePomodoroHandler = () => {
    setShowPomodoro(false);
  };

  return (
    <CourierProvider clientKey={"CLIENT_KY"} userId={"USER_ID"}>
    <Toast />
    <div className={styles.layoutContainer}>
      <div className={styles.heroImage}></div>
      <TimeWidget />
      <Pomodoro show={showPomodoro} setHide={hidePomodoroHandler} />
      <SoundWidget />
      <Dock showPomodoro={showPomodoroHandler} />
    </div>
    </CourierProvider>
  );
}

export default App;
