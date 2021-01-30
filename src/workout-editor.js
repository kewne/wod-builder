'use strict';
import ReactDOM from 'react-dom';
import React from 'react';


const WorkoutEditor = ({ items, onSubmit }) => {

    const WorkoutItem = ({ item, note }) => (
        <li>
            <label>
                <input type='text' value={note} readOnly={true} />
                {item}
            </label>
        </li>
    )


    return (
        <form onSubmit={onSubmit}>
            <ol>
                {items.map((item, idx) =>
                    <WorkoutItem key={idx} item={item.name} note={item.note} />)}
            </ol>
            {items.length ? <input type="submit" value="Save" /> : null}
        </form>)
}

export default WorkoutEditor