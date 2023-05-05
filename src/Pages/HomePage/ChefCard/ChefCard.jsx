import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillLike } from 'react-icons/ai';
import { GiCampCookingPot } from 'react-icons/gi'
import { GiChefToque } from 'react-icons/gi'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
                {/* <img className='img-fluid' src={chefPicture} alt="Album" /> */}
                <LazyLoadImage
                    effect="blur"
                    delayTime={100}
                    src={chefPicture}
                    alt="chef picture"
                />
            </figure>
            <div className="card-body pl-8">

                <h2 className="font-semibold pt-6 text-xl">{chefName}</h2>
                <p className='paragraph-font custom-icon'><GiChefToque size={22} className='text-orange-500' />Experience: <span className='pl-2'>{yearsOfExperience}</span></p>
                <p className='paragraph-font custom-icon'><GiCampCookingPot size={22} className='text-orange-500' /> Recipe: <span className='pl-2'>{numberOfRecipes}</span></p>
                <p className='paragraph-font pb-6 custom-icon'><AiFillLike className='text-orange-500' size={22} /> Likes: <span className='pl-2'>{likes}</span></p>
                <Link to={`/chefdata/${_id}`} className="custom-button">{viewRecipesButton}</Link>

            </div>
        </div>
    );
};

export default ChefCard;