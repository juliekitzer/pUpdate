import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router } from 'react-router-dom';
import Routerregion from "./Components/Routerregion";
import Register from "./Pages/Register";
import { useState } from "react";
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


            </Router>
            <Footer />
        </div>
    )
}

export default App;