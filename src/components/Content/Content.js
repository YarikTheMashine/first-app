import React from "react";
import "./content.css";
import image from "../../assets/Images/love.png";

const Content = () => {
  return (
    <div id="content">
      <div className="col-xs-1 text-center">
        Welcome to the news site. <br />
        Pour a cup of tea, take the cookies <br /> and go watch the news
        together :)
      </div>
      <img src={image} height="388px" width="761px"/>
    </div>
  );
};

export default Content;
