'use strict';
import ReactDOM from 'react-dom';
import React, { useState } from 'react';

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


const WorkoutEditor = ({ onSave }) => {
    const [workout, setWorkout] = useState([])

    const WorkoutExercise = ({ name, note }) => (
        <li>
            <label>
                <input type='text' value={note} readOnly={true} />
                {name}
            </label>
        </li>
    )

    const handleSubmit = (event) => {
        console.info("Saving workout...")
        onSave(workout);
        event.preventDefault();
    }

    const appendToWorkout = exercise => {
        console.info("Appending '%s' to the workout", exercise);
        setWorkout(workout.concat({ name: exercise, note: "3x12" }));
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <ol>
                {workout.map((exercise, idx) =>
                    <WorkoutExercise key={idx} {...exercise} />)}
            </ol>
            {workout.length ? <input type="submit" value="Save" /> : null}
        </form>
        <ExercisePicker onSelect={appendToWorkout} />
    </div>
}

export default WorkoutEditor