'use strict';
import ReactDOM from 'react-dom';
import React from 'react';

const App = () => <h1>Hello World</h1>

const element = document.querySelector('#app');
ReactDOM.render(<App />, element);
