import React from 'react';
import Lottie from "lottie-react";
import loading from "../../../assets/spinner/spinner-loading.json";

const Spinner = () => {
    return (
        <div className='flex justify-center items-center'>
            <Lottie
                className='w-2/4'
                animationData={loading}
                loop={true}
            ></Lottie>
        </div >
    );
};

export default Spinner;