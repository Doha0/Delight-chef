import React from 'react';

const ChefCard = ({ chefs }) => {
    const {
        chefPicture,
        chefName,
        yearsOfExperience,
        numberOfRecipes,
        likes,
        viewRecipesButton } = chefs;
    return (
        <div className="card lg:card-side bg-base-100 p-8 shadow-xl">
            <figure className='w-10/12 object-cover '>
                <img className='img-fluid' src={chefPicture} alt="Album" />
            </figure>
            <div className="card-body pl-8">

                <h2 className="font-semibold pt-6 text-xl">{chefName}</h2>
                <p className='paragraph-font '>Experience: {yearsOfExperience}</p>
                <p className='paragraph-font '>Recipes: {numberOfRecipes}</p>
                <p className='paragraph-font pb-6'>Likes: {likes}</p>
                <button className="custom-button">{viewRecipesButton}</button>

            </div>
        </div>
    );
};

export default ChefCard;