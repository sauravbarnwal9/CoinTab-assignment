import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import { User } from '../pages/User'




const AllRoutes = () => {
  return (
    <Routes>
 <Route path="/" element={<HomePage />}></Route>
 <Route path="/users" element={<User />}></Route>
 
    </Routes>
  )
}

export default AllRoutes