import React from 'react'
import { FaHeart,FaRegHeart } from "react-icons/fa6";


export default function LikeButton() {
    let buttonSwitch = false;
    const toggleHeart = ()=>{
        if(buttonSwitch)
        {
            buttonSwitch=false
            console.log("Liked!")
        }
        else
        {
            buttonSwitch=true
            console.log("Unliked!")
        }
    }

  return (
    <div onClick={toggleHeart}>{buttonSwitch?<FaHeart color={"red"} />:<FaRegHeart  color={"white"} />}</div>
  )
}
