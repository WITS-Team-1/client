import React from 'react';
import styles from './App.module.css';

import Dock from './components/Dock/Dock';
import TimeWidget from './components/TimeWidget/TimeWidget';
import Pomodoro from './components/Pomodoro/Pomodoro';

function App() {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.heroImage}></div>
      <TimeWidget />
      <Pomodoro/>
      <Dock />
    </div>
  );
}

export default App;
