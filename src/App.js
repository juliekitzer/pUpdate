import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router } from 'react-router-dom';
import Routerregion from "./Components/Routerregion";
import Register from "./Pages/Register";
import { useState, useEffect } from "react";
import "./index.css";
import './stylesheets/style.css';
import 'bulma/css/bulma.min.css'; 
// import Tabs from './Components/Tabs';


function App() {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState({})

    function setIsAuthenticatedState(newState) {
        setIsAuthenticated(newState)
    }
    function setUserState(newState) {
        setUser(newState)
    }
    return (
        <div>
            
            <Router>
                <Header isAuthenticated={isAuthenticated} />
                {/* //Ternery statement is used instead of if else
                //Assigning a state to a new value, what you assign it to is what youre going to reference it in other files. */}
                <Routerregion
                    isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticatedState}
                    user={user}
                    setUser={setUserState}
                />
                {/* <Tabs /> */}
            </Router>
            <Footer />
        </div>
    )
}

export default App;