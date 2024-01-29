// import React from 'react';
import './About.css'
import Navbar2 from "../../Shared/Navbar/Navbar2";
import { IoWalletOutline } from "react-icons/io5";
import { BsTruck } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

const About = () => {
    return (
        <div className="">
            <Navbar2></Navbar2>
            <div className="bg-black h-[728px] font-bold flex flex-col items-center justify-center text-white px-5 md:px-0">
                <h1 className="text-4xl md:text-7xl text-center md:-mt-20">Welcome to our bottle up store</h1>
                <p className="md:max-w-[670px] mx-auto md:text-lg text-center mt-7">A water bottle is a container designed for holding and transporting water. It typically has a narrow neck</p>
                <div className='md:flex items-center justify-center w-[320px] sm:w-[600px] mx-auto gap-8'>
                    <button className='banner-btn text-[15px] w-full md:w-fit md:font-bold px-9 mt-8'>Learn More</button>
                    <button className='border border-white w-full md:w-fit rounded-none py-[18px] flex items-center justify-center  text-[15px] md:font-bold px-9 mt-8'>Go to Shop</button>
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


                <section className='md:flex mt-12 md:mt-36 max-w-[1440px] items-center gap-20 mx-auto px-5 md:px-0'>
                    <div className=''>
                        <img className='w-full md:w-[500px] h-[407px]' src="https://s3-alpha-sig.figma.com/img/74c2/8c6d/da47ee1338b3923b0fe58f6023759a84?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O3aN1CV0FFzvZoVCRg~-j~aR81V27-WR7dNlpZc-TCGLPlO-eNhLWQ4Vht-gaf5QSVQEWpT4ax6JhP7mW7wn7LSfgcagyFYrIrE6l0CxgoFb5579EhS99LawOQBGE4lqA7EBy9ciTuQ5lRa6ktgf7r32Ax04VeQdzt0TDnGwHfkleBbSNsWYz8STFXSdIT5dsHzvF70I6j88EsGXANtl02c-tKixuBrCQJAAz0r3qDZW7GnaqZVPPQxzVfOJXiq2XBSIVTZqRgWysBIJ7OF3UZSH4Y2VLJ7y6h7wITY7MPHQDjWOOl7r1b~Thz-Ewvi7lbsD5JLVs7Tlw4GGewhZIA__" alt="" />
                    </div>
                    <div className='w-full md:w-2/3 flex flex-col items-center md:items-start mt-6 md:mt-0'>
                        <h1 className='text-3xl md:text-5xl font-bold max-w-[820px] text-center md:text-start '>Our Story</h1>
                        <p className='text-lg mt-5 max-w-[840px] font-medium text-center md:text-start'>A water bottle is a container designed for holding and transporting water. It typically has a narrow neck.A water bottle is a container designed for holding and transporting water. It typically has a narrow neckA water bottle is a container designed for holding and transporting water. It typically has a narrow neck.A water bottle is a container designed for holding and transporting water. It typically has a narrow neck.</p>

                        <div className='flex items-center max-w-[600px] gap-5'>
                            <button className='banner-btn  text-[15px] md:font-bold px-9 mt-8'>Learn More</button>
                            <button className='border border-black rounded-none py-[18px] flex items-center justify-center  text-[15px] md:font-bold px-9 mt-8'>Go to Shop</button>
                        </div>
                    </div>
                </section>
            </section>

            {/* shine from section  */}
            <section className='md:flex mt-12 md:mt-36 max-w-[1440px] items-center  gap-20 mx-auto px-5 md:px-0'>

                <div className='w-full md:w-2/3 flex flex-col items-center md:items-start'>
                    <h1 className='text-3xl md:text-5xl font-bold max-w-[820px] text-center md:text-start '>Our Story</h1>
                    <p className='text-lg mt-5 max-w-[840px] text-center md:text-start font-medium'>A water bottle is a container designed for holding and transporting water. It typically has a narrow neck.A water bottle is a container designed for holding and transporting water. It typically has a narrow neckA water bottle is a container designed for holding and transporting water. It typically has a narrow neck.A water bottle is a container designed for holding and transporting water. It typically has a narrow neck.</p>

                    <div className='flex items-center max-w-[600px] gap-5'>
                        <button className='banner-btn  text-[15px] md:font-bold px-9 mt-8'>Learn More</button>
                        <button className='border border-black rounded-none py-[18px] flex items-center justify-center  text-[15px] md:font-bold px-9 mt-8'>Go to Shop</button>
                    </div>
                </div>
                <div className='mt-6 md:mt-0'>
                    <img className='w-full md:w-[500px] h-[407px]' src="https://s3-alpha-sig.figma.com/img/74c2/8c6d/da47ee1338b3923b0fe58f6023759a84?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O3aN1CV0FFzvZoVCRg~-j~aR81V27-WR7dNlpZc-TCGLPlO-eNhLWQ4Vht-gaf5QSVQEWpT4ax6JhP7mW7wn7LSfgcagyFYrIrE6l0CxgoFb5579EhS99LawOQBGE4lqA7EBy9ciTuQ5lRa6ktgf7r32Ax04VeQdzt0TDnGwHfkleBbSNsWYz8STFXSdIT5dsHzvF70I6j88EsGXANtl02c-tKixuBrCQJAAz0r3qDZW7GnaqZVPPQxzVfOJXiq2XBSIVTZqRgWysBIJ7OF3UZSH4Y2VLJ7y6h7wITY7MPHQDjWOOl7r1b~Thz-Ewvi7lbsD5JLVs7Tlw4GGewhZIA__" alt="" />
                </div>
            </section>


            {/* about details section  */}
            <section className='flex flex-wrap justify-center md:justify-between mt-16 md:mt-36 max-w-[1440px] items-center gap-20 mx-auto px-5 md:px-0'>
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
<div className='mt-20 md:mt-32 p-5 md:p-0 max-w-[1440px] mx-auto'>
                <h1 className='title text-3xl md:text-6xl text-center max-w-[830px] mx-auto'>Our Customer Love</h1>
                <p className=' max-w-[657px] mx-auto text-xl text-center mt-3'>Embarking on Adventures, Building Memories: Where Customer Love Takes Flight with the Travel Guru</p>


                {/* user details  */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 md:gap-y-20 mt-10 md:mt-20 mb-20'>
                    <div>
                        <p className='max-w-[350px]'>Discover how our travel guru guided this solo adventurer to off-the-beaten-path destinations, turning a solitary journey into a rich tapestry of experiences.</p>
                        <div className='flex items-center gap-4 mt-4'>
                            <img className='w-16 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcSgiG4CPYdRpP7ahhJZaDDHj5iBaOFEFDbGpvLse0trNhfr5A6efOXjA-bfjaNF1XNf0&usqp=CAU" alt="" />
                            <div>
                                <h1 className='font-medium '>Emily Thompson</h1>
                                <p>UI Designer</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='max-w-[350px]'>Explore the testimonials of a family who found the perfect balance of fun and relaxation, thanks to the tailored recommendations and insights provided by our travel guru.</p>
                        <div className='flex items-center gap-4 mt-4'>
                            <img className='w-16 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_pgbZQKfFX10RBv-IDDzM9Ety2UpwVp1igauCI1o63eVAOtdvPcf6Ty5XcJq78hc88dk&usqp=CAU" alt="" />
                            <div>
                                <h1 className='font-medium '>Carlos Rodriguez</h1>
                                <p>UI Designer</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='max-w-[350px]'>Hear from a couple who transformed their vacation into a romantic escapade, with the travel guru`s expertise leading them to the most enchanting and intimate destinations.</p>
                        <div className='flex items-center gap-4 mt-4'>
                            <img className='w-16 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnhymeWKr66OejjS-OpM8VK97n-7E5an4fe__1HaHs9MAPd6zbDfY1uwZUeGoGuUFGGR8&usqp=CAU" alt="" />
                            <div>
                                <h1 className='font-medium '>Sophia Johnson</h1>
                                <p>UI Designer</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='max-w-[350px]'>Delve into the story of a food enthusiast who experienced the world`s flavors with guidance from our travel guru, discovering hidden culinary gems and savoring unforgettable tastes.</p>
                        <div className='flex items-center gap-4 mt-4'>
                            <img className='w-16 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZA75zaJus0m40dxoToryR3qD-Vo2kr1eAw&usqp=CAU" alt="" />
                            <div>
                                <h1 className='font-medium '>Raj Kapoor</h1>
                                <p>UI Designer</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='max-w-[350px]'>Learn how a history enthusiast immersed themselves in the rich tapestry of cultures and histories, with our travel guru`s curated itineraries providing a deep and meaningful exploration.</p>
                        <div className='flex items-center gap-4 mt-4'>
                            <img className='w-16 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY_UP9cSEjFLqwEVNDqWPhu9lUPLkzzaVpJw&usqp=CAU" alt="" />
                            <div>
                                <h1 className='font-medium '>Olivia Chen</h1>
                                <p>UI Designer</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='max-w-[350px]'>Follow the journey of a budget-conscious traveler who uncovered affordable yet incredible destinations and activities, proving that memorable adventures need not break the bank.</p>
                        <div className='flex items-center gap-4 mt-4'>
                            <img className='w-16 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcSgiG4CPYdRpP7ahhJZaDDHj5iBaOFEFDbGpvLse0trNhfr5A6efOXjA-bfjaNF1XNf0&usqp=CAU" alt="" />
                            <div>
                                <h1 className='font-medium '>Marcus Taylor</h1>
                                <p>UI Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;