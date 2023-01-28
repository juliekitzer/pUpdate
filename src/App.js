import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router } from 'react-router-dom';
import Routerregion from "./Components/Routerregion";
import Register from "./Pages/Register";
function App() {
    return (
        <div>
            <Router>
                <Header />
                <Routerregion />
                <Register />
            </Router>
            <Footer />
        </div>
    )
}

export default App;