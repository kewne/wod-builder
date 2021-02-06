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

const WorkoutExercise = ({ name, note, onNoteUpdated }) => {
    function handleNoteUpdated(event) {
        onNoteUpdated(event.target.value)
    }
    return (
    <li>
        <label>
            <input type='text' value={note} onChange={handleNoteUpdated} />
            {name}
        </label>
    </li>
)
    }

const WorkoutEditor = ({ onSave }) => {
    const [workout, setWorkout] = useState([])

    const handleSubmit = (event) => {
        console.info("Saving workout...")
        onSave(workout);
        setWorkout([])
        event.preventDefault();
    }

    const appendToWorkout = exercise => {
        console.info("Appending '%s' to the workout", exercise);
        setWorkout(workout.concat({ name: exercise, note: "" }));
    }

    function handleNoteUpdated(idx, note) {
        const newWorkout = [...workout]
        newWorkout[idx].note  = note
        setWorkout(newWorkout)
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <ol>
                {workout.map((exercise, idx) =>
                    <WorkoutExercise key={idx} {...exercise} onNoteUpdated={(note) => handleNoteUpdated(idx, note)} />)}
            </ol>
            {workout.length ? <input type="submit" value="Save" /> : null}
        </form>
        <ExercisePicker onSelect={appendToWorkout} />
    </div>
}

export default WorkoutEditor