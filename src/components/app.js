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
    const [savedWorkouts, setSavedWorkouts] = useState([]);
    const [editableWorkout, setEditableWorkout] = useState({ value: [] })

    const handleSave = (workout, id) => {
        workoutRepository.save(workout, id).then(
            (newId) => setEditableWorkout({ value: [] }),
        )
    }

    useEffect(() => {
        workoutRepository.getAll().then(setSavedWorkouts,
            (e) => {
                console.error(e)
                setSavedWorkouts([])
            })
    }, [editableWorkout])

    const editor = <WorkoutEditor key={`editor-${editableWorkout.id}`} initialWorkout={editableWorkout.value} onSave={(w) => handleSave(w, editableWorkout.id)} />

    return (<div>
        {editor}
        {savedWorkouts &&
            <div>
                <h3>Workout Library</h3>
                <WorkoutLibrary workouts={savedWorkouts} onWorkoutSelected={setEditableWorkout} />
            </div>
        }
    </div>)
}

export default WaitLoadApp