import React from 'react'
import './Hero.css'
import { useState } from 'react'
import axios from 'axios'

const Hero = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [button, setButton] = useState('');
    const [category,setCategory] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();


            const response = await axios.post('http://localhost:3000/food', {
                name,
                image,
                description,
                button,
                category
            });
                setName('');
                setImage('');
                setDescription('');
                setButton('');
                setCategory('');
                alert('Food item added successfully!');
            }
    return (
     

    <div>
        <div className='herocontainer flex'>
         <div className='leftone h-96 bg-white w-1/2 justify-center items-center'>
     <h1 id='headingone' 
  className='font-bold' 
  style={{marginTop:'19%', marginLeft:'8%', fontSize:'70px', lineHeight:'1'}}
>
  Welcome to the <br/>
  <span className='text-yellow-300 inline'>Foodie</span> Zone
</h1>

       <h6 className='' style={{fontSize:'15px',marginLeft:'8.5%',marginTop:'1.5%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit Perferendis eligendi et<br/> est inventore. velit similique? Quas enim laudantium beatae est ?</h6>
        <button className='bg-yellow-500 rounded-3xl text-white font-bold' style={{marginLeft:'8.5%',marginTop:'2%',width:'110.27px',height:'34px'}}>Order Now</button>  
        </div>
  <div className='rightbox rounded-2xl bg-yellow-400'
     style={{marginLeft:'5%', width:'40vw', height:'76vh', marginTop:'2%'}}>

        <h1 className='font-bold text-3xl text-black' style={{marginLeft:'30%',marginTop:'5%'}}>ADMIN PANEL</h1>
<form onSubmit={handleSubmit}>
      <div className='content flex flex-col items-center gap-3' style={{marginTop:'4%'}}>

      <input type="text" className='outline-0 w-80 bg-white rounded-xl' placeholder='Enter Food Name Here' style={{height:'8vh',paddingLeft:'10px'}} value={name} onChange={(e)=>setName(e.target.value)}/>

      <input type="url" className='outline-0 w-80 bg-white rounded-xl' placeholder='Enter Food Image url here' style={{height:'8vh',paddingLeft:'10px'}} value={image} onChange={(e)=>setImage(e.target.value)} />
      <input type="text" className='outline-0 w-80 bg-white rounded-xl' placeholder='Enter Food Description here' style={{height:'8vh',paddingLeft:'10px'}} value={description} onChange={(e)=>setDescription(e.target.value)}/>
      <input type="text" className='outline-0 w-80 bg-white rounded-xl' placeholder='Add Button here' style={{height:'8vh',paddingLeft:'10px'}} value={button} onChange={(e)=>setButton(e.target.value)} />
      <input type="text" className='outline-0 w-80 bg-white rounded-xl' placeholder='Add Category' style={{height:'8vh',paddingLeft:'10px'}} value={category} onChange={(e)=>setCategory(e.target.value)}/>
     
      <button type="submit" className='bg-blue-600 text-white font-bold w-28 h-8 cursor-pointer' style={{borderRadius:'26px',marginTop:'1%'}}>ADD DISH</button>
      
      </div>
    
     </form> 
    </div>
      
     
    </div>
    </div>
  )
}

export default Hero