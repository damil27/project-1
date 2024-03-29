import React from "react";
import { useParams } from "react-router-dom";
import arrowLeft from "../assets/icon-arrow-left.svg";
const Details = () => {
  const { id } = useParams();
  return (
    <div className=" container mx-auto h-screen text-text-access w-[60%] ">
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
      </div>
    </div>
  );
};

export default Details;
