import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import Navbar from "../../Shared/Navbar/Navbar";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Review from "./Review";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import Footer from "../../Shared/Footer/Footer";
import Description from "./Description";
import Newsletter from "../../Shared/Newsletter";
import Questions from "../../Shared/Questions";


const Details = () => {
    const { id } = useParams();
    const [bottles, setBottles] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [active, setActive] = useState(false)
    // const [selectReview, setSelectReview] = useState([]);
    const [singleBottle, setSingleBottle] = useState({})
    // console.log(singleBottle?.benefits);
    useEffect(() => {
        fetch('/bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data)
            )
    }, [])


    useEffect(() => {
        const findBottle = bottles?.find(bottle => bottle?.id == id);
        setSingleBottle(findBottle);
    }, [bottles, id])

    // console.log(active);
    const plus = () => {

        let total = quantity + 1;
        setQuantity(total);
    }
    const minus = () => {
        if (quantity == 0) {
            setQuantity(0)
        }
        else {
            let minustotal = quantity - 1;
            setQuantity(minustotal);
        }
    }

   


    return (
        <div>

            <Navbar></Navbar>

            {/* details banner section  */}
            <div className="relative items-center max-w-[1440px] mx-auto justify-center grid grid-cols-1 md:grid-cols-2 gap-8 px-5  mt-16 md:mt-32">
                <div className="">
                    <span className="text-xs bg-white flex items-center rounded px-2 shadow-md relative top-14 p-1 start-3 w-fit shadow-slate-300 font-bold">NEW</span>
                    {singleBottle?.discount && <span className="text-xs bg-green-400 flex items-center text-white rounded px-2 shadow-md relative top-16 p-1 start-3 w-fit shadow-slate-300 font-bold">-{singleBottle?.discount}</span>}
                    <img className=" md:h-[632px] md:w-[550px]" src={singleBottle?.image} alt="" />
                </div>
                <div className="">
                    <span className="flex gap-1 text-xl items-center mt-6 md:mt-0">
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <p className="ms-2"><small>{singleBottle?.reviews?.length} Reviews</small></p>
                    </span>
                    <h1 className="font-semibold text-4xl md:text-6xl mt-4 mb-6">{singleBottle?.name}</h1>
                    <p className="max-w-[600px] mb-4">{singleBottle?.details}</p>
                    <p className="text-3xl font-semibold mb-8">{singleBottle?.price} <span><del className="text-gray-400 text-xl ms-2">$28.00</del></span></p>
                    <p className="font-medium">Offer expires in:</p>
                    <div className="flex gap-5  mt-6 mb-12">
                        <span className="items-center  flex flex-col">
                            <h1 className="text-3xl bg-base-200 p-3 w-fit">02</h1>
                            <small>Days</small>
                        </span>
                        <span className="items-center  flex flex-col">
                            <h1 className="text-3xl bg-base-200 p-3 w-fit">12</h1>
                            <small>Hours</small>
                        </span>
                        <span className="items-center  flex flex-col">
                            <h1 className="text-3xl bg-base-200 p-3 w-fit">47</h1>
                            <small>Minutes</small>
                        </span>
                        <span className="items-center  flex flex-col">
                            <h1 className="text-3xl bg-base-200 p-3 w-fit">28</h1>
                            <small>Seconds</small>
                        </span>
                    </div>

                    <div className="flex items-center gap-5 mb-5">
                        <div className="bg-base-200 flex items-center gap-3 w-fit p-[10px]">
                            <FaMinus onClick={minus}></FaMinus>
                            <p className="font-semibold w-[18px]">{quantity}</p>
                            <FaPlus onClick={plus}></FaPlus>
                        </div>
                        <p className="flex justify-center  w-full gap-2 border border-gray-950 py-2"><IoHeartOutline className="text-xl" /> Wishlist</p>
                    </div>
                    <Link to={`details/${singleBottle?.id}`}><button className=' btn btn-outline btn-block bg-cyan-700 text-white rounded-none hover:bg-cyan-900 text-xl '>Add to Cart</button></Link>

                </div>
            </div>

            {/* option section  */}
            <section className=" max-w-[1440px] mx-auto px-5  mt-16 md:mt-32">
                <Tabs>
                    <TabList>
                        
                        <Tab><p onClick={()=>setActive(!active)} className={`font-bold ${active == true ? "text-black": "text-blue-500"}`}>Description</p></Tab>
                        <Tab><p onClick={()=>setActive(!active)} className={`font-bold ${active == true ? "text-blue-500": "text-black"}`}>Reviews</p></Tab>
                    </TabList>

                    <TabPanel>
                        <Description></Description>
                    </TabPanel>
                    <TabPanel>

                        <h1 className="text-2xl font-medium mt-6 mb-4">Customer Reviews</h1>
                        <span className="flex gap-1 text-md items-center">
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <p className="ms-2"><small>{singleBottle?.reviews?.length} Reviews</small></p>
                    </span>

                    <h1 className="text-4xl font-medium font-sans mt-8">{singleBottle?.reviews?.length} Reviews</h1>
                        {
                           singleBottle && singleBottle?.reviews?.map(review => <Review key={review.id} review={review}></Review>)
                        }
                    </TabPanel>
                </Tabs>
            </section>


            {/* extra card section  */}
            <section className="max-w-[1670px] ps-5 mt-20 md:mt-36 ms-auto">
            <>
            <Swiper
              slidesPerView={3.5}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
                {
                    bottles?.map(bottle => <>
                    <SwiperSlide key={bottle.id}>
                    <div className="text-black p-3 bg-[#EBEEEF]">
                <div className="flex justify-between ">
                    <p className="text-xs bg-white flex items-center rounded px-2 shadow-md shadow-slate-300 font-bold">NEW</p>
                    <p className="text-[16px] bg-white rounded-full shadow-md p-1 shadow-slate-300 ">
                        <IoHeartOutline />
                    </p>
                </div>
                <img className="w-[300px] mx-auto" src={bottle?.image} alt="" /><br />
                <button className=' btn btn-outline btn-block rounded-none hover:bg-cyan-900 text-xs sm:text-lg md:text-xl '>Add To Cart</button>
            </div>
            <span className="text-lg flex text-yellow-500 gap-[2px] mt-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </span>
            <h1 className="text-xl font-bold text-start mt-2">{bottle?.name}</h1>
            <p className="text-start text-lg font-bold">${bottle?.price}</p>
              </SwiperSlide>
                    </>)
                }
            </Swiper>
          </>
            </section>



            {/* asked question section  */}
            <Questions></Questions>

            {/* newsletter section  */}
            <Newsletter></Newsletter>


            <Footer>       </Footer>
        </div>
    );
};

export default Details;