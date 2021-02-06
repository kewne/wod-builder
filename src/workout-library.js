'use strict';
import React from 'react'

function save(workout) {
    localStorage.setItem("workout", JSON.stringify(workout))
}

function get() {
    const workoutJson = localStorage.getItem("workout")
    return workoutJson ? JSON.parse(workoutJson) : null
}

const WorkoutLibrary = ({workouts}) => {
    return <ul>
        {workouts.map((exs, idx) => <li key={idx}>{exs.note} {exs.name}</li>)}
    </ul>
}

export { get, save, WorkoutLibrary}