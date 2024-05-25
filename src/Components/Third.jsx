import React from "react";

function Third() {
  return (
    <div className="w-full h-[40em] bg-white p-5 ">
      <div className="w-[100%] h-[100%] bg-[#F7F7FD] border-2 border-[#E0DEF7] rounded-lg flex overflow-hidden">
        <div className="w-[50%] h-[100%] bg-[#F7F7FD] flex items-center justify-center">
          <div className=" scale-[1.1]">
            <h1 className="text-[3.125em] leading-tight font-semibold mb-5">
              The new way to find <br /> your a new room
            </h1>
            <p className="text-[#6C727F] mb-10">
              Find your dream place to live in with <br /> more than 10k+
              properties listed.
            </p>

            <div className="flex gap-7">
              <div>
                <div className="flex items-center justify-center ">
                  <img src="/images/Icon1.png" alt="" className="scale-[0.6]" />
                </div>
                <div className="flex items-center justify-center">
                  <h1 className="text-[1.25em] font-semibold mb-1">7.4%</h1>
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-[#6C727F] text-[0.75em]">Property Return Rate</p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center">
                  <img src="/images/Icon2.png" alt="" className="scale-[0.6]" />
                </div>
                <div className="flex items-center justify-center">
                  <h1 className="text-[1.25em] font-semibold mb-1">3,856</h1>
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-[#6C727F] text-[0.75em]">Property in Sell & Rent</p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center">
                  <img src="/images/Icon3.png" alt="" className="scale-[0.6]" />
                </div>
                <div className="flex items-center justify-center">
                  <h1 className="text-[1.25em] font-semibold mb-1">2,540</h1>
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-[#6C727F] text-[0.75em]">Daily Completed Transactions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] h-[100%] bg-[url(/images/Illustration.png)] bg-cover"></div>
      </div>
    </div>
  );
}

export default Third;
