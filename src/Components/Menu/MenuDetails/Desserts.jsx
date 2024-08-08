import React, { useState } from 'react';
import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io';
import applePie from '../../../../public/images/desserts-image/Apple-Pie.jpg';
import baklava from '../../../../public/images/desserts-image/Baklava.jpg';
import carrotCake from '../../../../public/images/desserts-image/Carrot-Cake.jpeg';
import chocolateLava from '../../../../public/images/desserts-image/Chocolate-Lava-Cake.jpg';
import chocolateMousse from '../../../../public/images/desserts-image/Chocolate-Mousse.jpg';
import cremeBrulee from '../../../../public/images/desserts-image/Creme-Brulee.jpg';
import newYork from '../../../../public/images/desserts-image/New-York-Cheesecake.jpeg';
import pannaCotta from '../../../../public/images/desserts-image/Panna-Cotta.jpg';
import tiramisu from '../../../../public/images/desserts-image/Tiramisu.jpeg';

const Desserts = () => {
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
                    <img className="w-full h-[280px]" src={chocolateLava} alt="Starter 1" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Chocolate Lava Cake</h2>
                    <p>Warm chocolate cake with a gooey molten center, served with vanilla ice cream.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $6.99</p>
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
                    <img className="w-full h-[280px]" src={applePie} alt="Starter 2" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Apple Pie</h2>
                    <p>Flaky pie crust filled with spiced apples, served warm with a scoop of vanilla ice cream.</p>
                    <div className="flex justify-between items-center">
                    <p>Price: $5.99</p>
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
                    <img className="w-full h-[280px]" src={tiramisu} alt="Starter 3" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Tiramisu</h2>
                    <p>Layers of espresso-soaked ladyfingers, mascarpone cream, and cocoa powder.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $6.99</p>
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
                    <img className="w-full h-[280px]" src={carrotCake} alt="Starter 4" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Carrot Cake</h2>
                    <p>Moist carrot cake with cream cheese frosting, garnished with walnuts.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $6.49</p>
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
                    <img className="w-full h-[280px]" src={pannaCotta} alt="Starter 5" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Panna Cotta</h2>
                    <p>Silky vanilla panna cotta with a raspberry coulis.</p>
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
                    <img className="w-full h-[280px]" src={chocolateMousse} alt="Starter 6" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Chocolate Mousse</h2>
                    <p>Light and airy chocolate mousse topped with whipped cream and chocolate shavings.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $6.99</p>
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
                    <img className="w-full h-[280px]" src={baklava} alt="Starter 7" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Baklava</h2>
                    <p>Layers of filo pastry filled with chopped nuts and sweetened with honey syrup.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $5.49</p>
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
                    <img className="w-full h-[280px]" src={cremeBrulee} alt="Starter 8" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Creme Brulee</h2>
                    <p>Rich custard topped with a layer of caramelized sugar, served with fresh berries.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $7.99</p>
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
                    <img className="w-full h-[280px]" src={newYork} alt="Starter 9" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New York Cheesecake</h2>
                    <p>Classic creamy cheesecake with a graham cracker crust, topped with a berry compote.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $7.49</p>
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

export default Desserts;