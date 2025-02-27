import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logopn.png'
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';



const Navbar = () => {

  const [menu,setMenu]=useState("Sunglasses")
  const {getTotalCartItems}=useContext(ShopContext)
  return (
    <div className='navbar'>
    <div className='navbar-logo'>
      <img src={logo} alt="logo"/>
    </div>
    <ul className="nav-menu">
    <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("Sunglasses")}}><Link style={{textDecoration:'none'}} to ='/Sunglasses'>Sunglasses</Link>{menu==="Sunglasses"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("Spectacles")}}><Link style={{textDecoration:'none'}} to="/Spectacles">Spectacles</Link>{menu==="Spectacles"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("Cleaners")}}><Link style={{textDecoration:'none'}} to="/Cleaners">Cleaners</Link>{menu==="Cleaners"?<hr/>:<></>}</li>
     
    </ul>
    <div className='nav-login-cart'>
    <Link to='/login'><button>LogIn</button></Link>
    <Link to="/cart"> <CiShoppingCart size={45}/></Link>
     <div className='nav-cart-count'>{getTotalCartItems()}</div>
     </div>
    </div>
  )
}

export default Navbar
