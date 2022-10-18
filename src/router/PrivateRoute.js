import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../ContextAPI/UserContext';

const PrivateRoute = ({ Children }) => {
    const {user, loading} = useContext(AuthContext);
    
    //chaeck here loadin and show loading spinner
    if(loading){
        return <div>loading...</div>
    }

    if(user && user.uid){
        return Children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;