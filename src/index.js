'use strict';
import ReactDOM from 'react-dom';
import React, { useState } from 'react';


const Workout = ({ items }) => {
    const WorkoutItem = ({ item }) => <li>{item}</li>

    return <ol>{items.map(item => <WorkoutItem key={item} item={item} />)}</ol>
}

const exercises = ["Back Squat", "Run", "Push-up"]

const ExercisePicker = ({ onSelect }) => {
    const ExerciseButton = ({ ex }) => {
        const select = () => {
            onSelect(ex)
        }
        return <button onClick={select}>{ex}</button>
    }
    return <ul>{exercises.map(ex => <li><ExerciseButton key={ex} ex={ex} /></li>)}</ul>
}

const App = () => {
    const [workout, setWorkout] = useState([])
    const appendToWorkout = item => setWorkout(workout.concat(item))
    return (<div>
        <Workout items={workout} />
        <ExercisePicker onSelect={appendToWorkout} />
    </div>)
}

const element = document.querySelector('#app');
ReactDOM.render(<App />, element);
