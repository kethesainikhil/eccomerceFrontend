import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import {useForm} from "react-hook-form"
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { postUserAsync } from './userSlice'
const SignUp = () => {
    const {
        register,
        handleSubmit,
      } = useForm();     
      const navigate = useNavigate();
      const dispatch =useDispatch();
      const [data,setData] = useState();
      const user = useSelector((state)=>state.user.user)
      useEffect(()=>{
        dispatch(postUserAsync({data}))
        if(user?._id){
            localStorage.setItem("user",JSON.stringify(user))
            setTimeout(()=>{
                navigate("/home")
            },[500])
        }
      },[data,dispatch,user,navigate])
      const submitHandle = (input) =>{
        setData(input)

      }
  return (
    <div>
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div className="px-6 py-4">
        <div className="flex justify-center mx-auto">
            <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" />
        </div>


        <p className="mt-1 text-center text-gray-500 dark:text-gray-400"> create account</p>

        <form onSubmit={handleSubmit(submitHandle)}>
            <div className="w-full mt-4">
                <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" {...register("email")} aria-label="Email Address" />
            </div>

            <div className="w-full mt-4">
                <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" {...register("password")} type="password" placeholder="Password" aria-label="Password" />
            </div>
            <div className="w-full mt-4">
                <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" {...register("confirmPassword")} type="password" placeholder="Password" aria-label="Password" />
            </div>

            <div className="flex items-center justify-between mt-4">

                <button type="submit" className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Sign Up
                </button>
            </div>
        </form>
    </div>

    <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">Already have an account? </span>

        <Link to="/login" className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Login</Link>
    </div>
</div>
    </div>
  )
}

export default SignUp
