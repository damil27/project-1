import React, { useContext, useState } from "react";
import dropdown from "../assets/icon-arrow-down.svg";
import plus from "../assets/icon-plus.svg";
import arrowRight from "../assets/icon-arrow-right.svg";
import { dataInvoice } from "./Data";
import { ThemeContext } from "./context/ThemeContext";
import { Link } from "react-router-dom";
const Invoices = () => {
  console.log(dataInvoice);

  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);
  const [values, setValue] = useState(dataInvoice);
  return (
    <div className=" text-white container mx-auto  md:w-[60%] ">
      <div className="pt-[4rem]" />
      <main>
        <div className="flex justify-between mt-10">
          <div>
            <h1 className="text-[2rem] font-bold text-main-text ">Invoices</h1>
            <p className="text-gray-500 text-[14px]">
              {" "}
              <span className="hidden md:inline-block  ">There are </span>7
              Invoices
            </p>
          </div>
          {/* main second div  */}
          <div className="flex justify-center gap-4 items-center">
            <div className="flex justify-center items-center gap-3">
              <h3 className="">
                {" "}
                Filter <span className="hidden md:inline-block">by Status</span>
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
          {values.map((value) => (
            <section
              key={value.id}
              className="bg-card-bg mb-4 rounded-xl hover:border cursor-pointer hover:border-purple-500 h-[4.5rem] flex flex-col justify-center px-4 "
            >
              <Link to={`/${value.id}`}>
                <article className="flex justify-between items-center ">
                  {/* first major div here  */}
                  <div className="flex justify-center items-center gap-4 ">
                    <p className="text-text-access"># {value.id}</p>
                    <p className="text-text-access">Due {value.paymentDue}</p>
                    <p className="text-main-text"> {value.clientEmail}</p>
                  </div>
                  {/* ssecond major div here  */}
                  <div className="  flex justify-center items-center gap-4 ">
                    <p className="text-2xl font-bold">$</p>

                    <div className="bg-[#33d6a041] px-5 py-3 flex justify-center items-center gap-3 rounded-md ">
                      <div className=" bg-green-500 h-4 w-4 rounded-full " />
                      <p
                        className={
                          value.status === "paid"
                            ? "text-text-paid text-sm"
                            : "text-text-pending text-sm"
                        }
                      >
                        {value.status}
                      </p>
                    </div>
                    <div>
                      <img src={arrowRight} alt="" />
                    </div>
                  </div>
                </article>
              </Link>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Invoices;
