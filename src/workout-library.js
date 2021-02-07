'use strict';
import React from 'react'

function save(workout) {
    localStorage.setItem("workout", JSON.stringify(workout))
}

function get() {
    const workoutJson = localStorage.getItem("workout")
    return workoutJson ? JSON.parse(workoutJson) : null
}

const WorkoutLibraryEntry = ({ workout, onSelected }) => {
    const handleClick = (event) => {
        console.debug("Workout from library selected", workout)
        onSelected(workout)
        event.preventDefault()
    }

    return <div>
        <ol>
            {workout.map((ex, idx) => <li key={idx}>{ex.note} {ex.name}</li>)}
        </ol>
        <button type="button" onClick={handleClick}>Edit</button>
    </div>
}

const WorkoutLibrary = ({ workouts, onWorkoutSelected }) => {
    return <ul>
        {workouts.map((workout, idx) =>
            <li key={idx}>
                <WorkoutLibraryEntry workout={workout} onSelected={onWorkoutSelected} />
            </li>)}
    </ul>
}

export { get, save, WorkoutLibrary }