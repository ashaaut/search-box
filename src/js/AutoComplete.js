import React, { Component } from 'react'
import data from './../data/data'
import DisplaySuggestions from './displaySuggestios'
export default class AutoComplete extends Component {

    constructor(props) {
        super(props)
        this.state = {
            suggestions: [],
            enteredText: ''
        }
    }

    onEnteredTextChange(e) {
        const text = e.target.value;
        let suggestions = [];
        if (text.length > 0) {
            suggestions = data.filter(s => s.startsWith(text))
        }
        this.setState(() => ({
            suggestions,
            enteredText: text
        }))
    }


    render() {
        return (
            <div className="container">
                <input type="text" onChange={(e) => this.onEnteredTextChange(e)} placeholder="Enter the name" />
                <DisplaySuggestions suggestions={this.state.suggestions} />
            </div>
        );
    }

}