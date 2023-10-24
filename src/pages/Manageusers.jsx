// import React, { useState } from 'react';

// const App = () => {
//     const [isLogin, setIsLogin] = useState(true);


//     const toggleForm = () => {
//         setIsLogin(!isLogin);
//     };

//     // const ManageUser = () => {
//     //     const [user, setUsers] = useState([
//     //         { id: 1, username: 'user1', email: 'user1@example.com' },
//     //         { id: 2, username: 'user2', email: 'user2@example.com' },
//     //         // Add more user data as needed
//     //     ]);
//     // }
//     const removeUser = (userId) => {
//         const updatedUsers = user.filter((user) => user.id !== userId);
//         setUsers(updatedUsers);
//     };

   


//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="bg-white shadow-md rounded w-96">
//                 <div className="flex">
//                     <button
//                         onClick={() => setIsLogin(true)}
//                         className={`w-1/2 py-2 ${isLogin
//                             ? 'bg-blue-500 text-white'
//                             : 'text-blue-500 hover:bg-blue-100'
//                             } focus:outline-none`}
//                     >
//                         Login
//                     </button>
//                     <button
//                         onClick={() => setIsLogin(false)}
//                         className={`w-1/2 py-2 ${!isLogin
//                             ? 'bg-blue-500 text-white'
//                             : 'text-blue-500 hover:bg-blue-100'
//                             } focus:outline-none`}
//                     >
//                         Add User
//                     </button>
//                 </div>

//                 <div className="px-4 py-4">
//                     {isLogin ? (
//                         <form>
//                             <div className="min-h-screen flex items-center justify-center bg-gray-100">
//                                 <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
//                                     <h2 className="text-2xl mb-4 text-center">Manage Users</h2>
//                                     <div className="grid grid-cols-2 gap-4">
//                                         {users.map((user) => (
//                                             <div key={user.id} className="border p-4 rounded">
//                                                 <h3 className="text-xl font-semibold">{user.username}</h3>
//                                                 <p className="text-gray-600">{user.email}</p>
//                                                 <button
//                                                     onClick={() => removeUser(user.id)}
//                                                     className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
//                                                 >
//                                                     Remove
//                                                 </button>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         </form>
//                     ) : (
//                         <form>
//                             <div className="mb-4">
//                                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//                                     Username
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="username"
//                                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 />
//                                 {/* {errors.username && <p className="text-red-500 text-xs italic">{errors.username}</p>} */}
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                                     Email
//                                 </label>
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 />
//                                 {/* {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>} */}
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
//                                     Phone Number
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="phone"
//                                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 />
//                                 {/* {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>} */}
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//                                     Password
//                                 </label>
//                                 <input
//                                     type="password"
//                                     name="password"
//                                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 />
//                                 {/* {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>} */}
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
//                                     Confirm Password
//                                 </label>
//                                 <input
//                                     type="password"
//                                     name="confirmPassword"
//                                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 />
//                                 {/* {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword}</p>} */}
//                             </div>
//                             <div className="mb-4">
//                                 <button
//                                     type="submit"
//                                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                                 >
//                                     Add User
//                                 </button>
//                             </div>
//                             {/* {successMessage && <p className="text-green-500">{successMessage}</p>} */}
//                         </form>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default App;
