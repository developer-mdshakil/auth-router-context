import React, { useContext } from 'react';
import { AuthContext } from '../../ContextAPI/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h2>This is home pages</h2>
            <h2>user E-mail: {user?.email}</h2>
        </div>
    );
};

export default Home;