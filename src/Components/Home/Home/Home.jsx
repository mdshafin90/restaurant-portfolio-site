import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className='mt-24'>
            <Helmet>
               <title>Tasteful Table | Home</title>
            </Helmet>
            <div className='w-[50%] mx-auto py-10 rounded-full bg-gradient-to-r from-purple-400 via-rose-400 to-indigo-400 hover:from-indigo-500 hover:via-purple-400 hover:to-amber-300'> 
            <h1 className='text-center text-sm md:text-2xl lg:text-4xl font-bold text-slate-900'>I love Bangladesh</h1>
            </div>
        </div>
    );
};

export default Home;