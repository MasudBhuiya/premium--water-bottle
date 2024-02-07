// import React from 'react';

import { FaStar } from "react-icons/fa";

const Review = ({review}) => {
    // console.log(review);
    return (
        <div className="md:flex my-10 gap-10">
            <img className="w-12 h-12 rounded-full" src={review?.image} alt="" />
            <div>
                <h1 className="text-2xl font-semibold">{review?.userName}</h1>
                <span className="flex gap-1 text-md my-4 items-center">
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                    </span>
                <p>{review.review}</p>
                <div className="flex items-center gap-5">
                <p className="my-3 font-semibold">{review.timeSpend} ago</p>
                <p className="font-bold">Like</p>
                <p className="font-bold">Relpy</p>
                </div>
            </div>
        </div>
    );
};

export default Review;