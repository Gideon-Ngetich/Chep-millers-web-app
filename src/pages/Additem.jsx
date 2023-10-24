import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
// import { useLocation } from 'react-router-dom'

const AddItem = () => {
  // const location = useLocation()
  return (
    <>
    {/* <p>{location.pathname}</p> */}
        <Header />
        <Sidebar/>
    </>
  )
}

export default AddItem