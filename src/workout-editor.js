'use strict';
import ReactDOM from 'react-dom';
import React, { useState } from 'react';


const WorkoutEditor = ({ items }) => {
    const WorkoutItem = ({ item }) => (
        <li>
            <label>
                <input type='text' />
                {item}
            </label>
        </li>
    )

    return (
        <form>
            <ol>{items.map((item, idx) => <WorkoutItem key={idx} item={item} />)}</ol>
        </form>)
}

export default WorkoutEditor