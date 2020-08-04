import React from 'react';

const WodDisplay = props => {
    return <ul>
        {props.exercises.map(ex => <li>{ex.name}</li>)}
    </ul>
}

export { WodDisplay }