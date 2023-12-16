import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// 1- Loop the timeframes and return only the one that is needed
// 2- find a way to pass the clicked timeline element to the main app for -1
