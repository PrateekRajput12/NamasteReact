import React from 'react'
import { GIT_API, IMG_CDN } from '../utils/constants'


class AboutUs extends React.Component{
  constructor(){
    super()
    this.state={
    userInfo:{
      name:"null",
      location:"default",
      bio:"null"
    }
    }

  }



   async componentDidMount(){
    const data = await fetch(GIT_API);
    const json = await data.json();
 
    this.setState({
userInfo:json
    })
    console.log(json);
    
  }


  render(){
    const {name,location,bio,avatar_url}=this.state.userInfo;
    return(
 <div className="AboutUS-section w-[var(--max-width)] m-auto p-[5rem]">

<div> 
<img src={avatar_url}/>
</div>
<div>
   <h2>{name}</h2>
  <h3>{location}</h3>
  <p>{bio}</p></div>
 </div>
    )
  }
}

export default AboutUs