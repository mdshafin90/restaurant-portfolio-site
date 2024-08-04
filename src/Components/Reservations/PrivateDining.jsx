import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivateDining = () => {
    return (
        <div className='mt-24'>
            <Helmet>
               <title>Tasteful Table | Private Dining</title>
            </Helmet>
            <h1>This is Private Dining</h1>
        </div>
    );
};

export default PrivateDining;