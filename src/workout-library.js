'use strict';

function save(workout) {
    localStorage.setItem("workout", JSON.stringify(workout))
}

function get() {
    const workoutJson = localStorage.getItem("workout")
    return workoutJson ? JSON.parse(workoutJson) : null
}

export {get, save}