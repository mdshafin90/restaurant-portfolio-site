import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div className='mt-24'>
            <Helmet>
               <title>Tasteful Table | About</title>
            </Helmet>
           <h1>This is About</h1> 
        </div>
    );
};

export default About;