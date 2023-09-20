import React from "react";
import hamburger from "../img/hamburger.png";
import logo from "../img/logo.png";
import user from "../img/user-icon.png";

const Head = () => {
  return (
    <div className="grid grid-flow-col">
      <div className="flex">
        <img className='h-8' alt="menu" src={hamburger} />
        <img className="h-8" alt="logo" src={logo} />
      </div>

      <div>
        <input type="text" />
        <button>Search</button>
      </div>
      <div>
        <img className="h-8" alt="user" src={user} />
      </div>
    </div>
  );
};

export default Head;
