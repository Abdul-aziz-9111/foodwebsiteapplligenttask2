import React from 'react'
import './Footer.css'
import zomato from '../../assets/zomato.avif'
import ones from '../../assets/one.webp'
import twos from '../../assets/two.webp'

const Footer = () => {
  return (
    <div className='footer h-80 bg-gray-200'>
    <img style={{marginLeft:'18.7%',width:'15vw',height:'6vh',marginTop:'1.5%'}} className='' src={zomato} alt="" />
      <div className='content-container flex gap-10 justify-center' style={{marginTop:'1%'}}>
        <div className='column'>
            <a href='#'><h1  className='font-bold'>ABOUT ZOMATO</h1></a>
            <h3 className='text-sm font-semibold'>Who we are</h3>
            <h3 className='text-sm font-semibold'>Blog</h3>
            <h3 className='text-sm font-semibold'>Work with us</h3>
            <h3 className='text-sm font-semibold'>Inverstor Relation</h3>
            <h3 className='text-sm font-semibold'>Report Froad</h3>
            <h3 className='text-sm font-semibold'>Press Kit</h3>
            <h3 className='text-sm font-semibold'>contact us</h3>
            
        </div>
         <div className='column'>
            <a href='#'><h1  className='font-bold'>ZOMAVERSE</h1></a>
            <h3 className='font-semibold text-sm'>Zomato</h3>
            <h3 className='font-semibold text-sm'>Blinkit</h3>
            <h3 className='font-semibold text-sm'>District</h3>
            <h3 className='font-semibold text-sm'>Feeding india</h3>
            <h3 className='font-semibold text-sm'>Hyperpure</h3>
            <h3 className='font-semibold text-sm'>zomato live</h3>
            <h3 className='font-semibold text-sm'>zomeland</h3>
            <h3 className='font-semibold text-sm'>Weather union</h3>
            
        </div>
         <div className='column'>
            <a href='#'><h1  className='font-bold'>FOR RESTAURANTS</h1></a>
            <h3 className='font-semibold text-sm'>Partner with us</h3>
            <h3 className='font-semibold text-sm'>Apps for you</h3>
            
        </div>
         <div className='column'>
            <a href='#'><h1  className='font-bold'>LEARN MORE</h1></a>
            <h3 className='font-semibold text-sm'>Privacy</h3>
            <h3 className='font-semibold text-sm'>Security</h3>
            <h3 className='font-semibold text-sm'>Terms</h3>
            
        </div>
         <div className='column'>
            <a href='#'><h1 className='font-bold'>SOCIAL LINKS</h1></a>
            <div className='icons flex'>
<i className='fa-brands fa-facebook' style={{fontSize:'23px'}}></i>
<i className='fa-brands fa-instagram' style={{fontSize:'23px'}}></i>
<i className='fa-brands fa-twitter' style={{fontSize:'23px'}}></i>
<i className='fa-brands fa-youtube' style={{fontSize:'23px'}}></i>
<i className='fa-brands fa-linkedin' style={{fontSize:'23px'}}></i>

            </div>
<img src={ones} style={{marginTop:'6%',width:'137px', height:'40px'}} alt="" />
<img src={twos} style={{marginTop:'3%',width:'137px', height:'40px'}} alt="" />


        </div>
    
      </div>
      <hr style={{marginTop:'3%',width:'68vw',marginLeft:'16%'}}/>
          <p style={{fontSize:'13px',width:'60vw',marginLeft:'16%'}}>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2025 © Zomato™ Ltd. All rights reserved.</p>

    </div>
  )
}

export default Footer