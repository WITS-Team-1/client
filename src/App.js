import React, { useState } from 'react';
import SoundWidgetv2 from './SoundWidget2/SoundWidget';
import styles from './App.module.css';

import Dock from './components/Dock/Dock';
import TimeWidget from './components/TimeWidget/TimeWidget';
import Pomodoro from './components/Pomodoro/Pomodoro';

function App() {
  const [showPomodoro, setShowPomodoro] = useState(true);

  const showPomodoroHandler = () => {
    setShowPomodoro(true);
  };

  const hidePomodoroHandler = () => {
    setShowPomodoro(false);
  };

  return (
    <div className={styles.layoutContainer}>
      <div className={styles.heroImage}></div>
      <TimeWidget />
      <Pomodoro show={showPomodoro} setHide={hidePomodoroHandler} />
      <SoundWidgetv2/>
      <Dock showPomodoro={showPomodoroHandler} />
    </div>
  );
}

export default App;
