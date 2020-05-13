
import React, { useState } from "react";
import { hot } from 'react-hot-loader/root';
import './assets/styles/App.css'

function App() {
    const [name, setName] = useState("Asha");
    const updateName = (e) => setName(e.target.value)
    return (
        <div className="App">
            <div className="container">
                <h1>Hello {name}</h1>
                <input
                    type='text'
                    placeholder='Enter your name '
                    onChange={updateName}>
                </input>

            </div>

        </div>
    )
}

export default hot(App);
