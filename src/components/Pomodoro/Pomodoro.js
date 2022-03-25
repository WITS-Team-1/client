import React, { useState, useEffect } from 'react';
import styles from './Pomodoro.module.css';
import playButton from '../../assets/images/Pomodoro/startButton.png';
import pauseButton from '../../assets/images/Pomodoro/pauseButton.png';
import closeButton from '../../assets/images/Pomodoro/closeButton.png';
import {useToast } from "@trycourier/react-toast";

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

const Pomodoro = (props) => {
  const [timerActive, setTimerActive] = useState(false);
  const [breakActive, setBreakActive] = useState(false);

  const [timerMinutes, setTimerMinutes] = useState(25);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [breakSeconds, setBreakSeconds] = useState(0);
  const [show] = useToast();

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
    return () => {
      clearInterval(interval);
    };
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
              show("Pomedo Timer Break")
            }
          } else {
            // not 00:00
            setBreakSeconds(breakSeconds - 1);
          }
        }, 1000)
      : null;
    return () => {
      clearInterval(interval);
    };
  }, [breakActive, breakSeconds]);

  const modalHandler = (e) => {
    e.preventDefault();
    props.setHide();
  };

  return (
    <div
      className={styles.widgetContainer}
      style={{ display: props.show ? 'block' : 'none' }}
    >
      <div className={styles.widgetHeader}>
        <button onClick={modalHandler}>
          <img src={closeButton} alt='close' width={14} />
        </button>
      </div>
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
    </div>
  );
};

export default Pomodoro;
