'use strict';
import React from 'react'

function save(workout) {
    localStorage.setItem("workout", JSON.stringify(workout))
}

function get() {
    const workoutJson = localStorage.getItem("workout")
    return workoutJson ? JSON.parse(workoutJson) : null
}

const WorkoutLibraryEntry = ({ workout }) => <div>
    <ol>
        {workout.map((ex, idx) => <li key={idx}>{ex.note} {ex.name}</li>)}
    </ol>
</div>

const WorkoutLibrary = ({ workouts }) => {
    return <ul>
        {workouts.map((workout, idx) => <WorkoutLibraryEntry key={idx} workout={workout} />)}
    </ul>
}

export { get, save, WorkoutLibrary }