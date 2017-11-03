
import React from 'react';
import ReactDOM from 'react-dom';

require('./styles/app.less')

if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
 } else {
 	console.log('Looks like we are in production mode!');
 }
ReactDOM.render(
  <div>hello world</div>,
  document.getElementById('root')
)
