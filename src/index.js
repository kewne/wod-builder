'use strict';
import ReactDOM from 'react-dom';
import React, { useState } from 'react';

import WorkoutEditor from './workout-editor'
import { get as getWorkout, save as saveWorkout, WorkoutLibrary } from './workout-library'

const App = ({ getSavedWorkout, onWorkoutSaved }) => {
    const [savedWorkout, setSavedWorkout] = useState(getSavedWorkout() || []);
    const handleSave = (workout) => {
        onWorkoutSaved(workout);
        setSavedWorkout(workout);
    }
    return (<div>
        <WorkoutEditor onSave={handleSave} />
        <div>
            <h3>Workout Library</h3>
            <WorkoutLibrary workouts={savedWorkout} />
        </div>
    </div>)
}

const element = document.querySelector('#app');
ReactDOM.render(<App getSavedWorkout={getWorkout} onWorkoutSaved={saveWorkout} />, element);
