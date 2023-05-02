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
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img className='w-1/2 object-contain' src={chefPicture} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name: {chefName}</h2>
                <p>Experience: {yearsOfExperience}</p>
                <p>Recipes: {numberOfRecipes}</p>
                <p>Likes: {likes}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">{viewRecipesButton}</button>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;