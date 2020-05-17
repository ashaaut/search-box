
import React, { useState } from "react";
import { hot } from 'react-hot-loader/root';
import './assets/styles/App.css'
import AutoComplete from './js/autoComplete'

function App() {
    return (
        <div className="app-container">
            <h1>Search-Box</h1>
            <AutoComplete/>
        </div>
    )
}

export default hot(App);
