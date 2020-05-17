import React from 'react'
import PropTypes from 'prop-types';
function DisplaySuggestions(props) {
    const { suggestions, onSelectedText ,clearSuggestion} = props;
    let classNameForSuggestion = suggestions.length > 0 ? "result-container" : 'result-container-if-no-results'
    return (
        <ul className={classNameForSuggestion} name="focus" >
            {suggestions.map((suggestion, index) => <li className="search-result" key={index}>
                 <div className="searched-suggestion" onClick={()=>onSelectedText(suggestion)}>{suggestion} </div>  
                <button className="remove-icon" onClick={()=>clearSuggestion(suggestion)}></button>
            </li>)}
        </ul>
    )
}
DisplaySuggestions.propTypes = {
    suggestions: PropTypes.array.isRequired
}
export default DisplaySuggestions;