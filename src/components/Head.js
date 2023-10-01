import React, { useEffect, useState } from "react";
import hamburger from "../img/hamburger.png";
import logo from "../img/logo.png";
import user from "../img/user-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import search_icon from "../img/search_icon.png"
import { cacheResults } from "../utils/searchSlice";



const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
const [suggestions,setSuggestions]=useState([]);
const [showSuggestions,setShowSuggestions]=useState(false);


const searchCache=useSelector((store)=>store.search);
const dispatch=useDispatch();

  useEffect(() => {
    //API call

    //make an API call after every key press
    // but if difference between 2 API calls is <200ms-decline the API call
    const timer = setTimeout(() => {
    if(searchCache[searchQuery]){
      setSuggestions(searchCache[searchQuery]);
    }else{
      getSearchSuggestions();
    }
  }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    //console.log("API call -" + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    //console.log(json[1]);
    setSuggestions(json[1]);

    //update cache
    dispatch(cacheResults({
      [searchQuery]:json[1],
    }));
  };
  

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col  p-5 shadow-lg ">
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
        <div className="flex">
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text" placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
          />
          
          <button className="border border-gray-600 p-2 rounded-r-full">
          <img alt="search_icon" src={search_icon} className="w-6"/>
          
          </button>
        </div>
        {showSuggestions && (<div className="absolute bg-white py-2 px-5 w-[27rem] shadow-lg rounded-lg">
          <ul>
            {suggestions.map((s)=><li key={s} className="flex hover:bg-gray-200"><img alt="search_icon" src={search_icon} className="w-6"/> {s}</li>)}
            
          


          </ul>
        </div>)}
      </div>
      <div>
        <img className="h-8" alt="user" src={user} />
      </div>
    </div>
  );
};

export default Head;
