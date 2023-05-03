import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const RecipeCard = ({ recipeData }) => {
    const [favorite, setFavorite] = useState(true);

    const { name, image, ingredients, method, rating, isFavorite } = recipeData;

    const handleFavorite = () => {
        setFavorite(false);
        toast.success("This Recipe is your Favorite", {
            style: {
                border: '1px solid #f97316',
                padding: '16px',
                color: '#f97316',
            },
            iconTheme: {
                primary: '#f97316',
                secondary: '#FFFAEE',
            },
        });
    };
    return (
        <div className='card bg-base-100 shadow-xl w-full px-6'>
            <div className=" avatar">
                <div className="w-full rounded ">
                    <img src={image} />
                </div>
            </div>
            <div className='card-body'>
                <p className='font-semibold text-2xl text-center'>{name} </p>
                <p className='pt-2'> <a className='font-medium '>Ingredients:</a>  {ingredients} </p>
                <p className='pt-2'> <a className='font-medium '>Rating:</a>  {rating} </p>
                <p className='pt-2 mb-4'> <a className='font-medium '>Method:</a>  {method.substring(0, 400)}... </p>
                <div className='card-actions justify-center items-center'>
                    <button onClick={handleFavorite} className={`btn btn-error bg-orange-500 btn-wide text-white ${!favorite ? "btn-disabled bg-slate-200" : ""
                        }`}  >Favorite</button><Toaster />
                </div>
            </div>
        </div >
    );
};

export default RecipeCard;