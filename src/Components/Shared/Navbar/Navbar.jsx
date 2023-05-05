import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    //console.log(user);
    const handelLogOut = () => {
        logOut()
            .then((result) => { })
            .catch(error => { console.log(error) })
    }

    return (
        <nav className="navbar bg-slate-900 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" px-4 menu-compact dropdown-content mt-3 p-2 shadow bg-slate-900 rounded-box w-52">
                        <li><NavLink className={({ isActive }) =>
                            isActive ? "text-orange-500" : "text-white"
                        } to='/'>Home</NavLink></li>
                        <li ><NavLink className={({ isActive }) =>
                            isActive ? "text-orange-500" : "text-white"
                        } to='/blog'>Blog</NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                            isActive ? "text-orange-500" : "text-white"
                        } to='/sign-up'>Register</NavLink></li>

                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost font-bold normal-case text-2xl">Delight Chef</Link>
            </div>
            <div className="navbar-center hidden font-medium lg:flex">
                <ul className=" menu-horizontal px-1">
                    <li><NavLink className={({ isActive }) =>
                        isActive ? "text-orange-500" : "text-white"
                    } to='/'>Home</NavLink></li>
                    <li className='mx-4'><NavLink className={({ isActive }) =>
                        isActive ? "text-orange-500" : "text-white"
                    } to='/blog'>Blog</NavLink></li>
                    <li><NavLink className={({ isActive }) =>
                        isActive ? "text-orange-500" : "text-white"
                    } to='/sign-up'>Register</NavLink></li>

                </ul>
            </div>
            <div className="navbar-end">
                {user ? <div className='flex gap-2'>
                    <img className="w-12 rounded-full" title={user?.displayName} src={user?.photoURL} />
                    <button
                        onClick={handelLogOut} className="logout-button">Log Out</button></div>
                    : <div><Link to='/login' className="custom-button" >Login Now</Link></div>
                }
            </div>
        </nav >
    );
};

export default Navbar;