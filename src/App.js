
import React, { useState } from "react";
import { hot } from 'react-hot-loader/root';
import './assets/styles/App.css'

function App() {
    const [name, setname] = useState("Asha");
    const updatename=(e)=>setname(e.target.value)
    return (
        <div className="container">
            <input
                type='text'
                placeholder='Enter your name '
                name='name'
                onChange={updatename}>
            </input>
            <h1>Hello {name}</h1>
        </div>
    )
}

export default hot(App);
