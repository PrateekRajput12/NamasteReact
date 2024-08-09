import React from 'react'
import {useEffect,useState,useContext} from "react"
import { Link } from 'react-router-dom'
import useOnlineStatus from '../hooks/useOnlineStatus'
import UserContext from '../utils/UserContext'
import { useSelector } from 'react-redux'

const Header= ()=>{
const {loggedInUser}=useContext(UserContext)
console.log(useContext);

const cart=useSelector((store)=>store.cart.items)
console.log(cart);

    const [logInfo,setlogInfo]=useState("Login")
const onlineStatus=useOnlineStatus()
    return(
        <div className="header px-[20rem] py-[1.5rem] m-auto flex justify-between items-center border-b-2 ">
          <Link to="/">  <img className="main-logo w-[15rem] " src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"/></Link>
            <ul className="flex gap-[6rem] items-center justify-center ">
            <li className="text-[2rem] ">{onlineStatus?"🟢":"🔴"}</li>
           <Link to="/aboutUs" className="link  text-[1.8rem] hover:font-semibold"><li>About US</li></Link>
           <Link to="/contactUs" className="link  text-[1.8rem]  hover:font-semibold">     <li>Contact Us</li></Link>
           <Link to="/grocery" className="link   text-[1.8rem] hover:font-semibold">     <li>Grocery</li></Link>
                <li className=" text-[1.8rem] hover:font-semibold ">feedBack</li>
                <button className="  hover:font-semibold text-[2rem] font-bold bg-emerald-500 px-[2.5rem] py-[0.8rem] rounded-[3rem] text-white ml-6 "
                onClick={()=>{
                    logInfo==="Login"?setlogInfo("Logout"):setlogInfo("Login")
                }}>{logInfo}</button>
                <li className=" text-[1.8rem] font-bold ">{loggedInUser}</li>
                <Link to="/cart" className="link   text-[1.8rem] hover:font-semibold">     <li>Cart({cart.length})</li></Link>

            </ul>
            
           
        </div>
    )
}

export default Header