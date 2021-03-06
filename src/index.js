import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./Styles/index.scss";
import 'font-awesome/css/font-awesome.min.css';

import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from './reportWebVitals';

const root = (<React.StrictMode>
  <App />
</React.StrictMode>)
ReactDOM.render(root, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
