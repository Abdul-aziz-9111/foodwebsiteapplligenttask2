import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = ({children}) => {
  const [changeColor, setChangeColor] = useState(false);

  const toggleEffect = () => {
    setChangeColor(!changeColor);
  }

  return (
    <>
      <div className={`navbar h-12 flex items-center justify-between ${changeColor ? "bg-black text-white" : "bg-white"}`}>

        
        {/* Left */}
        <div className='left flex' style={{ marginLeft: '4%' }}>
<Link to='/foodPage'><img 
            className='' 
            style={{ height: '35px', width: '40px' }} 
            src="https://foodies-zone.netlify.app/assets/food-logo-4PF6fRLL.png" 
            alt="" 
           
           />
           </Link>
       
          &nbsp;  
          <h1 className='font-bold text-3xl'>Foodie</h1>
        </div>
        <div className='searchbar'>
        {children}
        </div>


        {/* Right */}
        <div className='right flex gap-8 items-center' style={{ marginRight: '5%' }}>
          <img 
           
           style={{ width: '48px', height: '22.25px' }} 
            src="https://foodies-zone.netlify.app/assets/light-mode-button-X4OXHFfW.png" 
            alt="" 
           onClick={toggleEffect}
          />
          <h3>Home</h3>
          <h3>About</h3>
          <h3>Contact</h3>

          <button
            className="font-normal bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-2xl text-white" 
            style={{ height: '32px', width: '105px' }}
          >
            Order&nbsp;&nbsp;
            <i className="fa fa-shopping-cart" style={{ fontSize: '15px' }}></i>
          </button>
        </div>

      </div>
    </>
  )
}

export default Navbar
