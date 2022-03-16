import React from 'react';
import './Dock.css';
import themes from '../../assets/images/themes.png';
import calendar from '../../assets/images/calendar.png';
import timer from '../../assets/images/timer.png';
import spotify from '../../assets/images/spotify.png';
import todolist from '../../assets/images/todolist.png';
import sounds from '../../assets/images/sounds.png';
import stickers from '../../assets/images/stickers.png';
import { Link } from 'react-router-dom';

const Dock = (props) => {
  const pomodoroHandler = (e) => {
    e.preventDefault();
    props.showPomodoro();
  };

  const soundHandler = (e) => {
    e.preventDefault();
    props.showSound();
  };

  return (
    <React.Fragment>
      <div className='footer'>
        <div id='container'>
          <div id='cont'>
            <div className='footer_center'>
              <section id='icons'>
                <Link to='/chooseTheme'>
                  <img src={themes} width='60' height='60' alt='Theme' />
                </Link>
                <a href='/index.html'>
                  <img src={calendar} width='60' height='60' alt='Calendar' />
                </a>
                <button onClick={pomodoroHandler}>
                  <img src={timer} width='60' height='60' alt='Timer' />
                </button>
                <a href='index.html'>
                  <img src={spotify} width='60' height='60' alt='Spotify' />
                </a>
                <a href='index.html'>
                  <img src={todolist} width='60' height='60' alt='To-do List' />
                </a>
                <button onClick={soundHandler}>
                  <img src={sounds} width='60' height='60' alt='Sounds' />
                </button>
                <a href='index.html'>
                  <img src={stickers} width='60' height='60' alt='Sticky' />
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Dock;
