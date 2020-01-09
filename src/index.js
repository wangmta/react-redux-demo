import React from 'react';
import { render } from 'react-dom';
// define entry point of the app
import { BrowserRouter } from 'react-router-dom';
// css is handled by webpack, it will bundle bootstrap into a single css and inject it into Index.html
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import './index.css';
import configureStore from './redux/configureStore';
// provider is a higher order componnet that provides data to child components
import { Provider as ReduxProvider } from 'react-redux';

const store = configureStore();

// entire app is wrapped by redux provider
render(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>,
  document.getElementById('app')
);
