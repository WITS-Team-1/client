import React, { useState, useEffect } from 'react';
import styles from './Pomodoro.module.css';
import playButton from '../../assets/images/Pomodoro/startButton.png';
import pauseButton from '../../assets/images/Pomodoro/pauseButton.png';

function Timer(props) {
  return (
    <div className={styles.timerContainer}>
      <span className={styles.timerLabel}>{props.type}</span>
      <div className={styles.timeLeft}>
        <span id='minutes'>{props.minutes}</span>
        <span>:</span>
        <span id='seconds'>{props.seconds}</span>
      </div>
    </div>
  );
}

const Pomodoro = () => {
  const [timerActive, setTimerActive] = useState(false);
  const [breakActive, setBreakActive] = useState(false);

  const [timerMinutes, setTimerMinutes] = useState(25);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [breakSeconds, setBreakSeconds] = useState(0);

  const timerMinutesString = (minutes) =>
    Number(minutes) < 10 ? `0${minutes}` : `${minutes}`;

  const timerSecondsString = (seconds) =>
    Number(seconds) % 60 < 10 ? `0${seconds}` : `${seconds}`;

  const handleClick = (e) => {
    e.preventDefault();

    if (!timerActive && !breakActive) {
      setTimerActive(true);
    } else if (timerActive && !breakActive) {
      setTimerActive(false);
    }

    if (breakActive) setBreakActive(false);
  };

  const resetBreakTime = () => {
    setBreakMinutes(5);
    setBreakSeconds(0);
  };

  const resetTimerTime = () => {
    setTimerMinutes(25);
    setTimerSeconds(0);
  };

  // Fired everytime timer is on/off and seconds state changes
  useEffect(() => {
    resetBreakTime();
    let interval = timerActive
      ? setInterval(() => {
          clearInterval(interval);

          if (timerSeconds === 0) {
            if (timerMinutes !== 0) {
              // not 00:00, but seconds hits 0
              setTimerSeconds(59);
              setTimerMinutes(timerMinutes - 1);
            } else {
              // 00:00
              // reset time minutes + seconds, turn off timer
              setTimerActive(false);
              setBreakActive(true);
              resetTimerTime();
            }
          } else {
            // not 00:00
            setTimerSeconds(timerSeconds - 1);
          }
        }, 1000)
      : null;
  }, [timerActive, timerSeconds]);

  useEffect(() => {
    let interval = breakActive
      ? setInterval(() => {
          clearInterval(interval);

          if (breakSeconds === 0) {
            if (breakMinutes !== 0) {
              // not 00:00, but seconds hits 0
              setBreakSeconds(59);
              setBreakMinutes(breakMinutes - 1);
            } else {
              // 00:00
              // reset time minutes + seconds, turn off timer
              setBreakActive(false);
              resetBreakTime();
            }
          } else {
            // not 00:00
            setBreakSeconds(breakSeconds - 1);
          }
        }, 1000)
      : null;
  }, [breakActive, breakSeconds]);

  return (
    <div className={styles.pomodoroContainer}>
      <Timer
        type={'Timer'}
        minutes={timerMinutesString(timerMinutes)}
        seconds={timerSecondsString(timerSeconds)}
      />
      <Timer
        type={'Break'}
        minutes={timerMinutesString(breakMinutes)}
        seconds={timerSecondsString(breakSeconds)}
      />
      <button className={styles.startButton} onClick={handleClick}>
        <img
          src={timerActive || breakActive ? pauseButton : playButton}
          alt='play'
        />
      </button>
    </div>
  );
};

export default Pomodoro;
