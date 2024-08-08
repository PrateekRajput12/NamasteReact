import React from 'react'
import { IMG_CDN } from '../utils/constants';
const ResList=(props)=>{
    const{resData}=props
    // console.log(resData);
    const {
        cloudinaryImageId,
    cuisines,
    name,
    avgRating
    }=resData?.info
    return(
        <div className="resinfo  w-[25rem] max-h-[25rem]  duration-200 hover:cursor-pointer  rounded-3xl">
            <img src={IMG_CDN+cloudinaryImageId} className="resImg  w-[26rem] h-[18rem]  rounded-3xl"/>
       <div className="m-[0.8rem]">
       <h2 className="text-[2rem] font-bold">{name}</h2>
            <h3 className="text-[1.7rem] font-bold"> ⭐{avgRating}</h3>
            <p className="text-[1.5rem] ">{cuisines.join(", ")}</p>
       </div>
        </div>
    )
}

export const WithPromotedLabel=(ResList)=>{
    return(props)=>{
        return(
            <div >
                <label className="absolute bg-black text-white text-[1.4rem] rounded-lg px-4 py-2">
                    Promoted
                </label>
                <ResList {...props}/>
            </div>
        )
    }
}

export default ResList