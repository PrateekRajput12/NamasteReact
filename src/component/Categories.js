import React from 'react'
import MenuList from './MenuList';

const Categories = ({inffo}) => {
    console.log( inffo);
  return (
   <div>
    <div className="shadow-xl shadow-gray-400 my-10 bg-white p-4">
<div className="flex justify-between items-center m-[1rem]">
<span className="font-bold text-[1.8rem]">{inffo?.card?.card?.title}({inffo?.card?.card?.itemCards.length})</span>
<span className="font-bold text-[1.8rem]">⬇️</span>
</div>
{
    inffo?.card?.card?.itemCards?.map((item)=>(
       <MenuList key={item.id} item={item} />
    ))
 
}
    </div>
   </div>
  )
}

export default Categories