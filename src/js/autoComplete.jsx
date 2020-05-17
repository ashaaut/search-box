import React, { Component } from 'react'
import data from '../data/data'
import DisplaySuggestions from './displaySuggestions'
import AddResult from './addResults'
export default class AutoComplete extends Component {
    constructor(props) {
        super(props)
        this.state = {
            suggestions: [],
            enteredText: ''
        }
        this.onSelectedText = this.onSelectedText.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.clearSuggestion = this.clearSuggestion.bind(this)
    }
    clearSuggestion(suggestion) {
        let suggestions = this.state.suggestions.filter(s => s !== suggestion)
        let index = data.indexOf(suggestion)
        data.splice(index, 1)
        this.setState({
            suggestions
        })

    }
    handleClick(newResult) {
        data.push(newResult);
    }

    onEnteredTextChange(e) {
        const text = e.target.value;
        let suggestions = [];
        if (text.length > 0) {
            suggestions = data.sort().filter(s => s.toLowerCase().includes(text) == true)
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
                <input className={classNameForInput} type="text" name="focus" value={this.state.enteredText} onChange={(e) => this.onEnteredTextChange(e)} placeholder="Enter the name" />
                {/* <button className="close-icon" onClick={()=>clearSuggestion(s)}></button> */}
                <DisplaySuggestions
                    suggestions={this.state.suggestions}
                    onSelectedText={this.onSelectedText}
                    clearSuggestion={this.clearSuggestion} />

                <AddResult handleClick={this.handleClick} />
            </div>
        );
    }

}