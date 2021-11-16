import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import firebaseConfig from './api/apiKeys';
import './styles/index.scss';
import Initialize from './Initialize';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Router>
    <Initialize />
  </Router>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
