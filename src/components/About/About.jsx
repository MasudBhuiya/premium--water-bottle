// import React from 'react';
import './About.css'
import Navbar2 from "../../Shared/Navbar/Navbar2";
import { IoWalletOutline } from "react-icons/io5";
import { BsTruck } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import Footer from '../../Shared/Footer/Footer';
import { Link } from 'react-router-dom';
import Newsletter from '../../Shared/Newsletter';
import Customers from '../../Shared/Customers';
import Questions from '../../Shared/Questions';

const About = () => {
    return (
        <div className="">
            <Navbar2></Navbar2>
            <div className="bg-black h-[728px] font-bold flex flex-col items-center justify-center text-white px-5 ">
                <h1 className="text-4xl md:text-7xl text-center md:-mt-20">Welcome to our bottle up store</h1>
                <p className="md:max-w-[670px] mx-auto md:text-lg text-center mt-7">A water bottle is a container designed for holding and transporting water. It typically has a narrow neck</p>
                <div className='md:flex items-center justify-center w-[320px] sm:w-[600px] mx-auto gap-8'>
                    <button className='banner-btn text-[15px] w-full md:w-fit md:font-bold px-9 mt-8'>Learn More</button>
                    <Link to="/shop"><button className='border border-white w-full md:w-fit rounded-none py-[18px] flex items-center justify-center  text-[15px] md:font-bold px-9 mt-8'>Go to Shop</button></Link>
                </div>
            </div>
            <div className='relative bottom-32 md:bottom-48'>
                <img className='w-[85%] md:w-[60%] mx-auto h-[225px] md:h-[454px]' src="https://s3-alpha-sig.figma.com/img/3cb4/3a49/2fa9b170a392c60dc77b7aa10a4901c2?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KqYr1DQXsYSKs0vLLmua-Y3906gUFjMIX~ZBeoAyCov6T7PBZK4P8QxGljOW5YdQlBK2g2Yuyb9vE0XDx7whnCXNz19-ZomGlnR9UfIYWhT29KKnDLCeZ0odGZKKCNkx1rsVs1DfO-HXh7u5DqxNS9zFfb96h32PBRtsy3OTyovq9Paf7CSRXV06~3lRZR70LTgkCRZNpJ8qziBwLaLUBbR3uWREhhzOh4LkqpdV~EjELmYauTmwJ43gR~g4Kownyh-B9zJH165f7W~x3n54wpMaJDaetCat43scBiYXnn1DMzGw4s91iq51tSPTIO7aJwkH3qgR3KZasPb3M2xW6A__" alt="" />
            </div>


            {/* unique section  */}
            <section>
                <p className='text-center mb-3'><small className='text-[#03677C] text-center'>100% Premium Quality</small></p>
                <h1 className='text-3xl md:text-5xl font-bold max-w-[850px] mx-auto text-center   '>We’ve created wellness solutions that are as unique as you.</h1>
                <p className='text-lg mt-5 max-w-[800px] mx-auto text-center font-medium'>A water bottle is a container designed for holding and transporting water. It typically has a narrow neck and a cap or lid to prevent spills. </p>

                    {/* story section  */}
                <section className='md:flex mt-12 md:mt-36 max-w-[1440px] items-center gap-20 mx-auto px-5 '>
                    <div className=''>
                        <img className='w-full md:w-[500px] h-[407px]' src="https://s3-alpha-sig.figma.com/img/74c2/8c6d/da47ee1338b3923b0fe58f6023759a84?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O3aN1CV0FFzvZoVCRg~-j~aR81V27-WR7dNlpZc-TCGLPlO-eNhLWQ4Vht-gaf5QSVQEWpT4ax6JhP7mW7wn7LSfgcagyFYrIrE6l0CxgoFb5579EhS99LawOQBGE4lqA7EBy9ciTuQ5lRa6ktgf7r32Ax04VeQdzt0TDnGwHfkleBbSNsWYz8STFXSdIT5dsHzvF70I6j88EsGXANtl02c-tKixuBrCQJAAz0r3qDZW7GnaqZVPPQxzVfOJXiq2XBSIVTZqRgWysBIJ7OF3UZSH4Y2VLJ7y6h7wITY7MPHQDjWOOl7r1b~Thz-Ewvi7lbsD5JLVs7Tlw4GGewhZIA__" alt="" />
                    </div>
                    <div className='w-full md:w-2/3 flex flex-col items-center md:items-start mt-6 md:mt-0'>
                        <h1 className='text-3xl md:text-5xl font-bold max-w-[820px] text-center md:text-start '>Our Story</h1>
                        <p className='text-lg mt-5 max-w-[840px] font-medium text-center md:text-start'>A water bottle is a container designed for holding and transporting water. It typically has a narrow neck.A water bottle is a container designed for holding and transporting water. It typically has a narrow neckA water bottle is a container designed for holding and transporting water. It typically has a narrow neck.A water bottle is a container designed for holding and transporting water. It typically has a narrow neck.</p>

                        <div className='flex items-center max-w-[600px] gap-5'>
                            <button className='banner-btn  text-[15px] md:font-bold px-9 mt-8'>Learn More</button>
                            <Link to="/shop"><button className='border border-black rounded-none py-[18px] flex items-center justify-center  text-[15px] md:font-bold px-9 mt-8'>Go to Shop</button></Link>
                        </div>
                    </div>
                </section>
            </section>

            {/* shine from section  */}
            <section className='md:flex mt-12 md:mt-36 max-w-[1440px] items-center  gap-20 mx-auto px-5 '>

                <div className='w-full md:w-2/3 flex flex-col items-center md:items-start'>
                    <h1 className='text-3xl md:text-5xl font-bold max-w-[820px] text-center md:text-start '>Shine from inside</h1>
                    <p className='text-lg mt-5 max-w-[840px] text-center md:text-start font-medium'>A water bottle is a container designed for holding and transporting water. It typically has a narrow neck.A water bottle is a container designed for holding and transporting water. It typically has a narrow neckA water bottle is a container designed for holding and transporting water. It typically has a narrow neck.A water bottle is a container designed for holding and transporting water. It typically has a narrow neck.</p>

                    <div className='flex items-center max-w-[600px] gap-5'>
                        <button className='banner-btn  text-[15px] md:font-bold px-9 mt-8'>Learn More</button>
                        <Link to="/shop"><button className='border border-black rounded-none py-[18px] flex items-center justify-center  text-[15px] md:font-bold px-9 mt-8'>Go to Shop</button></Link>
                    </div>
                </div>
                <div className='mt-6 md:mt-0'>
                    <img className='w-full md:w-[500px] h-[407px]' src="https://s3-alpha-sig.figma.com/img/f3a4/4c09/2b64b73fc9fcb6493a2fb4a63fc45e14?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DPaPAYmg~Hq8YQoVY5EJkwMEToMZxJDeQMgG05TaLjblJANAyS~lw~n-AnW9wVbKgmulYwfzYfJ2zNMGqMz-HNgh2F-xkHLpUdv~GGTsPVo7Av6O8K79iP9II88tGPPJcfheutfxxu24miYGHtpxWcYUTpZ5sr3~5LFo-OY91Met~m0r3QWZIRCMeZ7RrLBDZ6PUcwUZKA4rGgJ13OeDJ5iuvXv80AytI~mEddxaILsU5wZ6cTvTfpnsP3s8HtLNpyvu0WmjphFyOUALQWcuHDbNkbPBErJwRENWjLNsnebEofOKBlyWcBabVKP0BmHglLvxhc88e-p6Q4iwmE~2qw__" alt="" />
                </div>
            </section>


            {/* about details section  */}
            <section className='flex flex-wrap justify-center md:justify-between mt-16 md:mt-36 max-w-[1440px] items-center gap-20 mx-auto px-5 '>
                <div>
                    <BsTruck className='text-6xl' />
                    <h1 className='text-3xl font-medium mt-4'>Free Shipping</h1>
                    <p className='text-lg'>Order above $200</p>
                </div>
                <div>
                    <IoWalletOutline className='text-6xl' />
                    <h1 className='text-3xl font-medium mt-4'>Free Shipping</h1>
                    <p className='text-lg'>Order above $200</p>
                </div>
                <div>
                    <CiLock className='text-6xl' />
                    <h1 className='text-3xl font-medium mt-4'>Free Shipping</h1>
                    <p className='text-lg'>Order above $200</p>
                </div>
                <div>
                    <FiPhone className='text-6xl' />
                    <h1 className='text-3xl font-medium mt-4'>Free Shipping</h1>
                    <p className='text-lg'>Order above $200</p>
                </div>
            </section>



            {/* customer love section  */}
            <Customers></Customers>



            {/* asked question section  */}
            <Questions></Questions>


            {/* newsletter section  */}
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default About;