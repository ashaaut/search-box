
import React, { useState } from "react";
import { hot } from 'react-hot-loader/root';

function App() {
    const [name, setname] = useState("Asha");
    const updatename=(e)=>setname(e.target.value)
    return (
        <div>
            <input
                type='text'
                placeholder='enter the your name '
                name='name'
                onChange={updatename}>
            </input>
            <h1>Hello {name}</h1>
        </div>
    )
}

export default hot(App);
