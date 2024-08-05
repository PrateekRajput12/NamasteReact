import React from 'react'
import {useEffect,useState} from "react"
import { Link } from 'react-router-dom'
const Header= ()=>{

    const [logInfo,setlogInfo]=useState("Login")

    return(
        <div className="header">
          <Link to="/">  <img className="main-logo" src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"/></Link>
            <ul>
           <Link to="/aboutUs" className="link"><li>About US</li></Link>
           <Link to="/contactUs" className="link">     <li>Contact Us</li></Link>
                <li>feedBack</li>
                <li>click here</li>
                <button
                onClick={()=>{
                    logInfo==="Login"?setlogInfo("Logout"):setlogInfo("Login")
                }}>{logInfo}</button>
            </ul>
        </div>
    )
}

export default Header