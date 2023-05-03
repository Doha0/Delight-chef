import React from 'react';
import Chefs from '../Chefs/Chefs';
import background from "../../../../public/food-7.jpg";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen my-10" style={{ backgroundImage: `url(${background})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-left text-neutral-content ">
                    <div className='mx-auto lg:mr-96 '>
                        <h1 className="text-6xl font-bold">Best Food for <br /> Delight Taste</h1>
                        <p className="py-6 font-medium text-lg">Discover the rich and delicious world of Turkish cuisine with our talented Turkish chefs and their mouth-watering recipes! From succulent kebabs and hearty stews to fragrant rice dishes and refreshing meze plates, our chefs will take you on a culinary journey through the flavors and aromas of Turkey.</p>
                        <Link to='/' className="custom-button">Login Now</Link>
                    </div>
                </div>
            </div>
            <Chefs></Chefs>
        </div>
    );
};

export default Home;