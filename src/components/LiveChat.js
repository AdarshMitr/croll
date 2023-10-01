import React from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  return (
    <div className="w-full h-[504px] ml-2 p-2 border border-black bg-slate-100 rounded-lg">
      <ChatMessage name="Adarsh" message="This is an awesome video" />
      <ChatMessage name="Aman" message="I like it" />
      <ChatMessage name="Kundan" message="What?" />
      <ChatMessage name="Sajjan" message="What a content" />
      
    </div>
    
  );
};

export default LiveChat;
