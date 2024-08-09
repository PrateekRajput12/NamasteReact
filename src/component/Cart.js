import React from 'react'
import { useSelector } from 'react-redux'
import MenuList from './MenuList'
import { useDispatch } from 'react-redux'
import { clearCart } from '../utils/cartSlice'
const Cart = () => {
    const cartItems=useSelector((store)=>store?.cart?.items)
    const dispatch =useDispatch()
    console.log(cartItems);
    const handleClearCart=()=>{
        dispatch(clearCart())
    }
  return (
    <div>
        <h2 className="text-center text-[3rem] m-4 p-4 font-bold">Cart</h2>
        <button
        onClick={()=>handleClearCart()}
         className="text-[2rem] font-bold text-white bg-black py-4 px-6 self-center">Clear</button>
      <div>
        {cartItems?.map((data)=>(
<MenuList item={data} key={data?.card?.itemCards?.name}/>
        ))
        }
      </div>
    </div>
  )
}

export default Cart