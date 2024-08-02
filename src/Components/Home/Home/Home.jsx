import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
               <title>Restaurant | Home</title>
            </Helmet>
            <h1>This is From Home</h1>
        </div>
    );
};

export default Home;