import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import ChatMessage from "./ChatMessage";
import { generateRandomName } from "../utils/helper";
import { makeRandomMessage } from "../utils/helper";

const LiveChat = () => {

  const [liveMessage,setLiveMessage]=useState("");
  const dispatch = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
     // console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(28),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-full h-[504px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {
            //do not use indexes as keys
            ChatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))
          }
        </div>
      </div>
      <form className="w-full p-2 ml-2 border border-black" 
      onSubmit={(e)=>{
        e.preventDefault();
        console.log('On form submit',liveMessage);
        dispatch(addMessage({
          name:'Adarsh',
          message:liveMessage,
        }));
        setLiveMessage("");
      }}>
        <input className=" px-2 w-72" type="text" value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)} />
        <button className="px-2 mx-2 rounded bg-blue-400">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
