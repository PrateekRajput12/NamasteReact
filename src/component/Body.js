import React from 'react'
import ResList,{WithPromotedLabel} from './ResList'
import { API_URL } from '../utils/constants'
import {useState,useEffect} from 'react'
import Shimmer from './Shimmer'
import {Link} from "react-router-dom";


const Body =()=>{

    const [restaurantt,setrestaurantt]=useState([])
    const [filteredRes,setFilteredRes] = useState([])
const [searchValue,setSearchValue] = useState(null)
    const fetchData=async()=>{
        const data = await fetch(API_URL)
        const response = await data?.json()
     
        setrestaurantt(response?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
  
        setFilteredRes(response?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
console.log(filteredRes);
    }

  const PromotedResList=WithPromotedLabel(ResList)

    useEffect(()=>{
        fetchData()
    },[])

    if(restaurantt?.length===0){
      return <Shimmer/>
    }
    return (
        <div className="body w-[var(--max-width)] m-auto  p-[3.5rem]">
           <div className="search-section m-[3rem] ">
            <input type="search"  className="text-[2rem] rounded-[3rem]  px-[2rem] py-[1.3rem] ml-6"  placeholder="Search here..." change={searchValue} onChange={(e)=>{
setSearchValue(e?.target?.value)
            }}/>

           <button className="sameBtn text-[2rem] font-bold bg-emerald-500 px-[2.5rem] py-[0.8rem] rounded-[3rem] text-white ml-6" onClick={
            ()=>{
          const filteredData=restaurantt?.filter((data)=>(data?.info?.name?.toLowerCase()?.includes(searchValue?.toLowerCase())))
//  console.log(filteredData);
setFilteredRes(filteredData)
            }
           }>Search</button>









            <button className="sameBtn sameBtn text-[2rem] font-bold bg-emerald-500 px-[2.5rem] py-[0.8rem] rounded-[3rem] text-white  ml-6" onClick={()=>{
              const filtereddat=restaurantt?.filter((res)=>res?.info?.avgRating >4)
             setFilteredRes(filtereddat)}
            }>Filtre</button>

           </div>
           <div className="resContainer flex flex-wrap    gap-[6rem]">
{
  filteredRes?.map((data,index)=>(
<Link to={"/restaurant/"+data?.info?.id} className="link" key={data?.info?.id}>
{data?.info?.promoted?<PromotedResList   resData={data}/>:<ResList   resData={data}/>}
</Link>

  ))
}
           </div>
        </div>
    )
}

export default Body