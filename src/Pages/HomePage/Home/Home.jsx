import React from 'react';
import Chefs from '../Chefs/Chefs';
import background from "../../../assets/food-7.jpg";
import { Link } from 'react-router-dom';
import TopRecipe from '../TopRecipe/TopRecipe';
import HappyClients from '../HappyClients/HappyClients';


const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen mb-10 " style={{ backgroundImage: `url(${background})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-left text-neutral-content ">
                    <div className='sm:mx-auto lg:mr-96 px-4 lg:pr-56 '>
                        <h1 className="text-5xl md:text-6xl font-bold">Best Food for <br /> Delight Taste</h1>
                        <p className="py-6 font-medium text-lg">Discover the rich and delicious world of Turkish cuisine with our talented  Turkish chefs and their mouth-watering recipes! From succulent kebabs and   hearty stews to fragrant rice dishes and refreshing meze plates, our chefs will take you on a culinary journey through the flavors and aromas of Turkey.</p>
                        <Link to='/login' className="custom-button">Login Now</Link>
                    </div>
                </div>
            </div>

            <Chefs></Chefs>

            <TopRecipe></TopRecipe>
            <HappyClients></HappyClients>
        </div>
    );
};

export default Home;