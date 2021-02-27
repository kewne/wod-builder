import React, { useEffect, useState } from 'react'

import WorkoutEditor from './workout/editor'
import { WorkoutLibrary } from './workout/library'

const WaitLoadApp = ({ repoPromise }) => {
    const [status, setStatus] = useState({ status: "initializing" })

    useEffect(() => {
        repoPromise.then(
            (result) => setStatus({ status: "success", value: result }),
            (reason) => setStatus({ status: "failed", value: reason })
        )
    }, [])
    switch (status.status) {
        case "success": return <App workoutRepository={status.value} />
        case "failed": return <span>Failed to initialize app: <pre>{status.value}</pre></span>
        default: return <span>Initializing, please wait...</span>
    }
}

const App = ({ workoutRepository }) => {
    const [savedWorkouts, setSavedWorkouts] = useState(workoutRepository.getAll());
    const [editableWorkout, setEditableWorkout] = useState(null)

    const handleSave = (workout, id) => {
        workoutRepository.save(workout, id);
        setSavedWorkouts(workoutRepository.getAll());
        setEditableWorkout(null)
    }

    let editor;
    if (editableWorkout === null) {
        editor = <WorkoutEditor key="create" initialWorkout={[]} onSave={handleSave} />
    } else {
        editor = <WorkoutEditor key="update" initialWorkout={editableWorkout.value} onSave={(w) => handleSave(w, editableWorkout.id)} />
    }

    return (<div>
        {editor}
        <div>
            <h3>Workout Library</h3>
            <WorkoutLibrary workouts={savedWorkouts} onWorkoutSelected={setEditableWorkout} />
        </div>
    </div>)
}

export default WaitLoadApp