import React from 'react'
function DisplaySuggestions(props) {
    let suggestions = props.suggestions;
    return (
        <div >
            <ul>{suggestions.map(s => <li>{s}</li>)}</ul>
        </div>
    )
}
export default DisplaySuggestions;