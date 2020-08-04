import React from 'react';
import ReactDOM from 'react-dom';

class WodSearch extends React.Component {

    constructor(props) {
        super(props);
        this.onSearch = props.onSearch;

        this.onInput = this.onInput.bind(this);
    }

    onInput(e) {
        const text = e.target.value;
        this.onSearch(text)
    }

    render() {
        return <label>Start typing:
            <input type="text" onInput={this.onInput} placeholder="Rounds for time" />
        </label>;
    }
}

export { WodSearch }