import React,{useState} from 'react'
import MenuList from './MenuList';

const Categories = ({inffo,showItems,setshowIndex}) => {
    console.log( inffo);
    // const [showItems,setshowItems]=useState(false)
    const handleClick=()=>{
// setshowItems(true)
// showItems?setshowItems(false):setshowItems(true)
setshowIndex()  }
  return (
   <div>
    <div className="shadow-xl shadow-gray-400 my-10 bg-white p-4">
<div className="flex justify-between items-center m-[1rem] cursor-pointer" onClick={handleClick} >
<span className="font-bold text-[1.8rem]">{inffo?.card?.card?.title}({inffo?.card?.card?.itemCards.length})</span>
<span className="font-bold text-[1.8rem]">⬇️</span>
</div>
{ showItems &&
    inffo?.card?.card?.itemCards?.map((item)=>(
       <MenuList key={item.id} item={item} />
    ))
 
}
    </div>
   </div>
  )
}

export default Categories