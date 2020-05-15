import React, { Component } from 'react'
import data from '../data/data'
import DisplaySuggestions from './displaySuggestions'
export default class AutoComplete extends Component {
    constructor(props) {
        super(props)
        this.state = {
            suggestions: [],
            enteredText: ''
        }
        this.onSelectedText = this.onSelectedText.bind(this)
    }
    onEnteredTextChange(e) {
        const text = e.target.value;
        let suggestions = [];
        if (text.length > 0) {
            suggestions = data.filter(s => s.includes(text) == true)
        }
        this.setState(() => ({
            suggestions,
            enteredText: text
        }))
    }
    onSelectedText(text) {
        this.setState(() => ({
            suggestions: [],
            enteredText: text,

        }))
    }
    render() {
        let classNameForInput = this.state.suggestions.length > 0 ? 'input-div-if-suggestion input-div' : "input-div"
        return (
            <div className="search-box-container">
                <input className={classNameForInput} type="text" value={this.state.enteredText} onChange={(e) => this.onEnteredTextChange(e)} placeholder="Enter the name" />
                <DisplaySuggestions suggestions={this.state.suggestions} onSelectedText={this.onSelectedText} />
            </div>
        );
    }

}