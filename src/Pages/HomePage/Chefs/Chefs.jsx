import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';

const Chefs = () => {

    const [chef, setChef] = useState([]);

    useEffect(() => {
        fetch('https://delight-chef-server-doha0.vercel.app/chefdata')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className='mx-4'>
            <h2 className='custom-title pb-2'>Meet Our Chefs</h2>
            <p className='pt-4  text-xl text-center'>Our Chefs infuse every meal with a sense of joy and celebration, creating a dining experience that is both delicious and unforgettable.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 my-10'>
                {
                    chef.map(chefs => <ChefCard
                        key={chefs._id}
                        chefs={chefs}
                    ></ChefCard>)
                }
            </div>
        </div>
    );
};

export default Chefs;