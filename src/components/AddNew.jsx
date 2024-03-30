import React from "react";

const AddNew = () => {
  return (
    <div className="text-white">
      <div className=" fixed top-0 left-[7rem] z-40  inset-0 bg-[#00005b3e] bg-opacity-[50%] flex justify-start items-start  ">
        <div className="bg-main-bg w-[700px] flex flex-col items-center h-screen ">
          <h1 className="font-bold mt-8 text-main-text text-3xl "> Invoice</h1>

          <div className="mt-20">
            <form action="" className="px-8">
              <div className="text-purple-300 font-light">Bill from</div>
              {/* first grid div  */}
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-3 flex flex-col gap-3">
                  <label htmlFor="">Sender Address</label>
                  <input
                    type="text"
                    className="p-2  rounded-md bg-nav-bg focus:outline-purple-300 border-[.3px]"
                  />
                </div>
                <div>
                  <label htmlFor="">city</label>
                  <input
                    type="text"
                    className="p-2  rounded-md bg-nav-bg focus:outline-purple-300 border-[.3px]"
                  />
                </div>
                <div>
                  <label htmlFor="">PostCode</label>
                  <input
                    type="text"
                    className="p-2  rounded-md bg-nav-bg focus:outline-purple-300 border-[.3px]"
                  />
                </div>
                <div>
                  <label htmlFor="">Country</label>
                  <input
                    type="text"
                    className="p-2  rounded-md bg-nav-bg focus:outline-purple-300 border-[.3px]"
                  />
                </div>
              </div>

              {/* second grid div  */}
              <div className="text-purple-300 font-light">Bill from</div>
              <div></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
