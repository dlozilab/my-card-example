import React, { useState } from 'react'
import { FaHeart,FaRegHeart } from "react-icons/fa6";


export default function LikeButton() {

    const [buttonSwitch,setButtonSwitch] = useState(false);

    const toggleHeart = ()=>{
        if(buttonSwitch)
        {
            setButtonSwitch(false)
            console.log("Liked!")
        }
        else
        {
            setButtonSwitch(true)
            console.log("Unliked!")
        }
    }

  return (
    <div onClick={toggleHeart}>{buttonSwitch?<FaHeart color={"red"} size={20}/>:<FaRegHeart  color={"white"} size={20}/>}</div>
  )
}
