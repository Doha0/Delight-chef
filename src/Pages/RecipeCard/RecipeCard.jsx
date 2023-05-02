import React from 'react';

const RecipeCard = ({ recipeData }) => {
    console.log(recipeData);
    const { name, image, ingredients, method, rating, isFavorite } = recipeData;
    return (
        <div className=' w-full px-8'>
            <div className=" avatar">
                <div className="w-full rounded ">
                    <img src={image} />
                </div>
            </div>
            <div className='flex flex-col p-8'>
                <p className='font-semibold text-2xl text-center'>{name} </p>
                <p className='paragraph-font '>Ingredients: {ingredients} </p>
                <p className='paragraph-font '>Rating: {rating} </p>
                <p className='paragraph-font mb-8'>Method: {method} </p>
                <button className='custom-button'>Favorite</button>
            </div>
        </div>
    );
};

export default RecipeCard;