import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/UserContext';

const RegisterPage = () => {
    const {createUser} = useContext(AuthContext);
    //declare event handler arrow function with login button here
    const registrationFormHandler = event => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.first.value;
        const lastName = form.last.value;
        const name = firstName + lastName;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            form.reset();
        }).catch( error => console.error('error: ', error))

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Please Register now!</h1>
                <p className="py-6">If you want to use awsome feature.Create a account here!</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={registrationFormHandler} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">First Name</span>
                    </label>
                    <input type="text" name='first' placeholder="name" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Last Name</span>
                    </label>
                    <input type="text" name='last' placeholder="name" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    <p className='text-lg mt-4'><small>Already have and account?please <Link className='label-text-base text-blue-600 link link-hover' to='/login'>login</Link></small></p>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default RegisterPage;