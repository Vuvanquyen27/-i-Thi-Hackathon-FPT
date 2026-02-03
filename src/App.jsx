import React, {useState} from 'react'
import Navbar from '../src/components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';
import DashboardPage from "./pages/DashboardPage.jsx";
import 'antd/dist/reset.css';

const App = () => {

    const [theme, setTheme] = useState('light');

    return (
        <Router>
            <div className={`container ${theme}`}>
                <Navbar theme={theme} setTheme={setTheme}/>
                <div className="content">
                    <DashboardPage></DashboardPage>
                </div>
            </div>
        </Router>




    )
}


export default App
