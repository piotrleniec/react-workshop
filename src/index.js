import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import DevTools from './components/DevTools'
import store from './store'
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
)
