import React, { useContext } from 'react';
import errorImage from '../../assets/error-image.jpg'
import { AuthContext } from '../../Providers/AuthProvider';

const ErrorPage = () => {
    const { loading, setLoading } = useContext(AuthContext);

    {
        return (
            < div className='flex justify-center items-center'>
                <img className='w-1/2' src={errorImage} alt="" />
                {
                    setLoading(false)
                }
            </div >
        );
    }
};

export default ErrorPage;