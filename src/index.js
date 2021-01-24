'use strict';
import ReactDOM from 'react-dom';
import React from 'react';

const ListItem = ({ item }) => <li>{item}</li>

const List = ({ items }) => items.map(item => <ListItem item={item} />)

const exercises = [ "Back Squat", "Run", "Push-up" ]

const App = () => <List items={exercises} />

const element = document.querySelector('#app');
ReactDOM.render(<App />, element);
