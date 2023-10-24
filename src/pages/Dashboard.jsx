import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

const Dashboard = () => {
  const location = useLocation()
  return (
    <>
    <Header />
    <span>{location.pathname}</span>
    <Sidebar />
    </>
  )
}

export default Dashboard