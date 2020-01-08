import React from 'react';
import { render } from 'react-dom';
// define entry point of the app
import { BrowserRouter } from 'react-router-dom';
// css is handled by webpack, it will bundle bootstrap into a single css and inject it into Index.html
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
