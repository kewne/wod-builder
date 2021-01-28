'use strict';
import ReactDOM from 'react-dom';
import React, { useState } from 'react';

import WorkoutEditor from './workout-editor'

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

const App = () => {
    const [workout, setWorkout] = useState([])
    const appendToWorkout = item => setWorkout(workout.concat(item))
    return (<div>
        <WorkoutEditor items={workout} />
        <ExercisePicker onSelect={appendToWorkout} />
    </div>)
}

const element = document.querySelector('#app');
ReactDOM.render(<App />, element);
