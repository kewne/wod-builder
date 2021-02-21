import React, { useState } from 'react'

import WorkoutEditor from './workout/editor'
import { WorkoutLibrary } from './workout/library'

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

export default App