import React from 'react';
import c1 from '../../../assets/c1.jpg'
import c2 from '../../../assets/c2.jpg'


const HappyClients = () => {
    return (
        <div className='text-center'>
            <h2 className='custom-title py-6'>Our Happy Clients</h2>
            <p className='py-6  text-xl'> We are proud to have a loyal base of happy clients who continue to choose us for our delicious food, exceptional service, and inviting atmosphere.</p>

            <div className='mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center'>
                <div className="card w-10/12 bg-orange-50 shadow-xl">
                    <div className="avatar flex justify-center px-10 pt-10">
                        <div className="w-24 rounded-full">
                            <img src={c1} />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title pb-4">Turgut Özal</h2>
                        <p>"I was blown away by the flavors and variety of dishes. The lamb kebabs were perfectly seasoned and juicy, the vegetable stuffed dolma was bursting with flavor, and the baklava for dessert was simply divine. The attentive and friendly service only added to the overall experience, and I left feeling truly satisfied and eager to return for more. I highly recommend Delight Chef to anyone looking for a culinary adventure!"</p>
                    </div>
                </div>
                <div className="card w-10/12 bg-orange-50 shadow-xl">
                    <div className="avatar flex justify-center px-10 pt-10">
                        <div className="w-24 rounded-full">
                            <img src={c2} />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title pb-4">Kenan Sofuoğlu</h2>
                        <p>"I've had the opportunity to taste the exquisite creations of Turkish chefs and I must say, they are truly masters of their craft. Their attention to detail, passion for their work, and innovative use of spices and flavors make for an unparalleled dining experience. It's clear that they take great pride in their culinary traditions, and I feel lucky to have experienced it firsthand."</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default HappyClients;