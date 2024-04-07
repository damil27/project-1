import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import arrowLeft from "../assets/icon-arrow-left.svg";
import { ThemeContext } from "./context/ThemeContext";
import { useNavigate } from "react-router-dom";
const Details = () => {
  const { id } = useParams();
  const { values, setValues } = useContext(ThemeContext);

  const dataValue = values.find((dt) => dt.id === id);
  const [data, setData] = useState(dataValue);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setValues(values.filter((item) => item.id !== id));
    navigate("/");
  };

  return (
    <div className=" container mx-auto h-screen w-full md:w-[60%] ">
      <div className="pt-20" />
      <div className=" flex flex-col gap-4 justify-center items-center ">
        {/* section one start here  */}
        <section>
          <Link to="/">
            <div className="flex justify-center items-center gap-3">
              <img src={arrowLeft} alt="" />
              <h3 className="text-white text-2xl">Back</h3>
            </div>
          </Link>
        </section>
        {/* section two start here */}
        <section className="text-white flex justify-between items-center bg-card-bg w-full h-[4.5rem] px-3 round">
          {/* div one here  */}
          <div className="flex justify-center items-center gap-3">
            <p className="hidden md:inline-block">Status</p>
            <div className="bg-[#33d6a041] px-5 py-3 flex justify-center items-center gap-3 rounded-md ">
              <div className=" bg-green-500 h-4 w-4 rounded-full " />
              <p>{data.status}</p>
            </div>
          </div>
          {/* div two here */}
          <div className="flex justify-center items-center gap-3 ">
            <p className=" bg-slate-400 px-3 py-1 rounded-full hidden md:inline-block ">
              Edit
            </p>
            <p
              onClick={() => handleDelete(data.id)}
              className="bg-red-400 px-3 cursor-pointer py-1 rounded-full"
            >
              Delete
            </p>
            <p
              onClick={() =>
                setData((preValue) => ({ ...preValue, status: "Paid" }))
              }
              className="bg-purple-400 px-3 py-1 rounded-full  cursor-pointer "
            >
              Mark as Paid
            </p>
          </div>
        </section>
        {/* section three start here  */}
        <section className=" bg-card-bg w-full flex flex-col items-center py-4 ">
          {/* first div  */}
          <div className="text-white px-4 flex justify-between items-center w-full md:px-16 ">
            <div>
              <p>
                #{" "}
                <span className="text-main-text text-[1.2rem] font-bold">
                  {data.id}
                </span>{" "}
              </p>
              <p className="text-slate-400">{data.clientName}</p>
            </div>

            {/* second div  */}
            <div className="text-end text-slate-400">
              <p>{data.senderAddress.street}</p>
              <p>{data.senderAddress.city} </p>
              <p>{data.senderAddress.postCode} </p>
              <p>{data.senderAddress.country} </p>
            </div>
          </div>
          {/* seond div  */}
          <div className="grid grid-cols-6 mt-16 text-white w-full px-4 md:px-16 ">
            <div className="col-span-3  md:col-span-3 grid grid-rows-5 ">
              <p className=" text-text-access font-light"> invoice Date</p>
              <p className="text-[1.3rem] font-bold  text-main-text">
                {data.createdAt}
              </p>
              <p></p>
              <p className=" text-main-text">payment Due </p>
              <p className=" text-main-text"> {data.paymentDue}</p>
            </div>
            <div className="col-span-3 md:col-span-2  grid-rows-5">
              <p className=" text-text-access font-light"> Bill to </p>
              <p className="text-[1.3rem] font-bold  text-main-text">
                {data.clientName}
              </p>
              <p className=" text-text-access">{data.clientAddress.street}</p>
              <p className=" text-text-access ">{data.clientAddress.city}</p>
              <p className=" text-text-access ">
                {" "}
                {data.clientAddress.postCode}
              </p>
              <p className=" text-text-access ">
                {" "}
                {data.clientAddress.country}
              </p>
            </div>

            <div className="col-span-2  grid-rows-5">
              <p className=" text-text-access font-light"> Sent to </p>
              <p className="text-[1.3rem]  text-main-text font-bold">
                {" "}
                {data.clientEmail}
              </p>
            </div>
          </div>

          {/* third div  */}
          <div className=" w-full mt-16 mb-20 px-2 md:px-16 ">
            <div className="grid bg-nav-bg  py-16 px-3  text-white">
              {data.items.map((item, index) => (
                <div
                  key={index}
                  className=" grid mb-6 justify-items-center grid-cols-4 "
                >
                  <div>
                    <h2>Service</h2>
                    <p>{item.name}</p>
                  </div>
                  <div>
                    <h2>Qty</h2>
                    <p>{item.quantity}</p>
                  </div>
                  <div>
                    <h2>Unit Price</h2>
                    <p>{item.price}</p>
                  </div>
                  <div>
                    <h2>subTotal</h2>
                    <p>{item.total}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-total-bg h-[4.5rem] px-3 flex justify-between items-center text-white">
              <p className="text-2xl text-white font-bold">Amount</p>
              <p className="text-2xl text-white font-bold">$ {data.total}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Details;
