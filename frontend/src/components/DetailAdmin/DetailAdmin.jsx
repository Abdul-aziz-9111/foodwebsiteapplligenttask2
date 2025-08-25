import React from 'react'
import './DetailAdmin.css'
import Navbar from '../AdminPanel/Navbar/Navbar'
import Footer from '../Footer/Footer'
import round from '../../assets/round.png'
import { useState } from 'react'
import axios from 'axios'
import vide from '../../assets/vid.mp4'
const DetailAdmin = () => {
  const [name,setName] = useState("");
  const [description,setDescription] = useState("");
  const [image,setImage] = useState("");
  const [image1,setImage1]= useState("");
  const [image2,setImage2]= useState("");
  const [image3,setImage3]= useState("");
  const [variety,setVariety]= useState("");
  const [category,setCategory]= useState("");
  const [price,setPrice]=useState("");
  const [button,setButton]=useState("");
 const handleForm=async(e)=>{
e.preventDefault(); 
const data = {name,description,image,images:[image1,image2,image3],variety,category,price,button};
  await axios.post("http://localhost:3000/datadetails",data)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
  
setName('');
setDescription('');
setImage('');
setImage1('');
setImage2('');
setImage3('');
setVariety('');
setCategory('');
setPrice('');
setButton('');
 }
  return (
    <div>
       <Navbar>
        <input style={{paddingLeft:'15px',height:'37px',width:'30vw',marginTop:'2%',border:'1px solid black',borderRadius:'15px',color:'black'}} placeholder='Search here' type="text" />
        </Navbar> 
       <div className='baap flex' style={{height:'90vh',width:'95vw',marginLeft:'3%'}}>
       
       <div className='left rounded-2xl bg-pink-200' style={{height:'85vh',width:'43vw',marginLeft:'1%',marginTop:'1.2%'}}>
      <form onSubmit={handleForm}>
        <h1 className='font-extrabold font-stretch-150% text-3xl' style={{marginLeft:'23%',marginTop:'0.5%'}}>Detail Admin Panel</h1>
        
        <input type='text' value={name}  style={{paddingLeft:'10px',backgroundColor:'white',marginLeft:'15%',marginTop:'2%',height:'34px',width:'30vw',borderRadius:'10px',border:'none'}}  placeholder='Enter Food name'
        onChange={(e)=>setName(e.target.value)}/>
        <input type='text'  style={{paddingLeft:'10px',backgroundColor:'white',marginLeft:'15%',marginTop:'1%',height:'34px',width:'30vw',borderRadius:'10px',border:'none'}}  placeholder='Enter Food description'
        value={description}
        onChange={(e)=>setDescription(e.target.value)}/>
        
        <input type="url" style={{paddingLeft:'10px',backgroundColor:'white',marginLeft:'15%',marginTop:'6px',height:'34px',width:'30vw',borderRadius:'10px',border:'none'}} placeholder='image' 
        value={image}
        onChange={(e)=>setImage(e.target.value)}/>
        <input type="url" style={{paddingLeft:'10px',backgroundColor:'white',marginLeft:'15%',marginTop:'6px',height:'34px',width:'30vw',borderRadius:'10px',border:'none'}} placeholder='image 1'
        value={image1}
        onChange={(e)=>setImage1(e.target.value)}
         />
        <input type="url"  style={{paddingLeft:'10px',backgroundColor:'white',marginLeft:'15%',marginTop:'6px',height:'34px',width:'30vw',borderRadius:'10px',border:'none'}} placeholder='image 2'
        value={image2}
        onChange={(e)=>setImage2(e.target.value)}
         />
        <input type="url"  style={{paddingLeft:'10px',backgroundColor:'white',marginLeft:'15%',marginTop:'6px',height:'34px',width:'30vw',borderRadius:'10px',border:'none'}} placeholder='image 3' 
        value={image3}
        onChange={(e)=>setImage3(e.target.value)}
        />
        
        {/* Dropdowns */}
        <div className='two flex' style={{marginLeft:'15%',marginTop:'1%'}}>
          <select value={variety} onChange={(e)=>setVariety(e.target.value)} style={{borderRadius:'10px',width:'13vw',height:'30px',backgroundColor:'white'}}>
            <option>Variety</option>
            <option>burger</option>
            <option>pizza</option>
            <option>Chinese</option>
            <option>cake</option>
            <option>snack</option>
            <option>dessert</option>
            <option>main course</option>
            <option>pasta</option>
            <option>sandwich</option>
            <option>Starter</option>
          </select>

          <select value={category} onChange={(e)=>setCategory(e.target.value)} className='' style={{borderRadius:'10px',marginLeft:'2%',width:'16vw',height:'30px',backgroundColor:'white'}}>
            <option>Select category</option>
            <option>veg</option>
            <option>nonveg</option>
            <option>vegan</option>
            <option>jain food</option>
          </select>

        </div>
<input type="number" value={price} onChange={(e)=>setPrice(e.target.value)}  style={{paddingLeft:'10px',backgroundColor:'white',marginLeft:'15%',marginTop:'6px',height:'34px',width:'30vw',borderRadius:'10px',border:'none'}} placeholder='Enter price' />

        {/* Yellow input ab alag line me */}
        <div style={{marginLeft:'15%',marginTop:'1%'}}>
          <input value={button} onChange={(e)=>setButton(e.target.value)} style={{height:'30px',width:'30vw',borderRadius:'10px'}} className='bg-white' type="text" placeholder='Add button' />
        </div>
      
        <button type="submit" className='flex bg-black text-white' style={{borderRadius:'10px',marginLeft:'36%',marginTop:'4%',padding:'3px 16px'}}>Add Details</button>
      </form>
    </div>

    <div className='right' style={{height:'80vh',width:'48vw'}}>
   <video style={{width:'50vw',height:'56vh',marginTop:'4.2%',borderRadius:'10%'}} muted autoPlay infinite src={vide}></video>
      
    </div>

   </div>
   <Footer/>
  </div>
  )
}

export default DetailAdmin
