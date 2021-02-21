'use strict';
import React from 'react'

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
        {workouts.map((workout) =>
            <li key={workout.id}>
                <WorkoutLibraryEntry workout={workout.value} onSelected={() => onWorkoutSelected(workout)} />
            </li>)}
    </ul>
}

export { WorkoutLibrary }