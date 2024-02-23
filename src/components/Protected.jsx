import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Login from '../features/user/Login';
import Home from './Home';

const Protected = ({children}) => {
    const string = localStorage.getItem("user")
const user = JSON.parse(string);
    const navigate = useNavigate();
    console.log(user,"user in protected apge")
    if(user === null){
        navigate("/login")
    }
  return (
    <div>{
        children
        }
        </div>
  )
  
}

export default Protected
