import React from 'react';
import ReactDOM from 'react-dom';
import GifExpertApp from './GifExpertApp';
import './index.css';
import 'animate.css';

ReactDOM.render(
  <GifExpertApp defaultCategories={['Silicon valley']} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals