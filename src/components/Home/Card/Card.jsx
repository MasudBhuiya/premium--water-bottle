import { FaStar } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Card = ({ bottle }) => {
    console.log(bottle);
    return (
        <div className="">
            <div className="text-black p-3 bg-[#EBEEEF]">
                <div className="flex justify-between ">
                    <p className="text-xs bg-white flex items-center rounded px-2 shadow-md shadow-slate-300 font-bold">NEW</p>
                    <p className="text-[16px] bg-white rounded-full shadow-md p-1 shadow-slate-300 ">
                        <IoHeartOutline />
                    </p>
                </div>
                <img className="w-[300px] mx-auto" src={bottle?.image} alt="" /><br />
                <Link to={`/shop/details/${bottle.id}`}><button className=' btn btn-outline btn-block rounded-none hover:bg-cyan-900 text-xl '>View Details</button></Link>
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
        </div>
    );
};

export default Card;