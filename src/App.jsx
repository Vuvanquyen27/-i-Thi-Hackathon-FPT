import React, {useState} from 'react'
import Navbar from '../src/components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';


const App = () => {

    const [theme, setTheme] = useState('light');

    return (
        <Router>
            <div className={`container ${theme}`}>
                <Navbar theme={theme} setTheme={setTheme}/>
            </div>
        </Router>
    )
}


export default App
