import React, { useState } from 'react';
function AddResults(props) {
    const [newresult,setNewResult]=useState("")
    const {handleClick}=props
    const addResult=(e)=>{
        setNewResult(e.target.value)
    }
    return (
        <div className="addResult-container">
            <input className="newresultinput-div" type="text" onChange={(e) => addResult(e)} placeholder="Add new result" />
            <button onClick={() => handleClick(newresult)}>Add</button>
        </div>
    )
}
    

export default AddResults;