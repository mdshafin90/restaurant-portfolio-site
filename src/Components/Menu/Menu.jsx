import React from 'react';
import { Helmet } from 'react-helmet-async';

const Menu = () => {
    return (
        <div className='mt-24'>
            <Helmet>
               <title>Tasteful Table | Menu</title>
            </Helmet>
            <h1>This is Menu</h1>
        </div>
    );
};

export default Menu;