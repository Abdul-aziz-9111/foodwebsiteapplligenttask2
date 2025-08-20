import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Router,Route,Routes } from 'react-router-dom'
import FoodPage from './components/FoodPage/FoodPage.jsx'
import FoodCategories from './components/FoodCategories/FoodCategories.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter> 
     <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/foodPage' element={<FoodPage/>}/>
      <Route path='/foodCategories/:id' element={<FoodCategories/>}/>
      
     </Routes>
    </BrowserRouter>
  </StrictMode>,
)
