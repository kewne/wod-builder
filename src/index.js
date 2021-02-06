'use strict';
import ReactDOM from 'react-dom';
import React, { useState } from 'react';

import WorkoutEditor from './workout-editor'
import { get as getWorkout, save as saveWorkout, WorkoutLibrary } from './workout-library'

const App = ({ getSavedWorkout, onWorkoutSaved }) => {
    const [savedWorkout, setSavedWorkout] = useState(getSavedWorkout() || []);
    const [editableWorkout, setEditableWorkout] = useState(null)

    const handleSave = (workout) => {
        onWorkoutSaved(workout);
        setSavedWorkout(workout);
        setEditableWorkout(null)
    }

    const createEditor = <WorkoutEditor initialWorkout={[]} onSave={handleSave} />
    const updateEditor = <WorkoutEditor initialWorkout={editableWorkout} onSave={handleSave} />

    return (<div>
        {editableWorkout === null ? createEditor : updateEditor}
        <div>
            <h3>Workout Library</h3>
            <WorkoutLibrary workouts={savedWorkout} />
        </div>
    </div>)
}

const element = document.querySelector('#app');
ReactDOM.render(<App getSavedWorkout={getWorkout} onWorkoutSaved={saveWorkout} />, element);
