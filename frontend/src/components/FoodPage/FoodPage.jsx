    import React from 'react'
    import './FoodPage.css'
    import Navbar from '../AdminPanel/Navbar/Navbar'
    import {useState,useEffect} from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

const FoodPage = () => {
        const [foods,setFoods] = useState([]);
        const [searchTerm,setSearchTerm]=useState("");
        const [filteredFoods,setFilteredFoods]= useState([]);

        useEffect(()=>{
            fetch('http://localhost:3000/')
        .then(res=>res.json())
        .then(data=>{
            setFoods(data);
           setFilteredFoods(data);
        })
        .catch(err=>console.log(err))
        
        },[])
        const handleSearch = ()=>{
            if(searchTerm.trim()===""){
                setFilteredFoods(foods);

            }
            else{
                const result = foods.filter(item=>
                    item.name.toLowerCase() === searchTerm.toLowerCase()

                )
                setFilteredFoods(result);
            }
        }
        return (
        <div>
            <Navbar>
                <input className='bg-blue-50' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} type="text" style={{paddingLeft:'33px',width:'30vw',height:'36px',border:'1px solid white',borderRadius:'15px'}} placeholder='Search Food Items and Tasty Stuff' />
            <button className='bg-black text-white rounded-3xl font-bold cursor-pointer' onClick={handleSearch} style={{marginLeft:'1%',padding:'1px 6px',boxShadow:'1px 1px 1px black',borderRadius:'50px'}}>ok</button>
              <i style={{marginLeft:'-94%',color:'gray'}} className='fas fa-search'></i>
            </Navbar>
                  
         <div className='boxparent flex flex-wrap gap-3' style={{marginLeft:'4.5%',marginTop:'1%'}}>
           
            {filteredFoods.map((item,index)=>{
                return(
                  <Link to={`/foodCategories/${index}`} key={item._id}>
           <div className='box flex flex-wrap' style={{height:'52vh',width:'22vw',overflow:'hidden',borderRadius:'16px',boxShadow:'1px 1px 1px 2px lightgray'}}>
                <div>
                    
                    <h3 className='font-bold text-black text-2xl' style={{marginLeft:'35%'}}>{item.name}</h3>
                    <img className='' style={{width:'20vw',height:'34vh',marginLeft:'2%'}} src={item.image} alt="" />
                   <div className='content bg-black rounded-1xl h-20 w-69'>
                    <div className='description h-9 bg-black overflow-hidden'>
                    <h3 className='font-bold text-gray-300' style={{fontSize:'10px',marginLeft:'3.3%',padding:'4px 10px'}}>{item.description}</h3>
                   </div>
                    <button className='bg-blue-600 rounded-2xl text-white' style={{marginLeft:'27%',padding:'2px 17px'}}>{item.button}</button>
                    </div>

                </div>

                </div>
                </Link>
                )
                })}
          </div>
                

       <Footer/>
        </div>

    )
    }

    export default FoodPage