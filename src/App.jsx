import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import NewsContent from './Components/NewsContent'

function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:route/:id' element={<NewsContent/>}/>
   
    </Routes>
    </>
  )
}

export default App