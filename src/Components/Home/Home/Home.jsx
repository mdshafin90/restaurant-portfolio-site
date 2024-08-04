import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className='mt-24'>
            <Helmet>
               <title>Tasteful Table | Home</title>
            </Helmet>
            <h1>This is From Home</h1>
        </div>
    );
};

export default Home;