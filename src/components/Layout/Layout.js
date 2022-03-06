import React from 'react';
import Dock from '../Dock/Dock';
import styles from './Layout.module.css';

const Layout = (props) => {
  return (
    <div className={styles.pageLayout}>
      {props.children}
      <Dock />
    </div>
  );
};

export default Layout;
