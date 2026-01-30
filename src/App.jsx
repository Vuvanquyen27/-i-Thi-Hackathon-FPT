import React from 'react'
import Navbar from '../src/components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
            </div>
        </Router>
    )
}


export default App
