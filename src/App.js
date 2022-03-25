import React, { useState } from 'react';
import SoundWidget from './components/SoundWidget/SoundWidget';
import styles from './App.module.css';

import Dock from './components/Dock/Dock';
import TimeWidget from './components/TimeWidget/TimeWidget';
import Pomodoro from './components/Pomodoro/Pomodoro';
import ToDo from './components/ToDo/ToDoMaster'
import './components/ToDo/ToDoItem/Todo.css'

function App() {
  const [showPomodoro, setShowPomodoro] = useState(true);
  const [showSound, setShowSound] = useState(true);
  const [showTodo, setShowTodo] = useState(true);

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

  const showTodoHandler = () => {
    setShowTodo(true);
  };

  const hideTodoHandler = () => {
    setShowTodo(false);
  };

  return (
    <div className={styles.layoutContainer}>
      <div className={styles.heroImage}></div>
      <TimeWidget />
      <Pomodoro show={showPomodoro} setHide={hidePomodoroHandler} />
      <SoundWidget show={showSound} setHide={hideSounderHandler} />
      <ToDo show={showTodo} setHide={hideTodoHandler} />
      <Dock showPomodoro={showPomodoroHandler} showSound={showSoundHandler} showTodo={showTodoHandler}/>
      
    </div>
  );
}

export default App;
