import React from 'react'
import ResList from './ResList'
import { API_URL } from '../utils/constants'
import {useState,useEffect} from 'react'
import Shimmer from './Shimmer'


const Body =()=>{

    const [restaurantt,setrestaurantt]=useState([])
    const [filteredRes,setFilteredRes] = useState([])
const [searchValue,setSearchValue] = useState(null)
    const fetchData=async()=>{
        const data= await fetch(API_URL)
        const response=await data?.json()
        console.log(response);
        setrestaurantt(response?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
        console.log(restaurantt);
        setFilteredRes(response?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)

    }

    useEffect(()=>{
        fetchData()
    },[])

    return restaurantt.length==0?(<Shimmer/>):(
        <div className="body">
           <div className="search-section">
            <input type="search"   placeholder="Search here..." change={searchValue} onChange={(e)=>{
setSearchValue(e.target.value)
            }}/>









           <button className="sameBtn" onClick={
            ()=>{
          const filteredData=restaurantt?.filter((data)=>(data?.info?.name?.toLowerCase()?.includes(searchValue?.toLowerCase())))
//  console.log(filteredData);
setFilteredRes(filteredData)
            }
           }>Search</button>









            <button className="sameBtn" onClick={()=>{
              const filtereddat=restaurantt?.filter((res)=>res?.info?.avgRating >4)
             setFilteredRes(filtereddat)}
            }>Filtre</button>

           </div>
           <div className="resContainer">
{
  filteredRes?.map((data,index)=>(
<ResList key={index} resData={data}/>
  ))
}
           </div>
        </div>
    )
}

export default Body