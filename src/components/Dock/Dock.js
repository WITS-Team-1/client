import React, { useState } from 'react';
import './Dock.css';
import themes from '../../assets/images/dock/themes.png';
import calendar from '../../assets/images/dock/calendar.png';
import timer from '../../assets/images/dock/timer.png';
import spotify from '../../assets/images/dock/spotify.png';
import todolist from '../../assets/images/dock/todolist.png';
import sounds from '../../assets/images/dock/sounds.png';
import stickers from '../../assets/images/dock/stickers.png';
import DatePicker from 'sassy-datepicker';
import exit from '../../assets/images/x_button.png';

const Dock = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const Calendar = () => {
    const onChange = (date) => {
      <button aria-label='edit'>
        <edit-icon />
      </button>;
    };
  };
  const openCalendar = () => {
    setIsOpen(true);
  };
  const toggleShowHide = () => {
    setIsOpen((prev) => !prev);
  };

  const soundHandler = (e) => {
    e.preventDefault();
    props.showSound();
  };

  const pomodoroHandler = (e) => {
    e.preventDefault();
    props.showPomodoro();
  };

  return (
    <React.Fragment>
      <div className='calendarwidget'>
        {isOpen ? (
          <React.Fragment>
            <div className='calendarFonts'>
              <button className='button-exit'>
                <img src={exit} alt='exit' onClick={toggleShowHide} />
              </button>
              <DatePicker onChange={Calendar}></DatePicker>
            </div>
          </React.Fragment>
        ) : null}
      </div>
      <div className='footer'>
        <div id='container'>
          <div id='cont'>
            <div className='footer_center'>
              <section id='icons'>
                <button className='button-noborder'>
                  <img src={themes} width='60' height='60' alt='Theme' />
                </button>
                <button className='button-noborder' onClick={openCalendar}>
                  <img src={calendar} width='60' height='60' alt='Calendar' />
                </button>
                <button className='button-noborder' onClick={pomodoroHandler}>
                  <img src={timer} width='60' height='60' alt='Timer' />
                </button>
                <button className='button-noborder'>
                  <img src={spotify} width='60' height='60' alt='Spotify' />
                </button>
                <button className='button-noborder'>
                  <img src={todolist} width='60' height='60' alt='To-do List' />
                </button>
                <button className='button-noborder' onClick={soundHandler}>
                  <img src={sounds} width='60' height='60' alt='Sounds' />
                </button>
                <button className='button-noborder'>
                  <img src={stickers} width='60' height='60' alt='Sticky' />
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dock;
