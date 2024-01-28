import { useEffect, useState } from 'react';
import './Home.css'
import Card from '../Card/Card';
import { FaCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { IoSunnyOutline } from "react-icons/io5";
import { MdOutlineSevereCold } from "react-icons/md";
import { FaStar } from "react-icons/fa";

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
            <div className='flex px-5 md:px-0 flex-col-reverse max-w-[1440px] mt-10 md:mt-20 items-center justify-between mx-auto md:flex-row'>
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
                    <img className='h-[440px] relative md:end-32' src="https://s3-alpha-sig.figma.com/img/b158/e31b/869865cc061ba6a0eabf8e053fadeaec?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T-sLK9OdPOLLdGXkMF7ZL9npKO1k9Ov05Oc8UYePe2ImUVrBHfVNAygeee4d2mkbIWYGAIi4zKWvusnv8MpI-b0cfFf-pzTkqD2lsZslm3JzxvkGhy28Bf2UcupJBpJRgckrQxdSrpzbsMPFzd4yGx0S0MAIxiBVb998-tdFOQS-H-7-5sdYG8FnVkhOP3Ij9fOP6HcFocZ4yUH6xdD6Me0dgicHTBluqSphy7BMPCBD3NCtHI0nx6atnCDoeRy70ELsYT4y5BnyD6sG3wC66OYFyVR7JAgZ-PvzD7UZEiohuobT-JNtlbH5vgmhjeQGSfiOpqUKN2hwoo63mBfAEw__" alt="" />
                </div>
            </div>

            {/* clean section  */}
            <section className='bg-black '>
                <div className='md:flex justify-between items-center max-w-[1440px] px-5 md:px-0 mx-auto text-white py-10'>
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
            <section className='bottles-title max-w-[1440px] mx-auto mt-10 md:mt-28 text-2xl md:text-4xl'>
                <h1>Turn heads with our selection of sleek stainless steel water bottles! Our BPA-free bottles keep drinks cold for hours and feature eye-catching colors and prints</h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 md:px-0 mt-10 md:mt-16 gap-6 items-center justify-center mb-5'>
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
                <div className='grid grid-cols-1 md:grid-cols-2 px-5 md:px-0 gap-10 mt-10 md:mt-20'>
                    <img className='md:w-[400px] lg:w-[571px] h-[571px]' src="https://s3-alpha-sig.figma.com/img/423b/1a7d/196de8517550dd9fe99083315db8f4cb?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mh8F~3YwGr8EWRH1x6BI---rExwn4cDc46~ImHeRadfkCs9OXGzXRoeWjcEAs8gpIb8hwTG0PdZqcX0ZP1pGCXgyhYawDGM1gvCa8LLsZqd6KvLRadt3hVwjd7iTVRWJxKE7HBVAlr5aei5YziT6kunUt9hPN6Eoz3GBHVdLfftri2HJUKfX7d14DoHXFbeFlxOIKj2tGL9zA5Py6cDppDOWrlZMekOKaHTRgHDr-yg14SJtMbVU1qavoy4SvCoU~QL4p8F51d20LtWDsz4t6Ivb9YfyWNw9piYknKeB00uq9rDeKQl6tXd~KVmt-VwQYwa8uzuAVZjNJL2pXGiY8Q__" alt="" />



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

                        <button className=' btn bg-black btn-block rounded-none h-16 hover:bg-slate-900 mt-7 text-xl text-white'>Shop Now</button>
                        <div className='flex mt-5 items-center gap-5'>
                            <img className='rounded-full w-20' src="https://i.ibb.co/vjmgn3L/Screenshot-2024-01-28-172025.png" alt="" />
                            <p className='text-xl'>Try it risk-free for 30 days. If you`re not totally in love with the product, we will refund you 100%.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* carrying section  */}
            <section className='grid grid-cols-1 md:grid-cols-2 mt-12 md:mt-36 max-w-[1440px] items-center gap-10 mx-auto px-5 md:px-0'>
                <div>
                    <h1 className='text-3xl md:text-5xl font-bold max-w-[500px] text-center md:text-start  '>You just need these when you travel for easy carrying.</h1>
                    <p className='text-lg mt-5 max-w-[500px] font-medium'>A water bottle is a container designed for holding and transporting water. It typically has a narrow neck and a cap or lid to prevent spills. </p>
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
                <img className='md:w-[400px] lg:w-[571px] max-h-[571px] ' src="https://s3-alpha-sig.figma.com/img/3a60/0150/7241fc9e7a98aa6253da31d9891baa38?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nvfSObkguNcqDnMir8Z7nbmjJa3gHVdOETFboNXXavl0lbnRZ8y0cpUF7DZOfL78m79DPmJNm7PK-BbleLj5xPqGaLhBZP7GQc9d~faovf-m4PnSKNHfR1PzZEGWPYPNgu32PGwGduQ6N0zI6H7N5VjBgCL9aPm-oSk5Ne7dOnMSnWOKewB001PLOFu1ZZdPOrmokfvR2xBuJjjWw6RI6kUGN~lqdwmvd65U0bBZ4wNeLJJXHej5r2ee6AVjmewL0xTkQsXnXDMLceL2a5BvtCzx3VI4LiqB63lZIPp3BfokONrq669LRKuFdeawtKN6c6L8SlekorfNSgXOyTICVg__" alt="" />
                </div>
            </section>


            {/* happy customer section  */}

            <section className='bg-black py-16 mt-12 md:mt-32'>

                <div className='md:flex items-center justify-center gap-8 px-5 mb-9 md:px-0'>
                    <span className='flex text-yellow-500 text-2xl gap-1 '>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    </span>
                    <h1 className='text-white text-2xl'>15,00+ Happy Customers</h1>
                </div>
                <div className='md:flex justify-between items-center max-w-[1440px] px-5 md:px-0 mx-auto text-white'>
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
            <section className='grid grid-cols-1 md:grid-cols-2 mt-12 md:mt-36 max-w-[1440px] items-center gap-10 mx-auto px-5 md:px-0'>
            <div className=''>
                <img className='md:w-[500px] h-[407px]' src="https://s3-alpha-sig.figma.com/img/48f1/2ab9/01cece86c715bc1adb0ae9a2e78f72f6?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=enkfzlD205UpPpiqFNGob2zYxTjw~IMjgQtAmGIKyZf76Y7SRZhrK9SEoVi6oOK04gt21zadPu5K5nffDDXCIt6We-6sHzFQHFJBfxpWsrnVqh-ZtTU5yTz8NWVIW5yTHZI-6MkJCxu5CNhDAKho6j9W0OmzF960k5M~Hdpt16Xs4KjktNTh4EpRsi2i~DziDA0xHCt2Yr0b8kDZpskXylBFur2~GufH31Uxi8JbEMa6JBUT-kgOI~0ta2NrRDBlhekXIEvY5y56e1ujOTzEKM93I-7WlI7xc1seRLGAtwi3ngeN8fZGKJ1xSLK9Ktb9aI8svDriEph6U0Fiks6lHA__" alt="" />
                </div>
                <div>
                    <h1 className='text-3xl md:text-5xl font-bold max-w-[600px] text-center md:text-start '>If You Need to Customize your product, contact us here.</h1>
                    <p className='text-lg mt-5 max-w-[650px] font-medium'>A water bottle is a container designed for holding and transporting water. It typically has a narrow neck and a cap or lid to prevent spills. A water bottle is a container designed for holding and transporting water. It typically has a narrow neck and a cap or lid to prevent spills.</p>
                    
                    <div className='flex items-center max-w-[600px] gap-5'>
                    <button className='banner-btn  text-[15px] md:font-bold px-9 mt-8'>Contact Us</button>
                    <button className='border border-black rounded-none py-[18px] flex items-center justify-center  text-[15px] md:font-bold px-9 mt-8'>View All</button>
                    
                    </div>


                </div>
                
            </section>


            {/* collection section  */}
            <section className='grid grid-cols-1 md:grid-cols-2 mt-24 md:mt-36  max-w-[1440px] items-center gap-10 mx-auto px-5 md:px-0'>
            
                <div>
                    <h1 className='text-3xl md:text-5xl font-bold max-w-[600px] text-center md:text-start '>On The Go Water Purification with unlimited Collection</h1>
                    <p className='text-lg mt-5 max-w-[500px] font-medium'>A water bottle is a container designed for holding and transporting water. It typically has a narrow neck and a cap or lid to prevent spills. </p>
                    
                    <div className='flex items-center max-w-[600px] gap-5'>
                    <button className='banner-btn  text-[15px] md:font-bold px-9 mt-8'>Shop Now</button>
                    <button className='border border-black rounded-none py-[18px] flex items-center justify-center  text-[15px] md:font-bold px-9 mt-8'>View All</button>
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                <div className='flex flex-col items-center relative'>
                    <img className='relative z-10 -bottom-48 md:-bottom-36 -mt-24' src="https://s3-alpha-sig.figma.com/img/fb55/409d/1839e8a252444ba7ac7f976fea379e53?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KgRpwDr-agJ0dunEXhNzkz~NTaxcg2A2yOA3Mk1aN6WOZD1naW2P5yKcHl7B84JgQy69BApYYYUIPLamjGmG654GBkV3k9FOfjD--lchRngMHljWmIBr1jAdB-McW7hOCIpkKlFHq7TyWPJomKrvMYByEt-nDJm0v7YawV2jJ-sOZnVx-q54swFq-5uebYoeHXUT1f2O28rCVXmJKwHw2KTG4RWnGZCi3FbCgXRKBW3mNm0nzOLOLwBixF1~BP0O1I7S5niN5MU8lRCNNqoKlmTbARVKj8oqn0M28g4PYyvkMREOaekF7rv-2u7LqZR~EksOkKKt~8vD8Zr958FHxg__" alt="" />
                    <h1 className='bg-[#EFACE1] relative  rounded-full h-72 md:h-40 w-72 md:w-40'></h1>
                </div>
                <div className='flex flex-col items-center relative'>
                    <img className='relative z-10 -bottom-48 md:-bottom-36 -mt-24' src="https://s3-alpha-sig.figma.com/img/61f3/66a9/d0281a2fff934a01c9aace58281b3894?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HYj2TQNWnpLg8uAWHzZg~c48-IOlTwMCKRvaeAdTged5qGpmbmBj0udD-so5ahui4yFAcwYxRonrXZv1ZvSEQ0psI3gVtOJg2fTeLjqGBxPh62vROvA0NF46JP7Xt7RwZyKfWCgWqoUkuswJSFpv61JRz61ul4kQWId2z~lAV6WnZV-fbANczTk2l5vYvuoCGWMVEjAn5PUsf30bkgqQEakskpLQ1HpDrelU93bsluNEzqqpcj-EE2dxGPf7cSXu-9-pwXVF~hr2WSkv1vyw5QLcEo0QeOWVYVbIaY-w4xUqzrSXUbpE-UUn3L~9u3RMJhPijjeCZB1zeg45Q8ECtw__" alt="" />
                    <h1 className='bg-[#C88888] relative  rounded-full h-72 md:h-40 w-72 md:w-40'></h1>
                </div>
                <div className='flex flex-col items-center relative'>
                    <img className='relative z-10 -bottom-48 md:-bottom-36 -mt-24' src="https://s3-alpha-sig.figma.com/img/6e40/9aa2/3438a949b9182738db5a1ab75dbf3a0f?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ytk~JPzDxZOXrMEE19Lw7VuiN2QenrgkLFbSNgPyQAu7nTHYCuHMzIwqNad4xHDrHeQpVtk0ltVqbatHr~XQ8zyOIvHiappc-FQ7UjesgxoTtt-RNXrC0TC~yHGcGnvhZH8il6ni8VAKnEJmVUXjNrIM~XktCmTXwo04O3GFHqSX-NeZN00HtnbGp0YQAWHzN--zEo0hR4WOVvaU~MQoxpdAp3TaBmHt8U65kkG2whu-qGSct29PWrs9KwKLKXy5I1IrJ93V5JXzQYqdMzQh0EHzyho6v3Vcfm3kKfj3s1CzroJnywUZCXXg8wOlGzUjMDicq7YsbJRr6dngIGuj3w__" alt="" />
                    <h1 className='bg-[#7AAEA5] relative  rounded-full h-72 md:h-40 w-72 md:w-40'></h1>
                </div>
                <div className='flex flex-col items-center relative'>
                    <img className='relative z-10 -bottom-48 md:-bottom-36 -mt-24' src="https://s3-alpha-sig.figma.com/img/fb55/409d/1839e8a252444ba7ac7f976fea379e53?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KgRpwDr-agJ0dunEXhNzkz~NTaxcg2A2yOA3Mk1aN6WOZD1naW2P5yKcHl7B84JgQy69BApYYYUIPLamjGmG654GBkV3k9FOfjD--lchRngMHljWmIBr1jAdB-McW7hOCIpkKlFHq7TyWPJomKrvMYByEt-nDJm0v7YawV2jJ-sOZnVx-q54swFq-5uebYoeHXUT1f2O28rCVXmJKwHw2KTG4RWnGZCi3FbCgXRKBW3mNm0nzOLOLwBixF1~BP0O1I7S5niN5MU8lRCNNqoKlmTbARVKj8oqn0M28g4PYyvkMREOaekF7rv-2u7LqZR~EksOkKKt~8vD8Zr958FHxg__" alt="" />
                    <h1 className='bg-[#774464] relative  rounded-full h-72 md:h-40 w-72 md:w-40'></h1>
                </div>
                <div className='flex flex-col items-center relative'>
                    <img className='relative z-10  -bottom-48 md:-bottom-36 -mt-24' src="https://s3-alpha-sig.figma.com/img/61f3/66a9/d0281a2fff934a01c9aace58281b3894?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HYj2TQNWnpLg8uAWHzZg~c48-IOlTwMCKRvaeAdTged5qGpmbmBj0udD-so5ahui4yFAcwYxRonrXZv1ZvSEQ0psI3gVtOJg2fTeLjqGBxPh62vROvA0NF46JP7Xt7RwZyKfWCgWqoUkuswJSFpv61JRz61ul4kQWId2z~lAV6WnZV-fbANczTk2l5vYvuoCGWMVEjAn5PUsf30bkgqQEakskpLQ1HpDrelU93bsluNEzqqpcj-EE2dxGPf7cSXu-9-pwXVF~hr2WSkv1vyw5QLcEo0QeOWVYVbIaY-w4xUqzrSXUbpE-UUn3L~9u3RMJhPijjeCZB1zeg45Q8ECtw__" alt="" />
                    <h1 className='bg-[#F5CCCC] relative  rounded-full h-72 md:h-40 w-72 md:w-40'></h1>
                </div>
                <div className='flex flex-col items-center relative'>
                    <img className='relative z-10 -bottom-48 md:-bottom-36 -mt-24' src="https://s3-alpha-sig.figma.com/img/6e40/9aa2/3438a949b9182738db5a1ab75dbf3a0f?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ytk~JPzDxZOXrMEE19Lw7VuiN2QenrgkLFbSNgPyQAu7nTHYCuHMzIwqNad4xHDrHeQpVtk0ltVqbatHr~XQ8zyOIvHiappc-FQ7UjesgxoTtt-RNXrC0TC~yHGcGnvhZH8il6ni8VAKnEJmVUXjNrIM~XktCmTXwo04O3GFHqSX-NeZN00HtnbGp0YQAWHzN--zEo0hR4WOVvaU~MQoxpdAp3TaBmHt8U65kkG2whu-qGSct29PWrs9KwKLKXy5I1IrJ93V5JXzQYqdMzQh0EHzyho6v3Vcfm3kKfj3s1CzroJnywUZCXXg8wOlGzUjMDicq7YsbJRr6dngIGuj3w__" alt="" />
                    <h1 className='bg-[#595959] relative  rounded-full h-72 md:h-40 w-72 md:w-40'></h1>
                </div>
                </div>
            </section>


            {/* key features section  */}
            <section className=' mt-24 md:mt-36  max-w-[1440px]  items-center gap-10 mx-auto px-5 md:px-0'>
                <h1 className='text-3xl md:text-5xl font-bold  text-center mb-5 '>Key Features</h1>
                <p className='text-center max-w-[600px] mx-auto'>A water bottle is a container designed for holding and transporting water. It typically has a narrow neck and a cap or lid to prevent spills. </p>

                <div className='flex flex-wrap gap-6 justify-center sm:justify-between mt-16'>
                    <div>
                        <img src="https://i.ibb.co/SV3x55n/image-44-2.png" alt="" />
                        <p className='mt-4'>LED Temperature Indicature</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/gFmFLq2/image-44-1.png" alt="" />
                        <p className='mt-4'>LED Temperature Indicature</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/HYRRgZw/image-45.png" alt="" />
                        <p className='mt-4'>LED Temperature Indicature</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/TR6g4R5/image-5.png" alt="" />
                        <p className='mt-4'>LED Temperature Indicature</p>
                    </div>
                </div>
            </section>



            {/* customer love section  */}
            <div className='mt-20 md:mt-32 max-w-[1440px] mx-auto'>
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

export default Home;

