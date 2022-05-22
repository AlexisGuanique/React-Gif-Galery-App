import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { GifExpertApp } from './GifExpertApp.js'


ReactDOM.render(
  <GifExpertApp />,
  document.getElementById('root')
);






// De esta manera es para React 18
// const root = ReactDOM.createRoot(document.getElementById('root'));


// root.render(
//   <GifExpertApp />, root
// );