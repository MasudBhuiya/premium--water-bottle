import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import Navbar from "../../Shared/Navbar/Navbar";


const Details = () => {
    const {id} = useParams();
    const [bottles, setBottles] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [singleBottle, setSingleBottle] = useState({})
    console.log(quantity);
    useEffect(() => {
        fetch('/bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])


    useEffect(()=>{
       const findBottle = bottles?.find(bottle => bottle?.id == id);
       setSingleBottle(findBottle);
    },[bottles, id])

    // console.log(id);
const plus = () =>{
    
    let total = quantity + 1;
    setQuantity(total);
}
const minus = () =>{
    if(quantity == 0){
        setQuantity(0)
    }
    else{
        let minustotal = quantity - 1;
        setQuantity(minustotal);
    }
}

    return (
        <div>
             
            <Navbar></Navbar>
            <div className=" items-center max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-5 md:px-0 mt-16 md:mt-32">
            <div>
            <span className="text-xs bg-white flex items-center rounded px-2 shadow-md relative top-14 p-1 start-3 w-fit shadow-slate-300 font-bold">NEW</span>
            {singleBottle?.discount && <span className="text-xs bg-green-400 flex items-center text-white rounded px-2 shadow-md relative top-16 p-1 start-3 w-fit shadow-slate-300 font-bold">-{singleBottle?.discount}</span>}
                <img className="w-full md:max-w-[550px]" src={singleBottle?.image} alt="" />
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
                <h1 className="font-semibold text-4xl md:text-6xl mt-3 mb-3">{singleBottle?.name}</h1>
                <p className="max-w-[600px] mb-4">{singleBottle?.details}</p>
                <p className="text-3xl font-semibold mb-4">{singleBottle?.price} <span><del className="text-gray-400 text-xl ms-2">$28.00</del></span></p>
                <p className="font-medium">Offer expires in:</p>
                <div className="flex gap-5  mt-3 mb-5">
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
                <div className="flex items-center gap-5 mb-3">
                    <div className="bg-base-200 flex items-center gap-3 w-fit p-[14px]">
                        <FaMinus onClick={minus}></FaMinus>
                        <p className="font-semibold w-[18px]">{quantity}</p>
                        <FaPlus onClick={plus}></FaPlus>
                    </div>
                <p className="flex justify-center  w-full gap-2 border border-gray-950 py-2"><IoHeartOutline className="text-xl"/> Wishlist</p>
                </div>
                <Link to={`details/${singleBottle?.id}`}><button  className=' btn btn-outline btn-block bg-cyan-700 text-white rounded-none hover:bg-cyan-900 text-xl '>Add to Cart</button></Link>
                
            </div>
        </div>
        </div>
    );
};

export default Details;