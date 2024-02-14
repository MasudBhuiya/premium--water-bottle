// import React from 'react';

import { useLoaderData } from "react-router-dom";

const MyAddedCard = () => {
    const mylists = useLoaderData();
    console.log(mylists);
    return (
        <div>
            
        </div>
    );
};

export default MyAddedCard;