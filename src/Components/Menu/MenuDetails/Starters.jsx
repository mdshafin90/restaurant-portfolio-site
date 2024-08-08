import React, { useState } from 'react';
import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io';
import img2 from '../../../../public/images/starter-images/Bruschetta.png';
import img7 from '../../../../public/images/starter-images/Calamari.jpg';
import img4 from '../../../../public/images/starter-images/Chicken-Wings.png';
import img1 from '../../../../public/images/starter-images/Garlic-Bread.jpg';
import img6 from '../../../../public/images/starter-images/Mozzarella-Sticks.png';
import img8 from '../../../../public/images/starter-images/Potato-Skins.jpg';
import img9 from '../../../../public/images/starter-images/Shrimp-Cocktail.png';
import img5 from '../../../../public/images/starter-images/Spring-Rolls.jpg';
import img3 from '../../../../public/images/starter-images/Stuffed-Mushrooms.png';

const Starters = () => {
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
                    <img className="w-full h-[280px]" src={img1} alt="Starter 1" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Garlic Bread</h2>
                    <p>Crispy slices of bread topped with garlic butter and herbs.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $4.99</p>
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
                    <img className="w-full h-[280px]" src={img2} alt="Starter 2" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Bruschetta</h2>
                    <p>Fresh tomatoes, basil, and mozzarella on toasted baguette slices, drizzled with balsamic glaze.</p>
                    <div className="flex justify-between items-center">
                    <p>Price: $6.99</p>
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
                    <img className="w-full h-[280px]" src={img3} alt="Starter 3" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Stuffed Mushrooms</h2>
                    <p>Button mushrooms filled with cream cheese, garlic, and herbs, baked to perfection.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $7.49</p>
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
                    <img className="w-full h-[280px]" src={img4} alt="Starter 4" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Chicken Wings</h2>
                    <p>Juicy chicken wings coated in a spicy buffalo sauce, served with celery and blue cheese dip.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $8.99</p>
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
                    <img className="w-full h-[280px]" src={img5} alt="Starter 5" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Spring Rolls</h2>
                    <p>Crispy spring rolls stuffed with vegetables and served with a sweet chili dipping sauce.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $5.99</p>
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
                    <img className="w-full h-[280px]" src={img6} alt="Starter 6" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Mozzarella Sticks</h2>
                    <p>Golden fried mozzarella sticks served with marinara sauce.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $6.49</p>
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
                    <img className="w-full h-[280px]" src={img7} alt="Starter 7" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Calamari</h2>
                    <p>Lightly breaded and fried calamari rings served with a side of marinara sauce.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $9.99</p>
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
                    <img className="w-full h-[280px]" src={img8} alt="Starter 8" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Potato Skins</h2>
                    <p>Baked potato skins loaded with cheddar cheese, bacon, and green onions, served with sour cream.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $6.99</p>
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
                    <img className="w-full h-[280px]" src={img9} alt="Starter 9" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shrimp Cocktail</h2>
                    <p>Chilled shrimp served with a tangy cocktail sauce and lemon wedges.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $10.99</p>
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

export default Starters;