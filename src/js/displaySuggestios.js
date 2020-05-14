import React from 'react'
function DisplaySuggestions(props) {
    const {suggestions,onSelectedText} = props;
    return (
        <div >
            <ul>{suggestions.map((s,i) => <li key={i} onClick={()=>onSelectedText(s)}>{s}</li>)}</ul>
        </div>
    )
}
export default DisplaySuggestions;