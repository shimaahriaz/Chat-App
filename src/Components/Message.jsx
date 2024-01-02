import React from "react";
import img from "../img/cam.png";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src="https://media.istockphoto.com/id/482189340/photo/portrait-of-girl.jpg?s=612x612&w=0&k=20&c=-yarEEKOPTP33MVl8c8FRuTvOt73XNW17WBCLIhweiw=" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Message;
