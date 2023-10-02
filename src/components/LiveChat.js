import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import ChatMessage from './ChatMessage';
import { generateRandomName } from "../utils/helper";
import { makeRandomMessage } from "../utils/helper";

const LiveChat = () => {

  const dispatch=useDispatch();

  const ChatMessages= useSelector(store=>store.chat.messages);
  useEffect(()=>{
   const i= setInterval(()=>{
//API Polling
console.log("API Polling")
dispatch(
  addMessage({
  name:generateRandomName(),
  message:makeRandomMessage(28),
}));
    },500);
   
return ()=>clearInterval(i);
  },[]) 
  return (
    <div className="w-full h-[504px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {//do not use indexes as keys
      ChatMessages.map((c,i)=>(<ChatMessage
      key={i}
      name={c.name}
      message={c.message} />))
      
      }
    </div>
    
  );
};

export default LiveChat;
