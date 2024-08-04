import React from 'react'
import {useEffect,useState} from "react"
const Header= ()=>{

    const [logInfo,setlogInfo]=useState("Login")

    return(
        <div className="header">
            <img className="main-logo" src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"/>
            <ul>
                <li>Know More</li>
                <li>Help</li>
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