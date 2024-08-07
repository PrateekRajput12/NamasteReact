import React from 'react'
import {useState,useEffect} from 'react'
import { json, Link, useParams } from 'react-router-dom'
// import useFetch from '../hooks/useFetch'
const ResMenu = () => {
const {Id}=useParams()
console.log(Id);
const [menuType,setmenutype]=useState([])
    const [restaurantInfo,setrestaurantInfo]=useState([])

    const fetchData =async()=>{
      const data =await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6542&lng=77.2373&restaurantId=${Id}&catalog_qa=undefined&submitAction=ENTER`)
   const json= await data.json()
   setrestaurantInfo(json?.data?.cards[2]?.card?.card?.info);
   setmenutype(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2])
   console.log(json?.data?.cards[5]);
   console.log(menuType);
    }
    useEffect(()=>{
        fetchData()
    },[])

// const {title,

// }=menuType?.card?.card
   
  return (
    <div className="menu w-[50%] m-auto p-[3rem]">
{/* Top # options */}

      <div className="resMenu-nav text-gray-400 flex  mb-[2rem]">
  <Link to="/"  className="resMenu-nav-Link">      <p>Home /</p></Link>
   <Link to="#"  className="resMenu-nav-Link ">     <p> Delhi /</p></Link>
      <Link to="/restaurants/:resId" className="resMenu-nav-Link ">  <p> ResName</p></Link>
      </div>
 
 {/* Box Show at Top */}


  <div className="resInfo-box  border-black border-2 p-8 rounded-[3rem] flex flex-col gap-[0.7rem] m-[3rem] ">
  <h1 className="text-[2rem] font-bold">{restaurantInfo?.name}</h1>
<p className="font-semibold text-[1rem]"><i className="fa-solid fa-star  text-green-600"></i> {restaurantInfo?.avgRating}({restaurantInfo?.totalRatingsString}) * {restaurantInfo?.costForTwoMessage}</p>
<p className="cuisine-info text-[#ff5200] font-semibold underline"><Link to="#" className="cuisine-info">Chinese</Link>,<Link to="#" className="cuisine-info">{restaurantInfo?.cuisines}</Link></p>
<hr></hr>
<p className="feeDetails font-semibold">{restaurantInfo?.feeDetails?.message}</p>
 </div>

 {/* Different Type Res */}
 <div className="diff-resMenu-type">
  <h1>{menuType?.card?.card?.title}</h1>
{
  menuType?.card?.card?.itemCards?.map((data,index)=>(
<div  key={data?.card?.info?.id}>{data?.card?.info?.name}</div>
  ))
}
 </div>
    </div>
  )
}

export default ResMenu