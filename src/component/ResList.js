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
        <div className="resinfo">
            <img src={IMG_CDN+cloudinaryImageId} className="resImg"/>
            <h2>{name}</h2>
            <h3> ⭐{avgRating}</h3>
            <p>{cuisines.join(", ")}</p>
        </div>
    )
}

export default ResList