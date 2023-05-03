import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';
import Spinner from '../../Components/Shared/Spinner/Spinner';

const Recipe = () => {

    const navigation = useNavigation();
    console.log(navigation.state)
    if (navigation.state === "loading") {
        return <Spinner></Spinner>;
    }

    const recipe = useLoaderData();
    // console.log(recipe);
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
            <div className="hero min-h-screen bg-orange-50 mb-6">
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
            <h2 className='custom-title py-10'>Special Recipe of {chefName}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-10 gap-4'>
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