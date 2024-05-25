import React from "react";
import { LuBedSingle } from "react-icons/lu";
import { PiBathtubBold } from "react-icons/pi";
import { MdOutlineMeetingRoom } from "react-icons/md";

function Card({ image, cost, name, address, bed, bath, size, style}) {
  return (
    <div className={`absolute  rounded-[20px]  overflow-hidden bg-[#fff] drop-shadow-2xl ${style}`}>
      <div className={`w-[100%] bg-cover ${image} h-[45%] bg-zinc-300 mb-[2em]`}></div>
      <div className="px-[2em]">
        <h3 className="flex items-center gap-1">
          <span className="text-[1.7em] font-semibold text-[#7065F0]">Rs. {cost} </span><p className="text-[#000929] text-[1em]">/month</p>
        </h3>
        <h3 className="text-[1.7em] font-semibold">{name}</h3>
        <p className="text-[#000929]">{address}</p>
      </div>
      <div className="absolute bottom-[1%] px-[2em] border-t-2 p-[10px] w-[100%] flex items-center gap-7 py-[1em]">
        <p className="flex items-center gap-1">
          <LuBedSingle className="text-[#7065F0]"/> {bed}
        </p>
        <p className="flex items-center gap-1">
          <PiBathtubBold className="text-[#7065F0]"/> {bath}
        </p>
        <p className="flex items-center gap-1">
          <MdOutlineMeetingRoom className="text-[#7065F0]"/> {size} m²
        </p>
      </div>
    </div>
  );
}

export default Card;
