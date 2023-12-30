import React from "react";
import img from '../img/cam.png';

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" value="" />
      </div>
      <div className="userChat">
        <img src={img} alt="" />
        <div className="userChatInfo">
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Search;
