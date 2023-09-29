import React, { useEffect, useState } from "react";
import hamburger from "../img/hamburger.png";
import logo from "../img/logo.png";
import user from "../img/user-icon.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    //API call
    console.log(searchQuery);
    //make an API call after every key press
    // but if difference between 2 API calls is <200ms-decline the API call
    const timer=setTimeout(() => 
      getSearchSuggestions()
    , 200);
    return()=>{
      clearTimeout(timer);
    }
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
  };
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col  p-5 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src={hamburger}
        />
        <a href="/">
          <img className="h-8 mx-2" alt="logo" src={logo} />
        </a>
      </div>

      <div className="col-span-10 px-12 ">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="border border-gray-600 p-2 rounded-r-full">
          🔍
        </button>
      </div>
      <div>
        <img className="h-8" alt="user" src={user} />
      </div>
    </div>
  );
};

export default Head;
