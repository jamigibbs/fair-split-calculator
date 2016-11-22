import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactGA from 'react-ga';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactGA.initialize('UA-3363703-50');

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

ReactDOM.render(
  <App onUpdate={logPageView} />,
  document.getElementById('root')
);
