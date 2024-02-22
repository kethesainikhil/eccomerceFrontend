import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
export default function Home() {
    const navigate  = useNavigate();
    const selector = useSelector((state)=>state.user);

    console.log(selector)
    const handleClick = (e) =>{
        navigate(`/${e.target.innerText}`)
    }
    return (
        <div className="flex flex-col justify-center mx-auto  items-center px-5">
            <div className="py-10 object-cover transition-transform transform hover:scale-110 ">
                <img width={1000} src="https://macleans.ca/wp-content/uploads/2014/09/MAC36_WOMENS_CLOTHES_POST.jpg" alt="clothing" />
                <div className="absolute inset-0 items-end  flex  justify-center">
                    <button onClick={(e)=>handleClick(e)} className=" relative  bg-white object-cover transition-transform transform hover:scale-110 top-[-50px] text-black px-10 py-2 rounded-lg border-2 hover:bg-black hover:text-white">clothing</button>
                </div>
            </div>
            <div className="sm:flex sm:items-center">
            <div className=" py-10 sm:px-10 object-cover transition-transform transform hover:scale-110 ">
                <img className="max-h-fit"  src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D" alt="shoes" />
                <div className="absolute inset-0 items-end  flex  justify-center">
                    <button onClick={(e)=>handleClick(e)} className=" relative bg-white object-cover transition-transform transform hover:scale-110 top-[-50px] text-black px-10 py-2 rounded-lg border-2 hover:bg-black hover:text-white">shoes</button>
                </div>
            </div>
            <div className="py-10 sm:px-10 object-cover transition-transform transform hover:scale-110 ">
                <img src="https://images.unsplash.com/photo-1601524909162-ae8725290836?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwYW5kJTIwbGFwdG9wfGVufDB8fDB8fHww" alt="electronics" />
                <div className="absolute inset-0 items-end  flex  justify-center">
                    <button onClick={(e)=>handleClick(e)} className=" relative bg-white object-cover transition-transform transform hover:scale-110 top-[-50px] text-black px-10 py-2 rounded-lg border-2 hover:bg-black hover:text-white">electronics</button>
                </div>
            </div>
            </div>
            <div  className="py-10 object-cover transition-transform transform hover:scale-110  ">
                <img width={1000} height={200} src="https://cdn.pixabay.com/photo/2016/06/25/12/48/go-pro-1478810_640.jpg" alt="accessories" />
                <div className="absolute inset-0 items-end  flex  justify-center">
                    <button onClick={(e)=>handleClick(e)}className=" relative bg-white object-cover transition-transform transform hover:scale-110 top-[-50px] text-black px-10 py-2 rounded-lg border-2 hover:bg-black hover:text-white">accessories</button>
                </div>
            </div>
        </div>
    );
}
