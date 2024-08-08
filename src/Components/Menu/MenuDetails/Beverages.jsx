import React, { useState } from 'react';
import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io';
import berryIcedTea from '../../../../public/images/beverages-images/Berry-Iced-Tea.jpeg';
import classicLemonade from '../../../../public/images/beverages-images/Classic-Lemonade.jpg';
import espresso from '../../../../public/images/beverages-images/Espresso.jpg';
import herbalTea from '../../../../public/images/beverages-images/Herbal-Tea.jpg';
import hotChocolate from '../../../../public/images/beverages-images/Hot-Chocolate.jpg';
import icedCoffee from '../../../../public/images/beverages-images/Iced-Coffee.jpeg';
import mangoSmoothie from '../../../../public/images/beverages-images/Mango-Smoothie.jpg';
import pinaColada from '../../../../public/images/beverages-images/Pina-Colada-Mocktail.jpg';
import sparklingWater from '../../../../public/images/beverages-images/Sparkling-Water.jpg';

const Beverages = () => {
    // Separate states for each card
    const [click1, setClick1] = useState(false);
    const [click2, setClick2] = useState(false);
    const [click3, setClick3] = useState(false);
    const [click4, setClick4] = useState(false);
    const [click5, setClick5] = useState(false);
    const [click6, setClick6] = useState(false);
    const [click7, setClick7] = useState(false);
    const [click8, setClick8] = useState(false);
    const [click9, setClick9] = useState(false);

    const handleIconClick1 = () => {
        setClick1(!click1);
    };

    const handleIconClick2 = () => {
        setClick2(!click2);
    };

    const handleIconClick3 = () => {
        setClick3(!click3);
    };

    const handleIconClick4 = () => {
        setClick4(!click4);
    };

    const handleIconClick5 = () => {
        setClick5(!click5);
    };

    const handleIconClick6 = () => {
        setClick6(!click6);
    };

    const handleIconClick7 = () => {
        setClick7(!click7);
    };

    const handleIconClick8 = () => {
        setClick8(!click8);
    };

    const handleIconClick9 = () => {
        setClick9(!click9);
    };

    return (
        <div className='flex justify-center'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 my-8 md:my-12">
            {/* First Card */}
            <div className="card card-compact bg-base-100 w-80 shadow-2xl hover:scale-105 duration-500 hover:shadow-indigo-400 hover:bg-slate-900 hover:text-white">
                <figure>
                    <img className="w-full h-[280px]" src={herbalTea} alt="Starter 1" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Herbal Tea</h2>
                    <p>A soothing selection of herbal teas, served hot with a slice of lemon.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $3.49</p>
                        {click1 ? (
                            <IoMdHeart
                                className="text-4xl text-red-600 cursor-pointer"
                                onClick={handleIconClick1}
                            />
                        ) : (
                            <IoIosHeartEmpty
                                className="text-4xl cursor-pointer"
                                onClick={handleIconClick1}
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* Second Card */}
            <div className="card card-compact bg-base-100 w-80 shadow-2xl hover:scale-105 duration-500 hover:shadow-indigo-400 hover:bg-slate-900 hover:text-white">
                <figure>
                    <img className="w-full h-[280px]" src={berryIcedTea} alt="Starter 2" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Berry Iced Tea</h2>
                    <p>Iced black tea infused with mixed berries and a hint of mint.</p>
                    <div className="flex justify-between items-center">
                    <p>Price: $4.99</p>
                        {click2 ? (
                            <IoMdHeart
                                className="text-4xl text-red-600 cursor-pointer"
                                onClick={handleIconClick2}
                            />
                        ) : (
                            <IoIosHeartEmpty
                                className="text-4xl cursor-pointer"
                                onClick={handleIconClick2}
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* Third Card */}
            <div className="card card-compact bg-base-100 w-80 shadow-2xl hover:scale-105 duration-500 hover:shadow-indigo-400 hover:bg-slate-900 hover:text-white">
                <figure>
                    <img className="w-full h-[280px]" src={sparklingWater} alt="Starter 3" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Sparkling Water</h2>
                    <p>Refreshing sparkling water with a slice of lemon or lime.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $2.99</p>
                        {click3 ? (
                            <IoMdHeart
                                className="text-4xl text-red-600 cursor-pointer"
                                onClick={handleIconClick3}
                            />
                        ) : (
                            <IoIosHeartEmpty
                                className="text-4xl cursor-pointer"
                                onClick={handleIconClick3}
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* Fourth Card */}
            <div className="card card-compact bg-base-100 w-80 shadow-2xl hover:scale-105 duration-500 hover:shadow-indigo-400 hover:bg-slate-900 hover:text-white">
                <figure>
                    <img className="w-full h-[280px]" src={espresso} alt="Starter 4" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Espresso</h2>
                    <p>A strong shot of espresso, perfect for a quick pick-me-up.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $2.50</p>
                        {click4 ? (
                            <IoMdHeart
                                className="text-4xl text-red-600 cursor-pointer"
                                onClick={handleIconClick4}
                            />
                        ) : (
                            <IoIosHeartEmpty
                                className="text-4xl cursor-pointer"
                                onClick={handleIconClick4}
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* Fifth Card */}
            <div className="card card-compact bg-base-100 w-80 shadow-2xl hover:scale-105 duration-500 hover:shadow-indigo-400 hover:bg-slate-900 hover:text-white">
                <figure>
                    <img className="w-full h-[280px]" src={pinaColada} alt="Starter 5" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Pina Colada Mocktail</h2>
                    <p>A tropical mix of pineapple juice, coconut milk, and crushed ice, garnished with a cherry.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $6.49</p>
                        {click5 ? (
                            <IoMdHeart
                                className="text-4xl text-red-600 cursor-pointer"
                                onClick={handleIconClick5}
                            />
                        ) : (
                            <IoIosHeartEmpty
                                className="text-4xl cursor-pointer"
                                onClick={handleIconClick5}
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* Sixth Card */}
            <div className="card card-compact bg-base-100 w-80 shadow-2xl hover:scale-105 duration-500 hover:shadow-indigo-400 hover:bg-slate-900 hover:text-white">
                <figure>
                    <img className="w-full h-[280px]" src={hotChocolate} alt="Starter 6" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Hot Chocolate</h2>
                    <p>Rich and creamy hot chocolate topped with whipped cream and chocolate shavings.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $3.99</p>
                        {click6 ? (
                            <IoMdHeart
                                className="text-4xl text-red-600 cursor-pointer"
                                onClick={handleIconClick6}
                            />
                        ) : (
                            <IoIosHeartEmpty
                                className="text-4xl cursor-pointer"
                                onClick={handleIconClick6}
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* Seventh Card */}
            <div className="card card-compact bg-base-100 w-80 shadow-2xl hover:scale-105 duration-500 hover:shadow-indigo-400 hover:bg-slate-900 hover:text-white">
                <figure>
                    <img className="w-full h-[280px]" src={classicLemonade} alt="Starter 7" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Classic Lemonade</h2>
                    <p>Freshly squeezed lemons, sugar, and water, served over ice.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $3.12</p>
                        {click7 ? (
                            <IoMdHeart
                                className="text-4xl text-red-600 cursor-pointer"
                                onClick={handleIconClick7}
                            />
                        ) : (
                            <IoIosHeartEmpty
                                className="text-4xl cursor-pointer"
                                onClick={handleIconClick7}
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* Eight Card */}
            <div className="card card-compact bg-base-100 w-80 shadow-2xl hover:scale-105 duration-500 hover:shadow-indigo-400 hover:bg-slate-900 hover:text-white">
                <figure>
                    <img className="w-full h-[280px]" src={icedCoffee} alt="Starter 8" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Iced Coffee</h2>
                    <p>Chilled coffee served over ice with your choice of milk and sweetener.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $4.49</p>
                        {click8 ? (
                            <IoMdHeart
                                className="text-4xl text-red-600 cursor-pointer"
                                onClick={handleIconClick8}
                            />
                        ) : (
                            <IoIosHeartEmpty
                                className="text-4xl cursor-pointer"
                                onClick={handleIconClick8}
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* Ninth Card */}
            <div className="card card-compact bg-base-100 w-80 shadow-2xl hover:scale-105 duration-500 hover:shadow-indigo-400 hover:bg-slate-900 hover:text-white">
                <figure>
                    <img className="w-full h-[280px]" src={mangoSmoothie} alt="Starter 9" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Mango Smoothie</h2>
                    <p>A creamy blend of fresh mangoes, yogurt, and a touch of honey.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $5.99</p>
                        {click9 ? (
                            <IoMdHeart
                                className="text-4xl text-red-600 cursor-pointer"
                                onClick={handleIconClick9}
                            />
                        ) : (
                            <IoIosHeartEmpty
                                className="text-4xl cursor-pointer"
                                onClick={handleIconClick9}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Beverages;