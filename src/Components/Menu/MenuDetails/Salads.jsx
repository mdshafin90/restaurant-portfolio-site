import React, { useState } from 'react';
import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io';
import avocadoSalad from '../../../../public/images/salads-images/Avocado-Salad.png';
import caesarSalad from '../../../../public/images/salads-images/Caesar-Salad.jpg';
import capreseSalad from '../../../../public/images/salads-images/Caprese-Salad.jpg';
import chickenSalad from '../../../../public/images/salads-images/Chicken-Caesar-Salad.jpg';
import cobbSalad from '../../../../public/images/salads-images/Cobb-Salad.jpg';
import fruitSalad from '../../../../public/images/salads-images/Fruit-Salad.jpeg';
import greekSalad from '../../../../public/images/salads-images/Greek-Salad.jpg';
import quinoaSalad from '../../../../public/images/salads-images/Quinoa-Salad.jpg';
import spinachSalad from '../../../../public/images/salads-images/Spinach-Salad.jpg';

const Salads = () => {
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
                    <img className="w-full h-[280px]" src={caesarSalad} alt="Salad 1" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Caesar Salad</h2>
                    <p>Crisp romaine lettuce, croutons, and parmesan cheese, tossed in Caesar dressing.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $7.99</p>
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
                    <img className="w-full h-[280px]" src={greekSalad} alt="Salad 2" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Greek Salad</h2>
                    <p>Mixed greens, tomatoes, cucumbers, red onions, olives, and feta cheese, served with a Greek vinaigrette.</p>
                    <div className="flex justify-between items-center">
                    <p>Price: $8.99</p>
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
                    <img className="w-full h-[280px]" src={capreseSalad} alt="Salad 3" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Caprese Salad</h2>
                    <p>Fresh tomatoes, mozzarella cheese, and basil, drizzled with balsamic glaze.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $9.49</p>
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
                    <img className="w-full h-[280px]" src={cobbSalad} alt="Salad 4" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Cobb Salad</h2>
                    <p>Mixed greens topped with grilled chicken, bacon, avocado, hard-boiled egg, tomatoes, and blue cheese, served with ranch dressing.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $10.99</p>
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
                    <img className="w-full h-[280px]" src={spinachSalad} alt="Salad 5" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Spinach Salad</h2>
                    <p>Baby spinach, red onions, mushrooms, and hard-boiled egg, tossed in a warm bacon vinaigrette.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $8.49</p>
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
                    <img className="w-full h-[280px]" src={quinoaSalad} alt="Salad 6" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Quinoa Salad</h2>
                    <p>Quinoa, mixed greens, cherry tomatoes, cucumbers, red onions, and feta cheese, tossed in a lemon vinaigrette.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $9.99</p>
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
                    <img className="w-full h-[280px]" src={chickenSalad} alt="Salad 7" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Chicken Caesar Salad</h2>
                    <p>Classic Caesar salad topped with grilled chicken breast.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $11.99</p>
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
                    <img className="w-full h-[280px]" src={fruitSalad} alt="Salad 8" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Fruit Salad</h2>
                    <p>A refreshing mix of seasonal fruits, served with a honey-lime dressing.</p>
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
                    <img className="w-full h-[280px]" src={avocadoSalad} alt="Salad 9" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Avocado Salad</h2>
                    <p>Mixed greens, avocado slices, cherry tomatoes, red onions, and a light citrus vinaigrette.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $9.49</p>
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

export default Salads