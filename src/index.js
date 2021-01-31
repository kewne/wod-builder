'use strict';
import ReactDOM from 'react-dom';
import React, { useState } from 'react';

import WorkoutEditor from './workout-editor'
import { get as getWorkout, save as saveWorkout } from './workout-library'

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
            <ul>
                {savedWorkout.map((exs, idx) => <li key={idx}>{exs.note} {exs.name}</li>)}
            </ul>
        </div>
    </div>)
}

const element = document.querySelector('#app');
ReactDOM.render(<App getSavedWorkout={getWorkout} onWorkoutSaved={saveWorkout} />, element);
