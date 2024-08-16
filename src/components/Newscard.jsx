import React from "react";
import news from "../assets/news.jpeg";

const Newscard = ({ image, title, description }) => {
  return (
    <div
      className="p-6 shadow-md rounded-xl"
    >
      {/* <div
    className=''
    style={{backgroundImage: `url(${image})` }}
    ></div> */}
      <img src={image} className="rounded-xl" />
      <div className="flex text-[11px] mt-2 ">
        <img src={news} className="rounded-full w-5 h-5 mr-2" />
        <p className="mr-2 md:text-lg">Netflix</p>
        <div className="w-1 h-1 rounded-full bg-black mt-2 mr-12"></div>
        <p className="md:text-lg">12 minutes ago</p>
      </div>

      <a className="text-lg tracking-wide hover:underline md:text-4xl ">
        {title}
      </a>
      <p className="text-sm md:text-2xl ">{description}</p>

      <div className="flex text-[11px]">
        <p className="mr-2 text-orange-600 md:text-lg">Books</p>
        <div className="w-1 h-1 rounded-full bg-black mt-2 mr-12 "></div>
        <p className="md:text-lg">12 min read</p>
      </div>
    </div>
  );
};

export default Newscard;
