import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/Korolev-Medium.woff';
import './fonts/Korolev-Bold.woff';
import './fonts/Korolev-Heavy.woff';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import SplashScreen from './SplashScreen/SplashScreen';
import ThemeButton from './ThemeButton/ThemeButton';

ReactDOM.render(
  <Router>
    <Layout>
      <Routes>
        <Route exact path='/' element={<SplashScreen />} />
        <Route exact path='/choosetheme' element={<ThemeButton />} />
      </Routes>
    </Layout>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
