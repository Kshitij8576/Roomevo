import React from "react";
import Navbar from "./Navbar"
import { TbCalendarMonth } from "react-icons/tb";
import Button from "./Button";
import Card from "./Card";

function Section1() {
  return (
    <div className="relative w-full h-screen flex">
        <Navbar/>

      <div className="w-[50%] h-[100%] bg-[#fff] pl-[8em] pt-[8em]">
        <div>
          <h2 className="text-[3.5em] font-semibold leading-none mb-[0.4em]">
            Rent your <br />
            favourite room with <br /> peace of mind.
          </h2>
          <p className="text-[1.25em] leading-tight mb-[2em]">
            A great platform to rent your properties without <br /> any
            commisions.
          </p>
          <div className="flex gap-10">
            <div className="border-l-2 border-[#E0DEF7] pl-[10px]">
              <h3 className="text-[2em] font-semibold text-[#7065F0]">50k+</h3>
              <p className="text-[1em] text-[#6C727F]">renters</p>
            </div>
            <div className="border-l-2 border-[#E0DEF7] pl-[10px]">
              <h3 className="text-[2em] font-semibold text-[#7065F0]">10k+</h3>
              <p className="text-[1em] text-[#6C727F]">properties</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[7%]">
          <div className="w-[2.8em] p-[0.25em] text-[1.125em] text-[#7065F0] font-semibold border-b-2 border-[#7065F0]">Rent</div>
          <div className="w-[42em] rounded-r-lg rounded-bl-lg flex bg-[#fff] px-[2em] py-[1.2em] flex justify-between items-center drop-shadow-2xl">
            <div className="border-r-2 pr-[3em]">
              <p>Location</p>
              <p>Lucknow, UP</p>
            </div>
            <div className="border-r-2 pr-[3em]">
              <p>When</p>
              <p className="flex items-center gap-3">Select Move-in Date <TbCalendarMonth/></p>
            </div>
            <div>
                <Button text="Browse Properties" style="bg-[#7065F0] text-[1em] text-[#fff] px-[1.5em] py-[0.75em]"/>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-[-5] w-[50%] h-[100%] bg-[url('/images/Pasted.png')] bg-cover">
        <Card   style="w-[20em] h-[26em] top-[10%] left-[-3%] scale-[0.8]" name="Beverly Springfield" address="2821 Lake Sevilla, Palm Harbor, TX" bed="2" bath="2" size="6x7.5" cost="10,000" image="bg-[url(/images/pexel1.png)]"/>

        <Card   style="w-[20em] h-[26em] top-[40%] left-[50%] scale-[0.6]" name="Tarpon Bay" address="Palm Harbor, TX" bed="2" bath="1" size="6x8" cost="7,000" image="bg-[url(/images/pexel2.png)]"/>
      </div>
    </div>
  );
}

export default Section1;
