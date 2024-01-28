import { useEffect, useState } from 'react';
import './Home.css'
import Card from '../Card/Card';
import { FaCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

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
                        <table className='table w-full '>
                            <tr className='text-2xl h-[65px] border-b-stone-400 border-b font-bold'>
                                <th></th>
                                <th className='border-x-slate-300 border-x-2 bg-black text-white text-center'>We</th>
                                <th className='text-center'>Others</th>
                            </tr>
                            <tr className='text-2xl h-[65px] border-b-stone-400 border-b font-bold'>
                                <td >Unparalleled effectiveness</td>
                                <td className='border-x-slate-300 border-x-2 w-fit text-4xl relative lg:start-4'><FaCheckCircle />
                                </td>
                                <td className='border-x-slate-300  w-fit text-4xl relative lg:start-8'><FaCheckCircle />
                                </td>
                            </tr>
                            <tr className='text-2xl h-[65px] border-b-stone-400 border-b font-bold'>
                                <td>No harsh chemicals</td>
                                <td className='border-x-slate-300 border-x-2 w-fit text-4xl relative lg:start-4'><FaCheckCircle />
                                </td>
                                <td className='border-x-slate-300  w-fit text-4xl relative lg:start-8'><RxCrossCircled />

                                </td>
                            </tr>
                            <tr className='text-2xl h-[65px] border-b-stone-400 border-b font-bold'>
                                <td>Environment friendly</td>
                                <td className='border-x-slate-300 border-x-2 w-fit text-4xl relative lg:start-4'><FaCheckCircle />
                                </td>
                                <td className='border-x-slate-300 w-fit text-4xl relative lg:start-8'><RxCrossCircled />

                                </td>
                            </tr>
                            <tr className='text-2xl h-[65px] border-b-stone-400 border-b font-bold'>
                                <td>High Quality</td>
                                <td className='border-x-slate-300 border-x-2 w-fit text-4xl relative lg:start-4'><FaCheckCircle />
                                </td>
                                <td className='border-x-slate-300  w-fit text-4xl relative lg:start-8'><RxCrossCircled />

                                </td>
                            </tr>
                            <tr className='text-2xl h-[65px]  font-bold'>
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
            <section className='grid grid-cols-1 md:grid-cols-2 mt-36 max-w-[1440px] mx-auto px-5 md:px-0'>
                <div>
                    <h1 className='text-3xl md:text-5xl font-bold max-w-[500px]  mt-16 md:mt-32 '>You just need these when you travel for easy carrying.</h1>
                    <p className='text-lg mt-4 max-w-[600px]'>A water bottle is a container designed for holding and transporting water. It typically has a narrow neck and a cap or lid to prevent spills. </p>



                </div>
                <div className='flex md:justify-end'>
                <img className='md:w-[400px] lg:w-[571px] h-[571px] ' src="https://s3-alpha-sig.figma.com/img/3a60/0150/7241fc9e7a98aa6253da31d9891baa38?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nvfSObkguNcqDnMir8Z7nbmjJa3gHVdOETFboNXXavl0lbnRZ8y0cpUF7DZOfL78m79DPmJNm7PK-BbleLj5xPqGaLhBZP7GQc9d~faovf-m4PnSKNHfR1PzZEGWPYPNgu32PGwGduQ6N0zI6H7N5VjBgCL9aPm-oSk5Ne7dOnMSnWOKewB001PLOFu1ZZdPOrmokfvR2xBuJjjWw6RI6kUGN~lqdwmvd65U0bBZ4wNeLJJXHej5r2ee6AVjmewL0xTkQsXnXDMLceL2a5BvtCzx3VI4LiqB63lZIPp3BfokONrq669LRKuFdeawtKN6c6L8SlekorfNSgXOyTICVg__" alt="" />
                </div>
            </section>
        </div>
    );
};

export default Home;



