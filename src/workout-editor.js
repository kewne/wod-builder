'use strict';
import ReactDOM from 'react-dom';
import React from 'react';


const WorkoutEditor = ({ workout, onSave }) => {

    const WorkoutExercise = ({ name, note }) => (
        <li>
            <label>
                <input type='text' value={note} readOnly={true} />
                {name}
            </label>
        </li>
    )

    const handleSubmit = (event) => {
        onSave();
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <ol>
                {workout.map((exercise, idx) =>
                    <WorkoutExercise key={idx} {...exercise} />)}
            </ol>
            {workout.length ? <input type="submit" value="Save" /> : null}
        </form>)
}

export default WorkoutEditor