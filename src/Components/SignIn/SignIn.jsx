import React from 'react';
import { Helmet } from 'react-helmet-async';

const SignIn = () => {
    return (
        <div className='mt-24'>
            <Helmet>
               <title>Tasteful Table | Sign In</title>
            </Helmet>
            <h1>This is Sign In Page</h1>
        </div>
    );
};

export default SignIn;