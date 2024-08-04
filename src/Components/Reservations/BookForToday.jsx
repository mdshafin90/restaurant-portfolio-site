import React from 'react';
import { Helmet } from 'react-helmet-async';

const BookForToday = () => {
    return (
        <div className='mt-24'>
            <Helmet>
               <title>Tasteful Table | Book Today</title>
            </Helmet>
            <h1>Book For Today</h1>
        </div>
    );
};

export default BookForToday;