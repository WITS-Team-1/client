import React from 'react';
import styles from './App.module.css';

import Dock from './components/Dock/Dock';
import TimeWidget from './components/TimeWidget/TimeWidget';

function App() {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.heroImage}></div>
      <TimeWidget />
      <Dock />
    </div>
  );
}

export default App;
