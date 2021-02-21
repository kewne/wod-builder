'use strict';
import ReactDOM from 'react-dom';
import React from 'react';

import { InMemoryRepository } from './workout'
import App from './components/app'

const workoutRepository = new InMemoryRepository()
const element = document.querySelector('#app');
ReactDOM.render(<App workoutRepository={workoutRepository} />, element);
