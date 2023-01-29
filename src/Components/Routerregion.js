import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Dashboard from '../Pages/Dashboard';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Lost from '../Pages/Lost';
import Error from '../Pages/Error';
function Routerregion({ isAuthenticated, setIsAuthenticated, user, setUser }) {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Dashboard' element={<Dashboard isAuthenticated ={isAuthenticated} setIsAuthenticated = {setIsAuthenticated} 
            user = {user}
            setUser ={setUser}/>} />
            <Route path='/Lost' element={<Lost />} />
            <Route path='/Error' element={<Error />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Login' element={<Login isAuthenticated = {isAuthenticated} setIsAuthenticated = {setIsAuthenticated} 
            user = {user}
            setUser ={setUser}
            />} />
        </Routes>
    )
}

export default Routerregion;
