import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';

const Chefs = () => {

    const [chef, setChef] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefdata')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <h2>All Chefs</h2>
            <div className='grid grid-cols-2 gap-5'>
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