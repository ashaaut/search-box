import React, {useRef } from 'react'

function FromExample() {
    const inputText = useRef(null)
    handleSubmit = () => {
        inputText.current.focus()
    }
    return (
        <div>
            <input ref={inputText} type="text" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default FromExample