'use strict';
import ReactDOM from 'react-dom';
import React from 'react';
import { WodSearch } from './components/search.jsx';
import { List } from './components/list.jsx';
import { WodDisplay } from './components/wod-display.jsx';
import { search } from './service.js';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { searchResults: [], wod: [] }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSearch(text) {
        const newResults = search(text);
        this.setState({
            searchResults: newResults
        });
    }

    handleSelect(item) {
        this.setState(state => {
            state.wod.push(item);
            return { exercises: state.exercises };
        });
    }

    render() {
        return <div>
            <WodSearch onSearch={this.handleSearch} />
            <WodDisplay exercises={this.state.wod} />
            <List items={this.state.searchResults} onSelect={this.handleSelect} />
        </div>
    }

}

const element = document.querySelector('#app');
ReactDOM.render(<App />, element);
