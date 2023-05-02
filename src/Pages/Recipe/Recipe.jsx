import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';

const Recipe = () => {
    const recipe = useLoaderData();
    console.log(recipe);
    const {
        chefPicture,
        chefName,
        bio,
        yearsOfExperience,
        numberOfRecipes,
        likes } = recipe;
    const recipeData = recipe.recipes;
    return (
        <div>
            <div className="hero min-h-screen bg-orange-50">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chefPicture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='text-center'>
                        <h1 className="text-5xl font-bold  mb-6">{chefName}</h1>
                        <p className="paragraph-font py-6 px-10">{bio}</p>
                        <p className='paragraph-font '>Experience: {yearsOfExperience}</p>
                        <p className='paragraph-font '>Recipes: {numberOfRecipes}</p>
                        <p className='paragraph-font '>Likes: {likes}</p>
                    </div>
                </div>
            </div>
            <div>
                {
                    recipeData.map((recipeData, idx) => <RecipeCard
                        key={idx}
                        recipeData={recipeData}
                    ></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default Recipe;