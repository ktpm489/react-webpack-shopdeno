import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App'
setTimeout(function() {
  ReactDOM.render(<App/>, document.getElementById('app'));
}, 300);
