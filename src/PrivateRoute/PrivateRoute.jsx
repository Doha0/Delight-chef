import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import Spinner from '../Components/Shared/Spinner/Spinner';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Spinner></Spinner>;
    }

    if (user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;