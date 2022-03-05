import React from 'react';
import Date from './DateComponent';
import Clock from './ClockComponent';
import styles from './TimeWidget.module.css';

const TimeWidget = () => {
  return (
    <div className={styles.widgetContainer}>
      <Date />
      <Clock />
    </div>
  );
};

export default TimeWidget;
