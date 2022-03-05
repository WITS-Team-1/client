import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './assets/fonts/Korolev-Medium.woff';
import './assets/fonts/Korolev-Bold.woff';
import './assets/fonts/Korolev-Heavy.woff';

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
