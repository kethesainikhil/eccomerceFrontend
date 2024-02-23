import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToCartAsync, getAllCartItemsAsync, incrementQuantity, updateQuantityAsync } from "./CartSlice";

function Cart() {
  let total = 0;
const dispatch = useDispatch()
const string = localStorage.getItem("user")
const user = JSON.parse(string);

const cartItems = useSelector((state)=>state.Cart.cartItems)
const shipping = useRef(0);
  const handleClick = (cartId) =>{
    dispatch(deleteToCartAsync(cartId))
  }
  const handleQuantity = (data) =>{
    data.price = Math.round(data.price)
    if(data.value){
      data.price = data.price / data.quantity
    }
    else{
      data.price = data.price * data.quantity
    }
    console.log(data,"data")
    if(data.quantity === 0){
      dispatch(deleteToCartAsync({cartId:data.cartId}))
    }
    else{
      dispatch(updateQuantityAsync(data))
    }
    
    // const {productId} = productDetails
    // dispatch(incrementQuantity(productId))
  }
  useEffect(()=>{
    if(cartItems?.length > 0){
      shipping.current = 10
    }
    console.log(user._id,"usre in cart")
    dispatch(getAllCartItemsAsync(user._id))
  },[user._id,dispatch,cartItems])
    return (
        <section className="h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
          </div>
      
          <div className="mx-auto mt-8 max-w-2xl md:mt-12">
            <div className="bg-white shadow">
              <div className="px-4 py-6 sm:px-8 sm:py-10">
                <div className="flow-root">
                  <ul className="-my-8">
                    {
                      cartItems?.map((item)=>{
                        total += item.price
                       return(
                        <div key={item._id}> 
                          <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                        <div className="shrink-0">
                          <img className="h-24 w-24 max-w-full rounded-lg object-cover" src={item.image_url} alt="" />
                        </div>
        
                        <div className="relative flex flex-1 flex-col justify-between">
                          <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                            <div className="pr-8 sm:pr-5">
                              <p className="text-base font-semibold text-gray-900">{item.title}</p>
                            </div>
        
                            <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                              <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">${item.price}</p>
        
                              <div className="sm:order-1">
                                <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                  <button  onClick={()=>{handleQuantity({
                                    value:true,
                                cartId:item._id,
                                quantity:item.quantity - 1,
                                price: item.price 
                              })}} className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">-</button>
                                  <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">{item.quantity}</div>
                                  <button onClick={()=>{handleQuantity({
                                    value:false,
                                cartId:item._id,
                                quantity:item.quantity + 1,
                                price: item.price 
                              })}} className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">+</button>
                                </div>
                              </div>
                            </div>
                          </div>
        
                          <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                            <button type="button" onClick={()=>{handleClick(
                              {
                                cartId:item._id
                              }
                            )}} className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" className=""></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </li>
                        </div>
                       )
                      })
                    }
                  </ul>
                </div>
      
                <div className="mt-6 border-t border-b py-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-400">Subtotal</p>
                    <p className="text-lg font-semibold text-gray-900">${total}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-400">Shipping</p>
                    <p className="text-lg font-semibold text-gray-900">${shipping.current}</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-2xl font-semibold text-gray-900"><span className="text-xs font-normal text-gray-400">USD</span> {Math.round( total + shipping.current)}</p>
                </div>
      
                <div className="mt-6 text-center">
                  <button type="button" className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                    Checkout
                    <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Cart;
