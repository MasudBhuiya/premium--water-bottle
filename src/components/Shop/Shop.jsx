// import React from 'react';

import { useEffect, useState } from "react";
import Navbar2 from "../../Shared/Navbar/Navbar2";
import ShopCart from "./ShopCart";
import Footer from "../../Shared/Footer/Footer";

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
            <section className='mt-12 md:mt-36  max-w-[1440px] md:flex mb-16 justify-center md:justify-between items-center gap-10 mx-auto px-5 '>
                <img className='w-full sm:w-[270px] sm:h-[270px]' src="https://s3-alpha-sig.figma.com/img/7762/f7c0/5ec2946c9ec0e797330d219d19d29740?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V8HGBzVdqAkDQXXrwyVyEQbHWZvCOXjgFrPtI-46bo85vIw~f9wBzASnn6utqQx-1sqoP1I9DJhOQwbPIVkSzx1zEBWoEb4An4c7c5rtx3DevgR01eaDHkpv1dm9AzgWCUW7tZ-8LvIRbHVhVUSqKhEd8M8xPE01zRLOzVzZrH2nrl2CF4xa9Wh-qMQ7pyyk4jNrt8YdjYZ7-fqVkui3Xpil0gE27dbkI0mvd6EAbvpm62IDXeZtBqYUB5MGtebkc20TQxiUy8p9qhTfH~bemgIRFsdveinrJsJNFJzDC-AzuslKsWYafW6rYwcbIvhSmJPLLQl2CvIL4P3uO968Ng__" alt="" />
                <div className='w-full md:w-[40%] my-6 items-center text-center'>
                    <h1 className='text-4xl font-semibold mb-2'>Join Our Newsletter</h1>
                    <p>Sign up for deals, new products and promotions</p>

                    <input className='w-10/12 py-2 relative md:-start-5 mt-5' type="email" name="" placeholder='Enter your email' id="" />
                    <input type="submit" name="" id="" />
                    <hr className='border-1 border-gray-400' />
                </div>
                <img className='w-full sm:w-[270px] sm:h-[270px]' src="https://s3-alpha-sig.figma.com/img/96ba/f961/b99e17ef820e5d8dba250d7ba56e90d6?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M05ySDY-qCvzu282e4aeQv9TOdlAxC8i4M4Jxy2k2V45DAIHZUVTwCqFnWkOekSirXYT6tSa-L49GlrdWmMR-co~0I0M4I0oEcy9WIOUP~LDeLlhxUq7arYschu0z9Jv0mbV4Pg8zBzeNXJzMut~miOsH-fMVxZ8m2lI-1Xl2ruCeM2e5qV1GpMpN0PNG2NU~KUCre8N5CfedMB87-3kroHIrGjHoobvj-SCsP8m7Jy57Spj-kcERqAgGjuDTxijyrlsUTd-5Aw~EXBNfFzKuK3D8W7vxghgXq5OTlvcZbEVbvnERXhM~55xqngDebCV4fmTDsOs8UDhiYM8jvFZxA__" alt="" />
            </section>


            <Footer></Footer>
        </div>
    );
};

export default Shop;