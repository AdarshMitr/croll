import React from "react";
import hamburger from "../img/hamburger.png";
import logo from "../img/logo.png";
import user from "../img/user-icon.png";

const Head = () => {
  return (
    <div className="grid grid-flow-col  p-5 shadow-lg">
      <div className="flex col-span-1">
        <img className="h-8 " alt="menu" src={hamburger} />
        <img className="h-8 mx-2" alt="logo" src={logo} />
      </div>

      <div className="col-span-10 px-12 ">
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" />
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
