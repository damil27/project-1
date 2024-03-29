import React from "react";
import { useParams } from "react-router-dom";
import arrowLeft from "../assets/icon-arrow-left.svg";
const Details = () => {
  const { id } = useParams();
  return (
    <div className=" container mx-auto h-screen w-[60%] ">
      <div className="pt-20" />
      <div className=" flex flex-col gap-4 justify-center items-center ">
        {/* section one start here  */}
        <section>
          <div className="flex justify-center items-center gap-3">
            <img src={arrowLeft} alt="" />
            <h3 className="text-white text-2xl">Back</h3>
          </div>
        </section>
        {/* section two start here */}
        <section className="text-white flex justify-between items-center bg-card-bg w-full h-[4.5rem] px-3 round">
          {/* div one here  */}
          <div className="flex justify-center items-center gap-3">
            <p>Status</p>
            <p>Paid</p>
          </div>
          {/* div two here */}
          <div className="flex justify-center items-center gap-3 ">
            <p className=" bg-slate-400 px-3 py-1 rounded-full ">Edit</p>
            <p className="bg-red-400 px-3 py-1 rounded-full">Delete</p>
            <p className="bg-purple-400 px-3 py-1 rounded-full">Mark as Paid</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Details;
