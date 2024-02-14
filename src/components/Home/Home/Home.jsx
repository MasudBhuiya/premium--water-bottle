import { useEffect, useState } from 'react';
import './Home.css'
import Card from '../Card/Card';
import { FaCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { IoSunnyOutline } from "react-icons/io5";
import { MdOutlineSevereCold } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Newsletter from '../../../Shared/Newsletter';
import Customers from '../../../Shared/Customers';
import Questions from '../../../Shared/Questions';

const Home = () => {
    const [bottles, setBottles] = useState([]);
    const [showAll, setShowAll] = useState(false);
    // console.log(bottles);
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    return (
        <div>
            {/* banner section  */}
            <div className='flex px-5  flex-col-reverse max-w-[1440px] mt-10 md:mt-20 items-center justify-between mx-auto md:flex-row'>
                <div className='w-full md:w-1/2'>
                    <h1 className='banner-title text-4xl md:text-7xl'>Premium Drinking <br /> Water Bottle</h1>
                    <p className='banner-sub-title my-5'>A water bottle is a container designed for holding and transporting water. It typically has a narrow neck and a cap or lid to prevent spills. </p>
                    <button className='banner-btn text-[15px] md:font-bold px-9'>Buy Now & Get Free a Premium Bag</button>
                    <div className='flex items-center mt-6'>
                        <span className='flex relative'>
                            <img className='w-12 rounded-full border-2 border-white' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTcUnv77tNZ4m9l8OvOwnDLheOSWMsrayF4rhvApkyoOF2SI9m3kAoDrx1rDCz9DAH1Lg&usqp=CAU" alt="" />
                            <img className='w-12 rounded-full relative end-4 border-2 border-white' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTcUnv77tNZ4m9l8OvOwnDLheOSWMsrayF4rhvApkyoOF2SI9m3kAoDrx1rDCz9DAH1Lg&usqp=CAU" alt="" />
                            <img className='w-12 rounded-full border-2 relative end-8 border-white' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTcUnv77tNZ4m9l8OvOwnDLheOSWMsrayF4rhvApkyoOF2SI9m3kAoDrx1rDCz9DAH1Lg&usqp=CAU" alt="" />
                        </span>
                        <p>100k+ Happy Customer</p>
                    </div>
                </div>
                <div style={{ borderRadius: '0 120px 0 0' }} className=' md:bg-cyan-800 w-[314px] h-[517px] flex items-center relative'>
                    <img className='h-[440px] relative md:end-32' src="https://i.ibb.co/nzSgM4C/image-20.png" alt="" />
                </div>
            </div>

            {/* clean section  */}
            <section className='bg-black '>
                <div className='md:flex justify-between items-center max-w-[1400px] px-5 mx-auto text-white py-10'>
                    <div className='flex items-center gap-4'>
                        <img className='w-16' src="https://i.ibb.co/r0Qj5nK/Screenshot-2024-01-28-130523.png" alt="" />
                        <p>Easy Clean</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img className='w-16' src="https://i.ibb.co/mzhjqNg/Screenshot-2024-01-28-125804.png" alt="" />
                        <p>1 Year Warranty</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img className='w-16' src="https://i.ibb.co/805yKfn/Screenshot-2024-01-28-125843.png" alt="" />
                        <p>12h Hot/18h Cold</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img className='w-16' src="https://i.ibb.co/2y2b1NM/Screenshot-2024-01-28-125859.png" alt="" />
                        <p>Stainless Steeln</p>
                    </div>
                </div>
            </section>


            {/* card section  */}
            <section className='bottles-title max-w-[1440px] mx-auto  mt-10 md:mt-28 text-2xl md:text-4xl'>
                <h1 className='px-5'>Turn heads with our selection of sleek stainless steel water bottles! Our BPA-free bottles keep drinks cold for hours and feature eye-catching colors and prints</h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5  mt-10 md:mt-16 gap-6 items-center justify-center mb-5'>
                    {
                        showAll ? bottles?.map(bottle => <Card key={bottle.id} bottle={bottle}></Card>) : bottles?.slice(0, 4).map(bottle => <Card key={bottle.id} bottle={bottle}></Card>)
                    }
                </div>

                {showAll ? <button className='btn bg-cyan-700 text-white px-12 rounded-none hover:bg-cyan-900 text-xl ' onClick={() => setShowAll(!showAll)}>View Some</button> :
                    <button className='btn bg-cyan-700 text-white px-12 rounded-none hover:bg-cyan-900 text-xl ' onClick={() => setShowAll(!showAll)}>View all</button>
                }
            </section>


            {/* why choose us section  */}
            <section className='max-w-[1440px] mx-auto'>
                <h1 className='text-3xl md:text-5xl font-bold max-w-[670px] mx-auto mt-16 md:mt-32 text-center'>Why Choose Our Premium  Bottle?</h1>
                <div className='md:flex px-5  gap-10 mt-10 md:mt-20'>
                    <img className='md:w-[400px] lg:w-[571px] h-[571px]' src="https://i.ibb.co/fqcKwWs/Rectangle-1.png" alt="" />



                    <div className=''>
                        <table className='table '>
                            <tr className='text-lg md:text-2xl  border-b-stone-400 border-b font-bold'>
                                <th></th>
                                <th className='border-x-slate-300 border-x-2 bg-black text-white text-center'>We</th>
                                <th className='text-center'>Others</th>
                            </tr>
                            <tr className='text-lg md:text-2xl  border-b-stone-400 border-b font-bold'>
                                <td >Unparalleled effectiveness</td>
                                <td className='border-x-slate-300 border-x-2 w-fit text-4xl relative lg:start-4'><FaCheckCircle />
                                </td>
                                <td className='border-x-slate-300  w-fit text-4xl relative lg:start-8'><FaCheckCircle />
                                </td>
                            </tr>
                            <tr className='text-lg md:text-2xl  border-b-stone-400 border-b font-bold'>
                                <td>No harsh chemicals</td>
                                <td className='border-x-slate-300 border-x-2 w-fit text-4xl relative lg:start-4'><FaCheckCircle />
                                </td>
                                <td className='border-x-slate-300  w-fit text-4xl relative lg:start-8'><RxCrossCircled />

                                </td>
                            </tr>
                            <tr className='text-lg md:text-2xl  border-b-stone-400 border-b font-bold'>
                                <td>Environment friendly</td>
                                <td className='border-x-slate-300 border-x-2 w-fit text-4xl relative lg:start-4'><FaCheckCircle />
                                </td>
                                <td className='border-x-slate-300 w-fit text-4xl relative lg:start-8'><RxCrossCircled />

                                </td>
                            </tr>
                            <tr className='text-lg md:text-2xl  border-b-stone-400 border-b font-bold'>
                                <td>High Quality</td>
                                <td className='border-x-slate-300 border-x-2 w-fit text-4xl relative lg:start-4'><FaCheckCircle />
                                </td>
                                <td className='border-x-slate-300  w-fit text-4xl relative lg:start-8'><RxCrossCircled />

                                </td>
                            </tr>
                            <tr className='text-lg md:text-2xl   font-bold'>
                                <td>Affordable cost</td>
                                <td className='border-x-slate-300 border-x-2 w-fit text-4xl relative lg:start-4'><FaCheckCircle />
                                </td>
                                <td className='border-x-slate-300 w-fit text-4xl relative lg:start-8'><RxCrossCircled />

                                </td>
                            </tr>
                        </table>

                        <Link to="/shop"><button className=' btn bg-black btn-block rounded-none h-16 hover:bg-slate-900 mt-7 text-xl text-white'>Shop Now</button>
                        </Link>
                        <div className='flex mt-5 items-center gap-5'>
                            <img className='rounded-full w-20' src="https://i.ibb.co/vjmgn3L/Screenshot-2024-01-28-172025.png" alt="" />
                            <p className='text-xl'>Try it risk-free for 30 days. If you`re not totally in love with the product, we will refund you 100%.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* carrying section  */}
            <section className='md:flex mt-12 md:mt-36 max-w-[1440px] items-center gap-10 mx-auto px-5 '>
                <div className='w-full md:w-2/3'>
                    <h1 className='text-3xl md:text-5xl font-bold max-w-[800px] text-center md:text-start  '>You just need these when you travel for easy carrying.</h1>
                    <p className='text-lg mt-5 max-w-[550px] font-medium'>A water bottle is a container designed for holding and transporting water. It typically has a narrow neck and a cap or lid to prevent spills. </p>
                    <div className='flex gap-6 mt-5'>
                        <span className='flex items-center gap-3'>
                            <IoSunnyOutline className='text-4xl text-yellow-500' />
                            <p className='font-medium'>Hot for 12hr</p>
                        </span>
                        <span className='flex items-center gap-3'>
                            <MdOutlineSevereCold className='text-4xl text-yellow-500' />
                            <p className='font-medium'>Cold for 16hr</p>
                        </span>
                    </div>
                    <div className='md:flex  justify-between items-center max-w-[600px]'>
                        <button className='banner-btn w-full md:w-fit text-[15px] md:font-bold px-9 mt-6'>Buy Now & Get Free a Premium Bag</button>
                        <p className='mt-3 md:mt-0'><del className='text-gray-400'>$120.00</del> $100.00</p>
                    </div>


                </div>
                <div className='flex md:justify-end'>
                    <img className='md:w-[400px] lg:w-[571px] max-h-[571px] ' src="https://i.ibb.co/0jCwsKk/image-30.png" alt="" />
                </div>
            </section>


            {/* happy customer section  */}

            <section className='bg-black py-16 mt-12 md:mt-32'>

                <div className='md:flex items-center justify-center gap-8 px-5 mb-9 '>
                    <span className='flex text-yellow-500 text-2xl gap-1 '>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </span>
                    <h1 className='text-white text-2xl'>15,00+ Happy Customers</h1>
                </div>
                <div className='md:flex justify-between items-center max-w-[1440px] px-5  mx-auto text-white'>
                    <div className='text-center'>
                        <p className='max-w-[380px] mb-5'>``Ever since I started using [Product Name], my home has never felt cleaner or fresher. It`s a game-changer in the cleaning world!``</p>
                        <p className='mb-2'>Alexa M</p>
                        <small>Verified Customer</small>
                    </div>
                    <div className='text-center'>
                        <p className='max-w-[380px] mb-5'>``With two kids and a pet, messes are inevitable. [Product Name] effortlessly tackles the toughest stains, leaving my home spotless every time!``</p>
                        <p className='mb-2'>Nathan R</p>
                        <small>Verified Customer</small>
                    </div>
                    <div className='text-center'>
                        <p className='max-w-[380px] mb-5'>``I`ve tried countless cleaning products, but none have impressed me as much as [Product Name]. It’s both effective and smells amazing!``</p>
                        <p className='mb-2'>Linda F</p>
                        <small>Verified Customer</small>
                    </div>

                </div>
            </section>


            {/* contact us section  */}
            <section className='md:flex mt-12 md:mt-36 max-w-[1440px] items-center gap-20 mx-auto px-5 '>
                <div className=''>
                    <img className='md:w-[500px] h-[407px]' src="https://i.ibb.co/Tm1RGDb/Rectangle-6113.png" alt="" />
                </div>
                <div className='w-full md:w-2/3'>
                    <h1 className='text-3xl md:text-5xl font-bold max-w-[840px] text-center md:text-start '>If You Need to Customize your product, contact us here.</h1>
                    <p className='text-lg mt-5 max-w-[850px] font-medium'>A water bottle is a container designed for holding and transporting water. It typically has a narrow neck and a cap or lid to prevent spills. A water bottle is a container designed for holding and transporting water. It typically has a narrow neck and a cap or lid to prevent spills. A water bottle is a container designed for holding and transporting water. It typically has a narrow neck and a cap or lid to prevent spills.</p>

                    <div className='flex items-center max-w-[600px] gap-5'>
                        <button className='banner-btn  text-[15px] md:font-bold px-9 mt-8'>Contact Us</button>
                        <button className='border border-black rounded-none py-[18px] flex items-center justify-center  text-[15px] md:font-bold px-9 mt-8'>View All</button>

                    </div>


                </div>

            </section>


            {/* collection section  */}
            <section className='grid grid-cols-1 md:grid-cols-2 mt-24 md:mt-36  max-w-[1440px] items-center gap-10 mx-auto px-5 '>

                <div>
                    <h1 className='text-3xl md:text-5xl font-bold max-w-[600px] text-center md:text-start '>On The Go Water Purification with unlimited Collection</h1>
                    <p className='text-lg mt-5 max-w-[580px] font-medium'>A water bottle is a container designed for holding and transporting water. It typically has a narrow neck and a cap or lid to prevent spills. </p>

                    <div className='flex items-center max-w-[600px] gap-5'>
                        <Link to="/shop"><button className='banner-btn  text-[15px] md:font-bold px-9 mt-8'>Shop Now</button></Link>
                        <button className='border border-black rounded-none py-[18px] flex items-center justify-center  text-[15px] md:font-bold px-9 mt-8'>View All</button>
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                    <div className='flex flex-col items-center relative'>
                        <img className='relative z-10 -bottom-48 md:-bottom-32 -mt-24' src="https://i.ibb.co/FXYXvtZ/image-55.png" alt="" />
                        <h1 className='bg-[#EFACE1] relative  rounded-full h-72 md:h-40 w-72 md:w-40'></h1>
                    </div>
                    <div className='flex flex-col items-center relative'>
                        <img className='relative z-10 -bottom-48 md:-bottom-32 -mt-24' src="https://i.ibb.co/TW9Cyk7/image-59.png" alt="" />
                        <h1 className='bg-[#C88888] relative  rounded-full h-72 md:h-40 w-72 md:w-40'></h1>
                    </div>
                    <div className='flex flex-col items-center relative'>
                        <img className='relative z-10 -bottom-48 md:-bottom-32 -mt-24' src="https://i.ibb.co/ThWXZ4F/image-61.png" alt="" />
                        <h1 className='bg-[#7AAEA5] relative  rounded-full h-72 md:h-40 w-72 md:w-40'></h1>
                    </div>
                    <div className='flex flex-col items-center relative'>
                        <img className='relative z-10 -bottom-48 md:-bottom-32 -mt-24' src="https://i.ibb.co/q9tk8CK/image-55-1.png" alt="" />
                        <h1 className='bg-[#774464] relative  rounded-full h-72 md:h-40 w-72 md:w-40'></h1>
                    </div>
                    <div className='flex flex-col items-center relative'>
                        <img className='relative z-10  -bottom-48 md:-bottom-32 -mt-24' src="https://i.ibb.co/9H1cQvj/image-59-1.png" alt="" />
                        <h1 className='bg-[#F5CCCC] relative  rounded-full h-72 md:h-40 w-72 md:w-40'></h1>
                    </div>
                    <div className='flex flex-col items-center relative'>
                        <img className='relative z-10 -bottom-48 md:-bottom-32 -mt-24' src="https://i.ibb.co/wc9QXp8/image-61-1.png" alt="" />
                        <h1 className='bg-[#595959] relative  rounded-full h-72 md:h-40 w-72 md:w-40'></h1>
                    </div>
                </div>
            </section>


            {/* key features section  */}
            <section className=' mt-24 md:mt-36  max-w-[1440px]  items-center gap-10 mx-auto px-5 '>
                <h1 className='text-3xl md:text-5xl font-bold  text-center mb-5 '>Key Features</h1>
                <p className='text-center max-w-[600px] mx-auto'>A water bottle is a container designed for holding and transporting water. It typically has a narrow neck and a cap or lid to prevent spills. </p>

                <div className='flex flex-wrap gap-6 justify-center sm:justify-between mt-16'>
                    <div>
                        <img src="https://i.ibb.co/SV3x55n/image-44-2.png" alt="" />
                        <p className='mt-8 text-xl font-bold'>LED Temperature Indicature</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/gFmFLq2/image-44-1.png" alt="" />
                        <p className='mt-8 text-xl font-bold'>LED Temperature Indicature</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/HYRRgZw/image-45.png" alt="" />
                        <p className='mt-8 text-xl font-bold'>LED Temperature Indicature</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/TR6g4R5/image-5.png" alt="" />
                        <p className='mt-8 text-xl font-bold'>LED Temperature Indicature</p>
                    </div>
                </div>
            </section>



            {/* customers section  */}
            <Customers></Customers>



            {/* asked question section  */}
            <Questions></Questions>


            {/* latest update section  */}
            <section className='mt-12 md:mt-36  max-w-[1440px]  items-center gap-10 mx-auto px-5 '>
            <h1 className='title text-3xl md:text-6xl text-center md:text-start mb-4'>Latest Update</h1>
            <div className='flex justify-between items-center'>
                <p>A water bottle is a container designed for holding and transporting water.</p>
                <button className='banner-btn  text-[15px] md:font-bold px-9 '>Contact Us</button>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2'>
            <section className='md:flex mt-12 md:mt-20 max-w-[1440px] items-center gap-8 mx-auto '>
                <div className=''>
                    <img className='md:w-[250px] w-full h-[248px]' src="https://i.ibb.co/5WkFQp3/Rectangle-6112.png" alt="" />
                </div>
                <div>
                    <h1 className='text-2xl md:text-2xl  font-bold max-w-[400px] text-center md:text-start '>A water bottle is a container designed for holding.</h1>
                    <p className='md:text-base mt-5 max-w-[400px] font-medium'>A water bottle is a container designed for holding and transporting water. It typically has a narrow neck and a cap or lid to prevent spills.</p>

                    <div className='flex items-center max-w-[600px] gap-5'>
                        <button className='banner-btn  text-[15px] md:font-bold px-9 mt-4'>View More</button>
                        
                    </div>
                </div>
            </section>
            <section className='md:flex mt-12 md:mt-20 max-w-[1440px] items-center gap-8 mx-auto '>
                <div className=''>
                    <img className='md:w-[250px] w-full h-[248px]' src="https://i.ibb.co/f9MQBfn/Rectangle-6112-1.png" alt="" />
                </div>
                <div>
                    <h1 className='text-2xl md:text-2xl  font-bold max-w-[400px] text-center md:text-start '>A water bottle is a container designed for holding.</h1>
                    <p className='md:text-base mt-5 max-w-[400px] font-medium'>A water bottle is a container designed for holding and transporting water. It typically has a narrow neck and a cap or lid to prevent spills.</p>

                    <div className='flex items-center max-w-[600px] gap-5'>
                        <button className='banner-btn  text-[15px] md:font-bold px-9 mt-4'>View More</button>
                        
                    </div>
                </div>
            </section>
            
            </div>
            </section>
            


            {/* newsletter section  */}
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;

