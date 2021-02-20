'use strict';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app'

import { get as getWorkout, save as saveWorkout } from './components/workout/library'

const element = document.querySelector('#app');
ReactDOM.render(<App getSavedWorkout={getWorkout} onWorkoutSaved={saveWorkout} />, element);
