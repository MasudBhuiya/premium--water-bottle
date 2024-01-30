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


const Details = () => {
    const { id } = useParams();
    const [bottles, setBottles] = useState([]);
    const [quantity, setQuantity] = useState(1);
    // const [selectReview, setSelectReview] = useState([]);
    const [singleBottle, setSingleBottle] = useState({})
    // console.log(selectReview);
    useEffect(() => {
        fetch('/bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])


    useEffect(() => {
        const findBottle = bottles?.find(bottle => bottle?.id == id);
        setSingleBottle(findBottle);
    }, [bottles, id])

    // console.log(id);
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
                        
                        <Tab>Description</Tab>
                        <Tab>Reviews</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
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
                    <SwiperSlide>
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
            <section className=' md:mt-36  max-w-[1440px]  items-center gap-10 mx-auto px-5 '>
                <h1 className='title text-3xl md:text-6xl text-center max-w-[830px] mx-auto'>Frequently Asked Questions</h1>
                <div className="collapse collapse-plus mb-4 bg-base-1000 shadow-sm mt-12 md:mt-20">
                    <input type="radio" name="my-accordion-3" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        Can I customize my box?
                    </div>
                    <div className="collapse-content">
                        <p>Currently, our boxes come with a pre-selected set of items. However, we`re working on offering customizable options soon. Discover the ultimate collection of premium makeup essentials, all encased in one elegant box. Whether you`re a makeup enthusiast or just starting out, our curated Makeup Box is your perfect companion for all occasions.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus mb-4 bg-base-1000 shadow-sm">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Are the products cruelty-free?
                    </div>
                    <div className="collapse-content">
                        <p>Currently, our boxes come with a pre-selected set of items. However, we`re working on offering customizable options soon. Discover the ultimate collection of premium makeup essentials, all encased in one elegant box. Whether you`re a makeup enthusiast or just starting out, our curated Makeup Box is your perfect companion for all occasions.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus mb-4 bg-base-1000 shadow-sm">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        What if I have allergic reactions?
                    </div>
                    <div className="collapse-content">
                        <p>Currently, our boxes come with a pre-selected set of items. However, we`re working on offering customizable options soon. Discover the ultimate collection of premium makeup essentials, all encased in one elegant box. Whether you`re a makeup enthusiast or just starting out, our curated Makeup Box is your perfect companion for all occasions.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus mb-4 bg-base-1000 shadow-sm">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Can I choose my products every month?
                    </div>
                    <div className="collapse-content">
                        <p>Currently, our boxes come with a pre-selected set of items. However, we`re working on offering customizable options soon. Discover the ultimate collection of premium makeup essentials, all encased in one elegant box. Whether you`re a makeup enthusiast or just starting out, our curated Makeup Box is your perfect companion for all occasions.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus mb-4 bg-base-1000 shadow-sm">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        What if I have allergies?
                    </div>
                    <div className="collapse-content">
                        <p>Currently, our boxes come with a pre-selected set of items. However, we`re working on offering customizable options soon. Discover the ultimate collection of premium makeup essentials, all encased in one elegant box. Whether you`re a makeup enthusiast or just starting out, our curated Makeup Box is your perfect companion for all occasions.</p>
                    </div>
                </div>
            </section>

            {/* newsletter section  */}
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

export default Details;