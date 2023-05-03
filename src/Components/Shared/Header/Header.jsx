import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import { AuthContext } from '../../../Providers/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Navbar></Navbar>
            {
                user && <span>Welcome {user.displayName}</span>
            }
        </div>
    );
};

export default Header;