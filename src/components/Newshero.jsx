import React from "react";
import event from "../assets/events.jpeg";

const Newshero = () => {
  return (
    <div>
      <div className="rounded-lg bg-slate-600 m-6 bg-cover"
      style={{ backgroundImage: `url(${event})` }}>
        <div className="object-fill w-[310px] h-[280px] m-6 "
      >
    
        </div>
        <div className="">
          <p className="text-xl tracking-wider text-white text-center">
          Exploring the Rich Tapestry of African Storytelling
          </p>
          <p className="text-[11px] tracking-wider text-white text-center">
            35minutes ago by <b className="text-orange-500">Kwame Writes</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newshero;
