import React from "react"
import { Link } from "react-router-dom"

export default function Login() {


    return (
        <>


            <div className='text-white h-[100vh] flex justify-center items-center content-center bg-cover bg-gradient-to-r from-fuchsia-500 to-cyan-500'>


                <div className=" justify-center content-center bg-slate-800 border border-slate-400 rounded-md p-12 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">

                    <h1 className="text-xl  py-4">Login Page</h1>

                    <div>
                        {/* <input type="email" className=" black w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer" />
                            <label htmlFor="" className=" absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6 " > Your Email </label> */}
                        <input type="email" className=" appearance-none py-4 bg-transparent border-b border-teal-500 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Your Email" aria-label="Email" />
                    </div>
                    <div>
                        {/* <input type="password" className="p-5 black w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer" />
                            <label htmlFor="" className=" absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6 " > Your Password </label> */}
                        <input type="password" className="appearance-none py-4 bg-transparent border-b border-teal-500 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Your Password" aria-label="Password" />

                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" name="" id="" />
                            <label className="py-6"htmlFor="Remember Me" > Remember Me </label>
                        </div>
                        <span className="px-4 py-6 text-blue-300">   Forgot Password?</span>
                    </div>
                    <button className="w-full mb-4 text-[18px] mt-6 p-2 rounded-full bg-white text-emerald-800 hover:bg-teal-600 hover:text-white" type="submit">Login</button>
                    <div>
                        <span className="m-8 ">New Here? <Link className="text-blue-300" to='Register'>Create an Account</Link></span>
                    </div>
                </div>


            </div>

        </>

    )


}