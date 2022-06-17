import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { io } from 'socket.io-client'
import { Mychats } from '../features/chat'
const socket=io.connect("http://localhost:5080")
const Chat = () => {
    const [message,setMessage]=useState('')
    const user="User"
    const dispatch=useDispatch()
    const sendChat=(e)=>{
        e.preventDefault()
        socket.emit("mychat",{message,user});
        setMessage('')
    }
    useEffect(()=>{
        socket.on("chat",(payload)=>{
            dispatch(Mychats(payload))
        })
    })
  return (
    <div className='chat-card'>
     
        <div className='chat-form'>
            <form>
                <input placeholder='message' value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
                <button onClick={sendChat}>Send message</button>
            </form>
        </div>
    </div>
  )
}

export default Chat