import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({ chefs }) => {
    const {
        _id,
        chefPicture,
        chefName,
        yearsOfExperience,
        numberOfRecipes,
        likes,
        viewRecipesButton } = chefs;
    return (
        <div className="card lg:card-side bg-orange-50 p-8 shadow-xl">
            <figure className='w-10/12 object-cover '>
                <img className='img-fluid' src={chefPicture} alt="Album" />
            </figure>
            <div className="card-body pl-8">

                <h2 className="font-semibold pt-6 text-xl">{chefName}</h2>
                <p className='paragraph-font '>Experience: {yearsOfExperience}</p>
                <p className='paragraph-font '>Recipes: {numberOfRecipes}</p>
                <p className='paragraph-font pb-6'>Likes: {likes}</p>
                <Link to={`/${_id}`} className="custom-button">{viewRecipesButton}</Link>

            </div>
        </div>
    );
};

export default ChefCard;