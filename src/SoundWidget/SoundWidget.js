import React, { useState, useRef } from 'react';
import sound_widget from '../assets/images/sound_widget.png';
import x_button from '../assets/images/x_button.png';
import styles from './SoundWidget.module.css';

function SoundSlider(props) {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.soundTitle}>
        <p>{props.soundName}</p>
      </div>
      <div className={styles.soundRangeContainer}>
        <img src={sound_widget} width='20' height='20' alt='volume-icon' />{' '}
        <input
          type='range'
          min='0'
          max='100'
          step='0.01'
          className={styles.inputRange}
          name='volume'
          id={props.soundName}
          onChange={props.changeVolumeHandler}
        />
      </div>
    </div>
  );
}

function SoundWidgetv2() {
  const [volume, setVolume] = useState({});
  const [hideWidget, setHideWidget] = useState(false);

  const hideWidgetClick = () => {
    setHideWidget(true);
  };

  const widgetDisplayStyle = hideWidget ? 'none' : 'null';

  const sounds = [
    {
      soundName: 'WAVES',
    },
    {
      soundName: 'WIND',
    },
    {
      soundName: 'BIRDS',
    },
    {
      soundName: 'WHITE NOISE',
    },
    {
      soundName: 'MUSIC',
    },
  ];

  const onChangeVolume = (e) => {
    console.log(e.target.value);
    setVolume((prev) => {
      const volumeObj = {
        ...prev,
        [e.target.id]: e.target.value,
      };
      return volumeObj;
    });
  };

  const soundsWidget = sounds.map((val, index) => {
    return (
      <SoundSlider
        key={val + index}
        soundName={val.soundName}
        changeVolumeHandler={onChangeVolume}
      />
    );
  });

  return (
    <div className={styles.positionAbsoluteContainer}>
      <div
        className={styles.widgetContainer}
        style={{ display: widgetDisplayStyle }}
      >
        <div className={styles.closeButton}>
          <button onClick={hideWidgetClick}>
            {' '}
            <img src={x_button} width='16' height='16' alt='x-icon' />{' '}
          </button>
        </div>
        {soundsWidget}
      </div>
    </div>
  );
}
export default SoundWidgetv2;
