
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBottleWater} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
const Navbar = () => {
    return (
        
        <div>
            <div className="navbar max-w-[1400px] mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/page">Page</Link></li>
        <div className='flex gap-6 mt-3'>
        <a className=""><CiUser /></a>
    <a ><AiOutlineShoppingCart /></a>
        </div>
      </ul>
      
    </div>
    <Link to='/' className="btn btn-ghost ps-0 hover:bg-white text-xl"><h1 className='text-3xl w-full'><FontAwesomeIcon icon={faBottleWater} />𝕭𝖔𝖙𝖙𝖑𝖊 𝖀𝖕 </h1></Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/page">Page</Link></li>
    </ul>
  </div>
  <div className="navbar-end gap-4 text-2xl hidden lg:flex">
    <a className=""><CiUser /></a>
    <a ><AiOutlineShoppingCart /></a>
  </div>
</div>
        </div>
    );
};

export default Navbar;