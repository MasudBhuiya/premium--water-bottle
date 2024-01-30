import { FaStar } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const ShopCart = ({bottle}) => {
    // console.log(bottle);
    return (
        <div className="mb-4 flex flex-col md:flex-row justify-between gap-6 items-center">
            <div>
            <span className="text-xs bg-white flex items-center rounded px-2 shadow-md relative top-14 p-1 start-3 w-fit shadow-slate-300 font-bold">NEW</span>
            {bottle.discount && <span className="text-xs bg-green-400 flex items-center text-white rounded px-2 shadow-md relative top-16 p-1 start-3 w-fit shadow-slate-300 font-bold">-{bottle.discount}</span>}
                <img className="w-full md:max-w-[350px]" src={bottle.image} alt="" />
            </div>
            <div className="w-full md:w-2/3">
                <span className="flex gap-1 text-xl mt-6 md:mt-0">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                </span>
                <h1 className="font-bold text-xl mt-4 mb-2">{bottle.name}</h1>
                <p className="text-lg font-semibold mb-4">{bottle.price} <span><del className="text-gray-400 ms-2">$28.00</del></span></p>
                <p className=" mb-4">{bottle.details}</p>
                <Link to={`details/${bottle.id}`}><button  className=' btn btn-outline btn-block bg-cyan-700 text-white rounded-none hover:bg-cyan-900 text-xl '>View Details</button></Link>
                <p className="flex justify-center items-center gap-2 mt-3"><IoHeartOutline className="text-xl"/> Wishlist</p>
            </div>
        </div>
    );
};

export default ShopCart;