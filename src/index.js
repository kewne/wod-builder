'use strict';
import ReactDOM from 'react-dom';
import React, { useState } from 'react';

import WorkoutEditor from './workout-editor'
import { get as getWorkout, save as saveWorkout } from './workout-library'

const exercises = ["Back Squat", "Run", "Push-up"]

const ExercisePicker = ({ onSelect }) => {
    const ExerciseButton = ({ ex }) => {
        const select = () => {
            onSelect(ex)
        }
        return <button onClick={select}>{ex}</button>
    }
    return <ul>{exercises.map(ex => <li key={ex}><ExerciseButton ex={ex} /></li>)}</ul>
}

const App = ({ getSavedWorkout, saveWorkout }) => {
    const [workout, setWorkout] = useState([])
    const appendToWorkout = exercise => setWorkout(workout.concat({ name: exercise, note: "3x12" }))

    const saveNewWorkout = (workout) => {
        saveWorkout(workout);
        setWorkout([]);
    }
    if (!getSavedWorkout) {
        getSavedWorkout = () =>  [];
    }
    return (<div>
        <WorkoutEditor items={workout} onSave={() => saveNewWorkout(workout)} />
        <ExercisePicker onSelect={appendToWorkout} />
        <div>
            <h3>Workout Library</h3>
            <ul>
                {getSavedWorkout().map((exs, idx) => <li key={idx}>{exs.note} {exs.name}</li>)}
            </ul>
        </div>
    </div>)
}

const element = document.querySelector('#app');
ReactDOM.render(<App getSavedWorkout={getWorkout} setSaveWorkout={saveWorkout} />, element);
