import React from 'react'
function DisplaySuggestions(props) {
    const { suggestions, onSelectedText } = props;
    let classNameForSuggestion = suggestions.length > 0 ? "result-container" : 'result-container-if-no-results'
    return (
        <ul className={classNameForSuggestion} >
            {suggestions.map((s, i) => <li className="search-result" key={i} onClick={() => onSelectedText(s)}>{s}</li>)}
        </ul>
    )
}
export default DisplaySuggestions;