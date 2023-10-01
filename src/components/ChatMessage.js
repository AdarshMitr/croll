import React from 'react'
import user from "../img/user-icon.png";
const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'> <img className="h-8" alt="user" src={user} />
    <span className='px-2 font-bold'>{name}</span>
    <span>{message}</span>
    </div>
    
  )
}

export default ChatMessage