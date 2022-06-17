import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import chat from '../features/chat'

const Message = () => {
    const newChat=useSelector((state)=>state.chat.value)
    const[chats,setChats]=useState([])
   useEffect(()=>{
      setChats([...chats,newChat])
   },[newChat])
  return (
    <div>
        {chats.map((item,index)=>{
        return <div key={index}><p><strong>{item.user} :</strong>{item.message}</p></div>
    })}</div>
  )
}

export default Message