import React from 'react'
import { restaurant } from '../utils/constants'
import ResList from './ResList'
import { API_URL } from '../utils/constants'
import {useState ,useEffect} from "react"


const Body =()=>{

    const [restaurantt,setrestaurantt]=useState([])

    const fetchData=async()=>{
        const data= await fetch(API_URL)
        const response=await data.json()
        // console.log(response);
        setrestaurantt(response?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
        // console.log(restaurantt);
    }

    useEffect(()=>{
        fetchData()
    },[])





    return(
        <div className="body">
           <div className="search-section">
            <input type="search"   placeholder="Search here..."/>
            <button onClick={()=>{
              const filtereddat=restaurantt?.filter((res)=>res.info.avgRating >4)
             setrestaurantt(filtereddat)}
            }>Filtre</button>

           </div>
           <div className="resContainer">
{
  restaurantt.map((data,index)=>(
<ResList key={data?.info?.id} resData={data}/>
  ))
}
           </div>
        </div>
    )
}

export default Body