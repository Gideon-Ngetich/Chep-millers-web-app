import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaChartLine, FaBox, FaBoxOpen } from 'react-icons/fa'
import Additemform from './Additemform';


const Sidebar = () => {
  return (
    <section className='flex'>
      <section className='flex flex-col w-1/4 p-6 bg-blue-400 h-screen'>
        <div className="search">
          <input
            type="search"
            className="relative m-0 w-full min-w-0 flex rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-black-900 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-gray-400 dark:focus:border-primary"
            id="exampleSearch"
            placeholder="Search" />
        </div>
        <div className="side-content p-6 h-3/4">
          <div className="sidelinks flex flex-col gap-6">
            <div className="link-div flex items-center gap-2">
              <FaChartLine />
              <NavLink to="/dashboard" className="link" activeClassName="bg-white text-blue-400">Dashboard</NavLink>
            </div>
            <div className="link-div flex items-center gap-2">
              <FaBoxOpen />
              <NavLink to="/stock" className="link" activeClassName="bg-white text-blue-400">Add Stock</NavLink>
            </div>
            <div className="link-div flex items-center gap-2">
              <FaBox />
              <NavLink to="/add" className="link" activeClassName="bg-red text-white-900">Add Item</NavLink>
            </div>
            <div className="link-div flex items-center gap-2">
              <FaBox />
              <NavLink to="/manageusers" className="link" activeClassName="bg-red text-white-900">Manage Users</NavLink>
            </div>

            {/* <a href="" className="link"></a>
          <a href="" className="link"></a> */}
          </div>
        </div>
        <div className="icons">
          <h2>icons</h2>
        </div>
      </section>
      <section className='flex flex-col items-center justify-center w-3/4'>
        <div className="flex flex-col justify-centerheader m-10">
          <h2 className='text-xl text-center '>Add New Item</h2>
        </div>
        <Additemform />
      </section>
     
    </section>

  )
}

export default Sidebar