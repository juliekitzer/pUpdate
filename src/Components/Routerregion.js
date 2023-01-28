import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Dashboard from '../Pages/Dashboard';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Lost from '../Pages/Lost';
import Error from '../Pages/Error';
function Routerregion() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Lost' element={<Lost />} />
            <Route path='/Error' element={<Error />} />
        </Routes>
    )
}

export default Routerregion;
