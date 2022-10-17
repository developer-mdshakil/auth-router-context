import React, { useContext } from 'react';
import { AuthContext } from '../../ContextAPI/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h2>This is home pages</h2>
            <h5>user Name: {user.displayName}</h5>
        </div>
    );
};

export default Home;