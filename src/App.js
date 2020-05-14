
import React, { useState } from "react";
import { hot } from 'react-hot-loader/root';
import './assets/styles/App.css'
import AutoComplete from './js/AutoComplete'

function App() {
    return (
        <div className="App">
            <AutoComplete/>
        </div>
    )
}

export default hot(App);
