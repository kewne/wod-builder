import React, { useState } from 'react'

import WorkoutEditor from './workout/editor'
import { WorkoutLibrary } from './workout/library'

const App = ({ getSavedWorkout, onWorkoutSaved }) => {
    const [savedWorkout, setSavedWorkout] = useState(getSavedWorkout() || []);
    const [editableWorkout, setEditableWorkout] = useState(null)

    const handleSave = (workout) => {
        onWorkoutSaved(workout);
        setSavedWorkout(workout);
        setEditableWorkout(null)
    }

    const createEditor = <WorkoutEditor key="create" initialWorkout={[]} onSave={handleSave} />
    const updateEditor = <WorkoutEditor key="update" initialWorkout={editableWorkout} onSave={handleSave} />

    return (<div>
        {editableWorkout === null ? createEditor : updateEditor}
        <div>
            <h3>Workout Library</h3>
            <WorkoutLibrary workouts={[savedWorkout]} onWorkoutSelected={setEditableWorkout} />
        </div>
    </div>)
}

export default App