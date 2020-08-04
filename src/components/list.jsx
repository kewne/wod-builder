import React from 'react';

function ListItem(props) {
    return <li>
        <button type="button" onClick={() => props.onSelect(props.item)}>{props.item.name}</button>
    </li>
}

function List(props) {
    console.debug(`Listing ${props.items.length} items`)
    if (props.items.length > 0) {
        return <ul>
            {props.items.map(item => <ListItem key={item.name} onSelect={props.onSelect} item={item} />)}
        </ul>
    } else {
        return null;
    }
}

export { List }