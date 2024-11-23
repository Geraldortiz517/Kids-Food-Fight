import { useState } from 'react'
import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Partners from './pages/partners/Partners'
import Pricing from './pages/pricing/Pricing'
import Blog from './pages/blog/Blog'
import Game from './pages/game/Game'

function App() {

  return (
 <>
 <BrowserRouter>
 <Routes>
 <Route index element={<Home/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>}/>
    <Route path='/partners' element={<Partners/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/game' element={<Game/>}/>
  </Routes>
 </BrowserRouter>
 
 
 </>

  )
}

export default App