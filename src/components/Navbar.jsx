import React from "react";
import logo from "../assets/logo.png";
import avatar from "../assets/image-avatar.jpg";
import sun from "../assets/icon-sun.svg";

const Navbar = () => {
  return (
    <div>
      {/* desktop view  */}
      <div className=" hidden md:block ">
        <div className=" bg-[#373B53] w-[100px] min-h-screen fixed flex flex-col justify-start items-center ">
          <div>
            <img src={logo} alt="logo" />
          </div>

          <div className="absolute bottom-3 flex flex-col justify-center items-center  ">
            <div className="mb-4">
              <img src={sun} alt="" />
            </div>
            <div className="h-[2px] w-full bg-slate-400  mb-4 " />

            <div>
              <img src={avatar} alt="" className="h-[60px] rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* mobile navbar  */}
      <div className="md:hidden w-full">
        <div className=" flex justify-between bg-[#373B53]">
          <div>
            <img src={logo} alt="" className="h-[80px]" />
          </div>
          <div className=" flex justify-center items-center gap-3 h-[80px] mr-4">
            <div>
              <img src={sun} alt="" />
            </div>
            <div className="h-[80px] w-[2px] bg-slate-300" />
            <div>
              <img
                src={avatar}
                alt=""
                className="h-[50px] object-contain rounded-full "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
