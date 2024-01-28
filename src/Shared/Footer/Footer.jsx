import { faBottleWater } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="bg-black pt-[80px] pb-16 text-white">
            <div className=" max-w-[1440px]  items-center mx-auto px-5 md:px-0">
            <div className="md:flex items-center justify-between mb-[49px]">
            <span className="md:flex items-center gap-8">
            <Link to='/' className="btn btn-ghost ps-0 hover:bg-white text-xl"><h1 className='text-3xl w-full'><FontAwesomeIcon icon={faBottleWater} />𝕭𝖔𝖙𝖙𝖑𝖊 𝖀𝖕 </h1></Link>
                <p>Water Bottle Store</p>
            </span>
            <span>
            <ul className="menu menu-horizontal px-1">
    <li><Link to="/">Home</Link></li>
        <li><Link to="/#shop">Shop</Link></li>
        <li><Link to="/#product">Product</Link></li>
        <li><Link to="/#blog">Blog</Link></li>
        <li><Link to="/#contact">Contact Us</Link></li>
    </ul>
            </span>
            </div>
            <hr />
            <div className="md:flex justify-between mt-4">
                <span className="md:flex gap-10">
                <p>Copyright © 2024 bottleup. All rights reserved</p>
                <p className="font-semibold">Privacy Policy</p>
                <p className="font-semibold">Terms of Use</p>
                </span>
                <span className="flex gap-4 text-2xl">
                    <FaInstagram></FaInstagram>
                    <FaFacebookF></FaFacebookF>
                    <FaYoutube></FaYoutube>
                </span>
            </div>
            </div>
        </div>
    );
};

export default Footer;