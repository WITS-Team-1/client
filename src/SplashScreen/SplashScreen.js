import React from 'react';
import logo from './Group 68.png';
import styles from './SplashScreen.module.css';

import { useNavigate } from 'react-router-dom';

const SplashScreen = (props) => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate('/choosetheme');
  };

  return (
    <div className={styles.splashScreenContainer} onClick={handleClick}>
      <img src={logo} alt='splashscreenImage' />
    </div>
  );
};

export default SplashScreen;
