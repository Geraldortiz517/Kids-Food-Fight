import { useState } from 'react'
import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'

function App() {

  return (
 <>
 <BrowserRouter>
 <Routes>
 <Route index element={<Home/>} />
    <Route path='/home' element={<Home/>} />
  </Routes>
 </BrowserRouter>
 
 
 </>

  )
}

export default App