import React, { useEffect } from 'react'
import './FoodCategories.css'
import Navbar from '../AdminPanel/Navbar/Navbar'
import Footer from '../Footer/Footer'
import FoodPage from '../FoodPage/FoodPage'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
const FoodCategories = () => {
  const {id} = useParams();
  const [category,setCategory] = useState([]);
  useEffect(()=>{
   fetch('http://localhost:3000/categories')
   .then(res=>res.json())
   .then(data=>{
    setCategory(data[Number(id)]);
    console.log(data);
   }    
    )
   
  },[id])
  return (
    <div>
        <Navbar>
                 <input className='bg-blue-50' type="text" style={{paddingLeft:'33px',width:'30vw',height:'36px',border:'1px solid white',borderRadius:'15px'}} placeholder='Search Food Items and Tasty Stuff' />
              <i style={{marginLeft:'-92%',color:'gray'}} className='fas fa-search'></i>
           
        </Navbar>
<div className="boxcontainer items-container flex flex-wrap gap-4" style={{marginLeft:'2%',marginTop:'1%'}}>
  {category?.items?.map(item => (
    <Link key={item._id} to={`/detailPage/${item._id}`}>
      <div style={{width:'23vw',height:'50vh',boxShadow:'2px 2px 2px 2px lightgray'}} className="food-card rounded-2xl">
        <h3 className='font-bold' style={{marginLeft:'26%'}}>{item.name}</h3>
        <img className='' style={{width:'20vw',height:'34vh',marginLeft:'6%'}} src={item.image} alt={item.name} />
        <div className='content h-7' style={{lineHeight:'1',fontSize:'14px',width:'20vw',marginLeft:'6%',overflow:'hidden'}}>
          <p className='font-semibold' style={{marginLeft:'4%'}}>{item.description}</p>
        </div>
        <button className='bg-black text-white' style={{padding:'2px 17px',marginLeft:'26%',borderRadius:'20px',marginTop:'1%'}}>
          {item.button}
        </button>
      </div>
    </Link>
  ))}
</div>


          <Footer />
    </div>
  )
}

export default FoodCategories