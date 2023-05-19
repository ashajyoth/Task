import React from 'react'
import { Layout } from '../layout/dashboard/layout'
import { Routes , Route } from 'react-router-dom'
import Login from '../pages/Login'
export default function AppRoute() {
  return (
    
     <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Layout />} />
          <Route path="/*" element={<Login />} />
        </Routes>
  )
}
