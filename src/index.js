import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
// import App from './components/App';
import reportWebVitals from './reportWebVitals';
// import App from './application/App_logement';
// import App from './application/App';
import App from './pages/home/App_home';
// import App from './application/App_404';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
