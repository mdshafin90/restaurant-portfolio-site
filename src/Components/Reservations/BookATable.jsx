import React from 'react';
import { Helmet } from 'react-helmet-async';

const BookATable = () => {
    return (
        <div className='mt-24'>
            <Helmet>
               <title>Tasteful Table | Book Table</title>
            </Helmet>
            <h1>This is Book A Table</h1>
        </div>
    );
};

export default BookATable;