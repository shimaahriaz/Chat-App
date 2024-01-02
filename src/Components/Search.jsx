import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img src="https://media.istockphoto.com/id/482189340/photo/portrait-of-girl.jpg?s=612x612&w=0&k=20&c=-yarEEKOPTP33MVl8c8FRuTvOt73XNW17WBCLIhweiw=" alt="" />
        <div className="userChatInfo">
          <span>Shimaaaa</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
