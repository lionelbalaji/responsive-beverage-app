import React from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Beveragedetails from '../src/pages/Beveragedetails'
import './css files/App.css'
const App = () => {
  return (
   <HashRouter>
   <Routes>
   <>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/beveragedetails/:id' element={<Beveragedetails/>}/>
    </>
   </Routes>
   </HashRouter>
   
  )
}

export default App