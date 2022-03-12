import React from 'react';
import styles from './Pomodoro.module.css';
import playButton from '../../assets/images/Pomodoro/startButton.png';

const Pomodoro = () => {
  const handleClick = (e) => {
    e.preventDefault();
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
        <img src={playButton} alt='play' />
      </button>
    </div>
  );
};

export default Pomodoro;
