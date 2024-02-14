import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBottleWater} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar2 = () => {
  const {user, logOut} = useContext(AuthContext);
// console.log(user);
  const handleLogout = ()=>{
    logOut()
    .then()
    .catch(error=>{
      console.log(error);
    })
  }
    return (
        <div className='relative -mb-20'>
        <div className="navbar  max-w-[1400px] mx-auto ">
<div className="navbar-start">
<div className="dropdown">
  <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
  </div>
  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  shadow bg-base-100 rounded-box w-52">
  <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="/shop">Shop</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <div className='flex gap-6 mt-3'>
<Link to="/myaddedlist"><AiOutlineShoppingCart /></Link>
{user ? <><button className="btn btn-success text-white" onClick={handleLogout}>LogOut</button></> : <button className="btn btn-success text-white"><Link to='/login'>Login</Link></button>}
    </div>
  </ul>
  
</div>
<Link to='/' className="btn btn-ghost ps-0  text-xl text-white"><h1 className='text-3xl w-full'><FontAwesomeIcon icon={faBottleWater} />𝕭𝖔𝖙𝖙𝖑𝖊 𝖀𝖕 </h1></Link>
</div>
<div className="navbar-end hidden lg:flex">
<ul className="menu menu-horizontal font-bold text-white px-1">
<li><Link to="/">Home</Link></li>
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="/shop">Shop</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li><Link to="/contact">Contact</Link></li>
</ul>
</div>
<div className="navbar-end gap-4 text-white text-2xl hidden lg:flex">
<Link to="/myaddedlist"><AiOutlineShoppingCart /></Link>
{user ? <><button className="btn btn-success text-white" onClick={handleLogout}>LogOut</button></> : <button className="btn btn-success text-white"><Link to='/login'>Login</Link></button>}
</div>
</div>
    </div>
    );
};

export default Navbar2;