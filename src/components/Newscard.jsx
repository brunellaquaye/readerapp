import React from "react";
import news from "../assets/news.jpeg";

const Newscard = ({ image, title, description }) => {
  return (
    <div
      className="p-6 shadow-md rounded-xl hover:shadow-2xl transition duration-500 ease-in-out"
    >
      {/* <div
    className=''
    style={{backgroundImage: `url(${image})` }}
    ></div> */}
      <img src={image} className="rounded-xl" />
      <div className="flex text-[11px] mt-2 ">
        {/* <img src={news} className="rounded-full w-5 h-5 mr-2" /> */}
        <p className="mr-2 md:text-lg">Info</p>
        <div className="w-1 h-1 rounded-full bg-black mt-2 mr-12"></div>
        <p className="md:text-lg">2 minutes ago</p>
      </div>
        <div className="mb-4">
      <a className="text-lg tracking-wide hover:underline md:text-4xl ">
        {title}
      </a>
      </div>
      <p className="text-sm md:text-2xl ">{description}</p>

      <div className="flex text-[11px]">
        <p className="mr-2 text-orange-600 md:text-lg">Books</p>
        {/* <div className="w-1 h-1 rounded-full bg-black mt-2 mr-12 "></div> */}
      </div>
    </div>
  );
};

export default Newscard;
