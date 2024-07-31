import React from 'react'
import houseImg from './house.jpg'
import LikeButton from './likeButton'

export default function PropertyCard() {
  const houseImgURL = "../assets/house.jpg"
  return (
    <div style={{backgroundColor:"red", width:"40%",height:"70%",borderRadius:"15px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
        <section style={{width:"100%",height:"40%",borderTopLeftRadius:"15px",borderTopRightRadius:"15px",backgroundImage:`url(${require("../assets/house.jpg")})`}}>
          <LikeButton/>
        </section>
        <section style={{backgroundColor:"blue",width:"100%",height:"30%"}}>1</section>
        <section style={{backgroundColor:"orange",width:"100%",height:"10%"}}>1</section>
        <section style={{backgroundColor:"purple",width:"100%",height:"20%",borderBottomLeftRadius:"15px",borderBottomRightRadius:"15px"}}>1</section>
    </div>
  )
}
