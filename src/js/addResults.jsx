import React, { useState } from 'react';
function AddResults(props) {
    const [newResult,setNewResult]=useState("")
    const {handleClick}=props;
    
    const onValueChange=(e)=>{
        setNewResult(e.target.value)
    }
    const addResult=()=>{
        handleClick(newResult)
        setNewResult("")
    }
    return (
        <div className="add-result-container">
            <input className="new-result-input-div" type="text"  value={newResult} onChange={(e) => onValueChange(e)} placeholder="Type To Add Data" />
            <button  className="add-button" onClick={() => addResult()}>Add</button>
        </div>
    )
}
    

export default AddResults;