'use strict';
import ReactDOM from 'react-dom';
import React from 'react';
import "regenerator-runtime/runtime";

import { inMemoryRepository } from './workout'
import App from './components/app'

const element = document.querySelector('body');
ReactDOM.render(<App repoPromise={inMemoryRepository()} />, element);
