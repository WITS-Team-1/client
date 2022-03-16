import React, { useState } from 'react';
import SoundWidget from './SoundWidget/SoundWidget';
import styles from './App.module.css';

import Dock from './components/Dock/Dock';
import TimeWidget from './components/TimeWidget/TimeWidget';
import Pomodoro from './components/Pomodoro/Pomodoro';

function App() {
  const [showPomodoro, setShowPomodoro] = useState(true);
  const [showSound, setShowSound] = useState(true);

  const showPomodoroHandler = () => {
    setShowPomodoro(true);
  };

  const hidePomodoroHandler = () => {
    setShowPomodoro(false);
  };

  const showSoundHandler = () => {
    setShowSound(true);
  };

  const hideSounderHandler = () => {
    setShowSound(false);
  };

  return (
    <div className={styles.layoutContainer}>
      <div className={styles.heroImage}></div>
      <TimeWidget />
      <Pomodoro show={showPomodoro} setHide={hidePomodoroHandler} />
      <SoundWidget show={showSound} setHide={hideSounderHandler} />
      <Dock showPomodoro={showPomodoroHandler} showSound={showSoundHandler} />
    </div>
  );
}

export default App;
