import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/fonts/Korolev-Medium.woff';
import './assets/fonts/Korolev-Bold.woff';
import './assets/fonts/Korolev-Heavy.woff';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import SplashScreen from './components/SplashScreen/SplashScreen';
import ThemeButton from './components/ThemeSelection/ThemeButton';
import ChooseTheme from './components/ThemeCarousel/ChooseTheme';
import App from './App';

ReactDOM.render(
  <Router>
    <Layout>
      <Routes>
        <Route exact path='/' element={<SplashScreen />} />
        <Route exact path='/choosetheme' element={<ThemeButton />} />
        <Route exact path='cityscape/select/' element={<ChooseTheme />} />
        <Route exact path='cityscape/select/hawaii' element={<App />} />
      </Routes>
    </Layout>
  </Router>,
  document.getElementById('root')
);
