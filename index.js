import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  (<Router>
    <Home path='/home' component={Home} />
    <Portfolio path='/portfolio' component={Portfolio} />
  </Router>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
