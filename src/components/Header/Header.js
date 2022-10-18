import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/UserContext';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    //create a event handler with logOut button for logout here
    const logOutHandler = () => {
        logOut()
        .then( result => {
            const user = result.user;
            console.log(user);
        }).catch(error => console.error('error: ', error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
            <Link className='text-xl mx-4' to='/awsome'>Awsome Auth</Link>
            <Link className='text-xl mx-4' to='/home'>Home</Link>
            <Link className='text-xl mx-4' to='/products'>Products</Link>
            <Link className='text-xl mx-4' to='/about'>About</Link>
            <Link className='text-xl mx-4' to='/login'>Login</Link>
            <Link className='text-xl mx-4' to='/register'>Register</Link>
            { user?.email &&
            <p className='mr-4'>Welcome {user.email}</p>
            }
            {user?.email ?
            <button onClick={logOutHandler} className="btn btn-active">Log Out</button>
            :
            <button className="btn btn-active"><Link to='/login'>LOg IN</Link></button>
            }
        </div>
        </div>
    );
};

export default Header;