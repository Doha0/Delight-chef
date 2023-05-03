import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const handelLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        //console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }

    return (
        <div className='grid grid-cols-1 justify-items-center mt-20' >
            <div className="hero w-8/12 p-20 bg-orange-50">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl my-4 font-bold">Login to Delight Chef!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="custom-button">Login</button>
                            </div>
                            <label className="label">
                                <Link to='/sign-up' className="label-text-alt link link-hover">New to Delight Chef? Create An Account</Link>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;