import React from 'react';
import SoundWidgetv2 from './SoundWidget2/SoundWidget';
import styles from './App.module.css';

import Dock from './components/Dock/Dock';
import TimeWidget from './components/TimeWidget/TimeWidget';

function App() {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.heroImage}></div>
      <TimeWidget />
      <Dock />
      <SoundWidgetv2/>
    </div>
  );
}

export default App;
