import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Login = () => {

    const [error, setError] = useState('');

    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const pathFrom = location.state?.from?.pathname || '/';


    const handelLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        //console.log(email, password);

        setError('');
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(pathFrom, { replace: true });
            })
            .catch(error => {
                const errorMessage = error.message;
                // console.log(errorMessage);
                setError(errorMessage);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                navigate(pathFrom, { replace: true });
            })
            .catch(error => {
                const errorMessage = error.message;
                // console.log(errorMessage);
                setError(errorMessage);
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then((result) => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                navigate(pathFrom, { replace: true });
            })
            .catch(error => {
                const errorMessage = error.message;
                // console.log(errorMessage);
                setError(errorMessage);
            })
    }


    return (
        <div className='grid grid-cols-1 justify-items-center mt-20' >
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl my-4 font-bold">Login to Delight Chef!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body ">
                            <form onSubmit={handelLogin} >
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
                                    <input type="password" name='password' className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="custom-button">Login</button>
                                </div>
                                <label className="label">
                                    <Link to='/sign-up' className="label-text-alt link link-hover">New to Delight Chef? Create An Account</Link>
                                </label>
                            </form>
                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="divider">OR</div>
                            </div>
                            <button onClick={handleGoogleSignIn} className="btn bg-white hover:bg-slate-200 text-black "><FcGoogle size={28}></FcGoogle> <span className='pl-2'>Sign-in with Google</span></button>
                            <button onClick={handleGithubSignIn} className="btn bg-black hover:bg-slate-800 text-white"><FaGithub size={28}></FaGithub> <span className='pl-2'>Sign-in with GitHub</span></button>
                            <p className="label">
                                <p className="text-red-700">{error} </p>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;