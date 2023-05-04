import React from 'react';
import r1 from '../../../assets/r-1.jpg'
import r2 from '../../../assets/r-2.jpg'
import r3 from '../../../assets/r-3.jpg'
import r4 from '../../../assets/r-4.jpg'


const TopRecipe = () => {
    return (
        <div className='text-center'>
            <h2 className='custom-title py-6'>Recipe of the Month</h2>
            <p className='py-4  text-xl'>Each dish telling a story of history, culture, and tradition.</p>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 justify-items-center'>
                <div className="card w-11/12 bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Baklava</h2>
                    </div>
                    <figure><img src={r1} alt="Shoes" /></figure>
                </div>
                <div className="card w-11/12 bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Şiş Kebabı</h2>
                    </div>
                    <figure><img src={r2} alt="Shoes" /></figure>
                </div>
                <div className="card w-11/12 bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Hummus</h2>
                    </div>
                    <figure><img src={r3} alt="Shoes" /></figure>
                </div>
                <div className="card w-11/12 bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-center">Adana Kebabı</h2>
                    </div>
                    <figure><img src={r4} alt="Shoes" /></figure>
                </div>
            </div>
        </div>
    );
};

export default TopRecipe;