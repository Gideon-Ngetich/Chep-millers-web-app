import React from 'react'
import { useLocation } from 'react-router'

const Additemform = () => {
        
    return (
        <div className="max-w-md mx-auto">
            <form className="bg-white shadow-md rounded p-6 grid grid-cols-2 gap-4">
                <div className="col-span-2">
                    <label className="flex text-gray-700 text-sm font-bold mb-2" htmlFor="itemName">
                        Item Name
                    </label>
                    <input
                        type="text"
                        name="itemName"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-violet-300"
                    />
                </div>
                <div>
                    <label className="flex text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Price
                    </label>
                    <input
                        type="text"
                        name="price"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-violet-300"
                    />
                </div>
                <div>
                    <label className="flex text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
                        Quantity
                    </label>
                    <input
                        type="text"
                        name="quantity"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-violet-300"
                    />
                </div>
                <div>
                    <label className="flex text-gray-700 text-sm font-bold mb-2" htmlFor="brand">
                        Brand
                    </label>
                    <input
                        type="text"
                        name="brand"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-violet-300"
                    />
                </div>
                <div className="col-span-2">
                    <label className="flex text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        name="description"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-violet-300"
                    />
                </div>
                <div className="col-span-2 flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-violet-300"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Additemform