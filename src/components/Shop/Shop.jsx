// import React from 'react';

import { useEffect, useState } from "react";
import Navbar2 from "../../Shared/Navbar/Navbar2";
import ShopCart from "./ShopCart";
import Footer from "../../Shared/Footer/Footer";
import Newsletter from "../../Shared/Newsletter";

const Shop = () => {
    const [showAll, setShowAll] = useState(false);
    const [bottles, setBottles] = useState([]);
    // console.log(bottles);
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    return (
        <div>
            <Navbar2></Navbar2>
            <div className="bg-black h-[448px] font-bold flex flex-col items-center justify-center text-white px-5 ">
                <h1 className="text-4xl md:text-7xl text-center ">Shop Page</h1>
                <p className="md:max-w-[500px] mx-auto md:text-lg text-center mt-7">A water bottle is a container designed for holding and transporting water. It typically has a narrow neck.</p>
                
            </div>

            <div className="max-w-[1440px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8 px-5  mt-16 md:mt-32">
            {
                        showAll ? bottles?.map(bottle => <ShopCart key={bottle.id} bottle={bottle}></ShopCart>) : bottles?.slice(0, 8).map(bottle => <ShopCart key={bottle.id} bottle={bottle}></ShopCart>)
                    }
                </div>
            <div className="text-center mt-8 mb-16 md:mb-28">
                {showAll ? <button className='btn btn-outline  px-12 rounded-none hover:bg-cyan-900 text-xl ' onClick={() => setShowAll(!showAll)}>View Some</button> :
                    <button className='btn btn-outline  px-12 rounded-none hover:bg-cyan-900 text-xl ' onClick={() => setShowAll(!showAll)}>View More</button>
                }
            </div>
            {/* newsletter section  */}
            <Newsletter></Newsletter>

            <Footer></Footer>
        </div>
    );
};

export default Shop;