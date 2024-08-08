import React, { useState } from 'react';
import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io';
import bbqRibs from '../../../../public/images/main-course-images/BBQ-Ribs.jpg';
import beefStroganoff from '../../../../public/images/main-course-images/Beef-Stroganoff.jpg';
import chickenAlfredo from '../../../../public/images/main-course-images/Chicken-Alfredo.png';
import chickenParmesan from '../../../../public/images/main-course-images/Chicken-Parmesan.jpg';
import grilledSalmon from '../../../../public/images/main-course-images/Grilled-Salmon.jpg';
import lambChops from '../../../../public/images/main-course-images/Lamb-Chops.jpeg';
import shrimpScampi from '../../../../public/images/main-course-images/Shrimp-Scampi.jpg';
import steakFrites from '../../../../public/images/main-course-images/Steak-Frites.png';
import vegiterianLasagna from '../../../../public/images/main-course-images/Vegetarian-Lasagna.jpg';

const MainCourse = () => {
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
            <div className="card card-compact bg-base-100 w-80 shadow-2xl">
                <figure>
                    <img className="w-full h-[280px]" src={steakFrites} alt="Salad 1" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Steak Frites</h2>
                    <p>Juicy sirloin steak served with crispy French fries and a side of peppercorn sauce.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $22.99</p>
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
            <div className="card card-compact bg-base-100 w-80 shadow-2xl">
                <figure>
                    <img className="w-full h-[280px]" src={beefStroganoff} alt="Salad 2" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Beef Stroganoff</h2>
                    <p>Tender strips of beef in a rich mushroom and sour cream sauce, served over egg noodles.</p>
                    <div className="flex justify-between items-center">
                    <p>Price: $16.99</p>
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
            <div className="card card-compact bg-base-100 w-80 shadow-2xl">
                <figure>
                    <img className="w-full h-[280px]" src={chickenAlfredo} alt="Salad 3" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Chicken Alfredo</h2>
                    <p>Creamy Alfredo pasta topped with grilled chicken breast and garnished with parmesan cheese.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $15.99</p>
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
            <div className="card card-compact bg-base-100 w-80 shadow-2xl">
                <figure>
                    <img className="w-full h-[280px]" src={bbqRibs} alt="Salad 4" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">BBQ Ribs</h2>
                    <p>Slow-cooked pork ribs smothered in tangy barbecue sauce, served with coleslaw and cornbread.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $19.99</p>
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
            <div className="card card-compact bg-base-100 w-80 shadow-2xl">
                <figure>
                    <img className="w-full h-[280px]" src={lambChops} alt="Salad 5" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Lamb Chops</h2>
                    <p>Grilled lamb chops served with rosemary garlic potatoes and sautéed green beans.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $24.99</p>
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
            <div className="card card-compact bg-base-100 w-80 shadow-2xl">
                <figure>
                    <img className="w-full h-[280px]" src={chickenParmesan} alt="Salad 6" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Chicken Parmesan</h2>
                    <p>Breaded chicken breast topped with marinara sauce and melted mozzarella, served with spaghetti.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $18.49</p>
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
            <div className="card card-compact bg-base-100 w-80 shadow-2xl">
                <figure>
                    <img className="w-full h-[280px]" src={vegiterianLasagna} alt="Salad 7" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Vegetarian Lasagna</h2>
                    <p>Layers of pasta, ricotta cheese, spinach, and marinara sauce, baked with mozzarella on top.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $14.99</p>
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
            <div className="card card-compact bg-base-100 w-80 shadow-2xl">
                <figure>
                    <img className="w-full h-[280px]" src={shrimpScampi} alt="Salad 8" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shrimp Scampi</h2>
                    <p>Shrimp Scampi</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $17.99</p>
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
            <div className="card card-compact bg-base-100 w-80 shadow-2xl">
                <figure>
                    <img className="w-full h-[280px]" src={grilledSalmon} alt="Salad 9" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Grilled Salmon</h2>
                    <p>Fresh salmon fillet grilled to perfection, served with lemon butter sauce and seasonal vegetables.</p>
                    <div className="flex justify-between items-center">
                        <p>Price: $18.99</p>
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

export default MainCourse