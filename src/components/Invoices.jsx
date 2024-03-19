import React from "react";
import dropdown from "../assets/icon-arrow-down.svg";
import plus from "../assets/icon-plus.svg";
import arrowRight from "../assets/icon-arrow-right.svg";
const Invoices = () => {
  return (
    <div className=" text-white container mx-auto  md:w-[60%] ">
      <div className="pt-[4rem]" />
      <main>
        <div className="flex justify-between mt-10">
          <div>
            <h1 className="text-[2rem] font-bold">Invoices</h1>
            <p className="text-gray-500 text-[14px]">
              {" "}
              <span className="hidden md:block">There are </span>7 Invoices
            </p>
          </div>
          {/* main second div  */}
          <div className="flex justify-center gap-4 items-center">
            <div className="flex justify-center items-center gap-3">
              <h3 className="">
                {" "}
                Filter <span className="hidden md:block">by Status</span>
              </h3>
              <div>
                <img src={dropdown} alt="" />
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 bg-[#7C5DFA] px-3 py-2 rounded-3xl">
              <div className=" h-[40px] w-[40px] bg-white flex justify-center p-1 rounded-full ">
                <img src={plus} alt="" className="p-[0.35rem]" />
              </div>
              <h3 className="md:text-2xl ">
                New <span className="hidden md:inline-block">Invoices</span>
              </h3>
            </div>
          </div>
        </div>

        {/* Invoices content here */}
        <div className="mt-20">
          <section className="bg-[#1E2139] mb-4 rounded-xl hover:border cursor-pointer hover:border-purple-500 h-[4.5rem] flex flex-col justify-center px-4 ">
            <article className="flex justify-between items-center ">
              {/* first major div here  */}
              <div className="flex  md:justify-center md:items-center gap-4 ">
                <p className="text-slate-400 hidden md:block">#</p>
                <div>
                  <p className="text-slate-500">Due 2024-10-3</p>
                  <p className="md:hidden font-bold">$</p>
                </div>
                <p className="hidden md:block">Shun Yun Jin</p>
              </div>
              {/* ssecond major div here  */}
              <div className="  flex  md:justify-center md:items-center md:gap-4 ">
                <p className="text-2xl font-bold hidden md:block">$</p>
                <div>
                  <p className=" md:hidden">Shun Yun Jin</p>
                  <div className="bg-[#1F2C3F] px-5 py-3 flex justify-center items-center gap-3 rounded-md ">
                    <div className=" bg-green-500 h-4 w-4  rounded-full hidden md:block " />

                    <p className="text-green-300 text-sm">pending</p>
                  </div>
                </div>
                <div className="hidden md:block">
                  <img src={arrowRight} alt="" />
                </div>
              </div>
            </article>
          </section>
          <section className="bg-[#1E2139] rounded-xl mb-4 hover:border cursor-pointer hover:border-purple-500 h-[4.5rem] flex flex-col justify-center px-4 ">
            <article className="flex justify-between items-center ">
              {/* first major div here  */}
              <div className="flex justify-center items-center gap-4 ">
                <p className="text-slate-400">#</p>
                <p className="text-slate-500">Due 2024-10-3</p>
                <p>Shun Yun Jin</p>
              </div>
              {/* ssecond major div here  */}
              <div className="  flex justify-center items-center gap-4 ">
                <p className="text-2xl font-bold">$</p>

                <div className="bg-[#1F2C3F] px-5 py-3 flex justify-center items-center gap-3 rounded-md ">
                  <div className=" bg-green-500 h-4 w-4 rounded-full " />
                  <p className="text-green-300 text-sm">pending</p>
                </div>
                <div>
                  <img src={arrowRight} alt="" />
                </div>
              </div>
            </article>
          </section>

          <section className="bg-[#1E2139] mb-4 rounded-xl hover:border cursor-pointer hover:border-purple-500 h-[4.5rem] flex flex-col justify-center px-4 ">
            <article className="flex justify-between items-center ">
              {/* first major div here  */}
              <div className="flex justify-center items-center gap-4 ">
                <p className="text-slate-400">#</p>
                <p className="text-slate-500">Due 2024-10-3</p>
                <p>Shun Yun Jin</p>
              </div>
              {/* ssecond major div here  */}
              <div className="  flex justify-center items-center gap-4 ">
                <p className="text-2xl font-bold">$</p>

                <div className="bg-[#1F2C3F] px-5 py-3 flex justify-center items-center gap-3 rounded-md ">
                  <div className=" bg-green-500 h-4 w-4 rounded-full " />
                  <p className="text-green-300 text-sm">pending</p>
                </div>
                <div>
                  <img src={arrowRight} alt="" />
                </div>
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Invoices;
