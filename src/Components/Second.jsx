import React from "react";
import Button from "./Button";

function Second() {
  return (
    <div className="h-screen w-full flex">
      <div className="relative h-[100%] w-[55%] py-1">
        <div className="absolute z-[5] px-4 py-6 flex bg-white rounded-md w-[25em] drop-shadow-2xl drop-shadow-[0px_10px_40px_#7165f073] left-[4%] top-[5%]">
            <div className="bg-[#D9D6F5] w-[3em] h-[3em] rounded-full flex justify-center items-center mr-5">
                <img src="/images/Icon.png" alt="" className="scale-[0.8]"/>
            </div>
            <div>
                <h3 className="font-semibold text-[1.25em]">Virtual room tour</h3>
                <p>We provide you with virtual tour</p>
            </div>
        </div>
        <div className="absolute z-[5] px-4 py-6 flex bg-white rounded-md w-[25em] drop-shadow-2xl drop-shadow-[0px_10px_40px_#7165f073] bottom-[9%] right-[-5%]">
            <div className="bg-[#7165f0] w-[3em] h-[3em] rounded-full flex justify-center items-center mr-5">
                <img src="/images/Frame.png" alt="" className="scale-[0.8]"/>
            </div>
            <div>
                <h3 className="font-semibold text-[1.25em]">Find the best deal</h3>
                <p>Browse hundreds of properties</p>
            </div>
        </div>
        <div className='absolute right-[0%] h-[85%] w-[75%] bg-zinc-300 bg-[url("/images/3droom111.jpeg")] bg-cover rounded-md'></div>
      </div>
      <div className="h-[100%] w-[45%] flex items-center justify-center">
        <div className="w-[70%] pb-[5em]">
          <div className="flex items-center gap-5 border-2 border-[#6C727F] py-1 px-1 w-[70%] rounded-lg bg-[#DEDEF7]">
            <h3 className="border-2 border-zinc-300 px-4 py-1 rounded-md font-semibold text-[#7065F0] bg-white">For rentals</h3>
            <h3 className="text-[#6C727F]">For landlords</h3>
          </div>
          <h1 className="font-semibold text-[2.5em] leading-tight my-5">We make it easy for rentals and landlords.</h1>
          <p className="text-[1em] text-[#6C727F] mb-5">Whether it’s renting your current room or getting financing, we make it easy  and efficient. The best <br /> part? You’ll save a bunch of money and time with our services.</p>
          <Button text="See more >" style="bg-[#7065F0] px-5 py-2 text-white text-[1em] rounded-md"/>

        </div>
      </div>
    </div>
  );
}

export default Second;
