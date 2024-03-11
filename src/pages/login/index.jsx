
import {Link , form} from "react-router-dom"
import { Input } from "postcss";
import React from "react";

export default function Login() {
    return (
      <>

<div className="item-center justify-center min-h-screen py-20 flex md:bg:block ">
      {/* login container */}

      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl my-5  items-center lg:mx-5">
        {/* form */}

        <div className="w-full px-30 py-3 lg:w-full px-10 md:w-full px-10 ">
          <h2 className="font-bold text-2xl text-blue-800">Login</h2>
          <p className="text-sm mt-4 text-blue-800 ">
            If you already a member, easily login in
          </p>

          <form action="" className="flex flex-col gap-4 w-full">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="text"
              name="email"
              placeholder="Email"
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                placeholder="Password"
              />
            </div>

            <div className="text-xs flex justify-between items-center mt-1">
              <div className="text-xs flex justify-between items-center mt-1">
                <input className="mr-2  w-4 h-4  " type="checkbox" />
                <p className="text-xs flex justify-center items-center">
                  Remember me
                </p>
              </div>
              <p className=" mt-1 text-xs flex justify-end py-1 hover:scale-105 duration-300 underline ">
                <Link to={"/login"}>Forgot password</Link>
              </p>
            </div>

            <button
              className="bg-blue-800 rounded-xl text-white py-2 
            hover:scale-105 duration-300"
            >
              Login
            </button>
          </form>

          <div className="mt-10 grid grid-cols-3 items-center text-gray-500">
            <hr className="border-gray-500"></hr>
            <p className="text-center">OR</p>
            <hr className="border-gray-500"></hr>
          </div>
          <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300">
            <svg
              className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            Login with Google
          </button>

          <div className="text-xs grid grid-cols-2 justify-between items-center mt-3">
            <p>Don't have an account?</p>
            <p className="py-2 px-5 underline hover:scale-105 duration-300 ">
              <Link to={"/register"}>Register here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>

      </>
    )
    
}