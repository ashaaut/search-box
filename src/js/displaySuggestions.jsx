import React from 'react'
import PropTypes from 'prop-types';
function DisplaySuggestions(props) {
    const { suggestions, onSelectedText } = props;
    let classNameForSuggestion = suggestions.length > 0 ? "result-container" : 'result-container-if-no-results'
    return (
        <ul className={classNameForSuggestion} name="focus" >
            {suggestions.map((s, i) => <li className="search-result" key={i} onClick={() => onSelectedText(s)}>{s}</li>)}
        </ul>
    )
}
DisplaySuggestions.propTypes={
    suggestions:PropTypes.array.isRequired
}
export default DisplaySuggestions;