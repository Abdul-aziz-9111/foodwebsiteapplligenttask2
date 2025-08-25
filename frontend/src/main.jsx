import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Router,Route,Routes } from 'react-router-dom'
import FoodPage from './components/FoodPage/FoodPage.jsx'
import FoodCategories from './components/FoodCategories/FoodCategories.jsx'
import DetailPage from './components/DetailPage/DetailPage.jsx'
import DetailAdmin from './components/DetailAdmin/DetailAdmin.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter> 
     <Routes>
      <Route path='/' element={<App/>}/>
      
      <Route path='/foodPage' element={<FoodPage/>}/>
      <Route path='/detailAdmin' element={<DetailAdmin/>  } />
      
      <Route path='/foodCategories/:id' element={<FoodCategories/>}/>
<Route path="/detailPage/:id" element={<DetailPage />} />

     </Routes>
    </BrowserRouter>
  </StrictMode>,
)
