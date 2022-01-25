import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Dock from './components/Dock';
import reportWebVitals from './reportWebVitals';
import './fonts/Korolev-Medium.woff'
import './fonts/Korolev-Bold.woff'
import './fonts/Korolev-Heavy.woff'

ReactDOM.render(
  <React.StrictMode>
  <App />
  <Dock/>
</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
