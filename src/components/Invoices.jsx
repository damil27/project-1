import React from "react";
import dropdown from "../assets/icon-arrow-down.svg";
import plus from "../assets/icon-plus.svg";

const Invoices = () => {
  return (
    <div className=" text-white container mx-auto w-[60%] ">
      <div className="pt-[4rem]" />
      <main>
        <div className="flex justify-between mt-10">
          <div>
            <h1 className="text-[3rem] font-bold">Invoices</h1>
            <p className="text-gray-500 text-[14px]">There are 7 Invoices</p>
          </div>
          {/* main second div  */}
          <div className="flex justify-center gap-4 items-center">
            <div className="flex justify-center items-center gap-3">
              <h3 className="text-2xl"> Filter by Status</h3>
              <div>
                <img src={dropdown} alt="" />
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 bg-[#7C5DFA] px-3 py-2 rounded-3xl">
              <div className=" h-[40px] w-[40px] bg-white flex justify-center p-1 rounded-full ">
                <img src={plus} alt="" className="p-[0.35rem]" />
              </div>
              <h3 className="text-2xl ">New Invoices</h3>
            </div>
          </div>
        </div>

        {/* main content section  */}
       
      </main>
    </div>
  );
};

export default Invoices;
