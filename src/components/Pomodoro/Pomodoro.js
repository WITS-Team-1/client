import React, { useState } from 'react';
import styles from './Pomodoro.module.css';
import playButton from '../../assets/images/Pomodoro/startButton.png';
import pauseButton from '../../assets/images/Pomodoro/pauseButton.png';

const Pomodoro = () => {
  const [timerActive, setTimerActive] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setTimerActive(!timerActive);
  };

  return (
    <div className={styles.pomodoroContainer}>
      <div className={styles.timerContainer}>
        <span className={styles.timerLabel}>Timer</span>
        <div className={styles.timeLeft}>
          <span id='minutes'>25</span>
          <span>:</span>
          <span id='seconds'>00</span>
        </div>
      </div>
      <div className={styles.timerContainer}>
        <span className={styles.timerLabel}>Break</span>
        <div className={styles.timeLeft}>
          <span id='minutes'>05</span>
          <span>:</span>
          <span id='seconds'>00</span>
        </div>
      </div>
      <button className={styles.startButton} onClick={handleClick}>
        <img src={timerActive ? pauseButton : playButton} alt='play' />
      </button>
    </div>
  );
};

export default Pomodoro;
