import React from 'react'
import { IMG_CDN } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { additems } from '../utils/cartSlice';

const MenuList = ({item,dummy}) => {
const dispatch =useDispatch()
const handleAddItem=()=>{
dispatch(additems(item))
// console.log(item);
}

    
 const{name,price,imageId,description,defaultPrice}=item?.card?.info
  return (
    <div>
        <div className="flex justify-between relative max-h-[20rem] min-h[20rem]  w-[100%] border-b-2  border-t-2 p-8">
         <div>
            <h3 className="font-bold text-[1.7rem]">{name}</h3>
            <h2 className="font-bold text-[1.2rem]">₹ {price?parseInt(price/100):parseInt(defaultPrice/100)}</h2>
            <p className="max-w-[80%] text-[1.1rem] font-semibold text-gray-400">{description}</p>
         </div>
         <div className="relative  h-[100%]">
          { item?.card?.info?.imageId? <button onClick={()=>handleAddItem(item)} className="absolute bg-black text-white font-bold text-[1.7rem] text-center py-2 rounded-lg px-4 left-20 top-52" >Add+</button>:<button  onClick={()=>handleAddItem(item)} className="absolute bg-black text-white font-bold text-[1.7rem] text-center py-2 rounded-lg px-4 -left-[10rem] top-[3rem]" >Add+</button>}
{            item?.card?.info?.imageId?<img className="min-w-[15rem] max-w-[15rem] max-h-[15%] min-h-[15rem] rounded-xl" src={IMG_CDN+imageId}/>:""}
         </div>
        </div>
    </div>
  )
}

export default MenuList