import React, { useContext, useEffect, useState } from "react";
import del from "../assets/icon-delete.svg";
import { v4 as uuidv4 } from "uuid";
import { ThemeContext } from "./context/ThemeContext";

const AddNew = ({ setIsOpen }) => {
  const newId = uuidv4().substr(0, 4);

  const { setValues } = useContext(ThemeContext);

  const deliveryPeriod = [
    { text: "next 1 day", value: 1 },
    { text: "next 7 day", value: 7 },
    { text: "next 14 day", value: 14 },
    { text: "next 30 day", value: 30 },
  ];
  const [formData, setFormData] = useState({
    id: newId,
    createdAt: new Date().toISOString().split("T")[0],
    paymentDue: "",
    description: "",
    paymentTerms: 0,
    clientName: "",
    clientEmail: "",
    status: "pending",
    senderAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    clientAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    items: [
      {
        name: "",
        quantity: 0,
        price: 0,
        total: 0,
      },
    ],
    total: 0,
  });

  useEffect(() => {
    const handleOverlayClose = (e) => {
      if (e.target.id === "overlay") {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleOverlayClose);

    return () => {
      window.removeEventListener("click", handleOverlayClose);
    };
  }, []);

  const handleAddItem = () => {
    setFormData((preState) => ({
      ...preState,
      items: [
        ...preState.items,
        {
          name: "",
          quantity: 0,
          price: 0,
          total: 0,
        },
      ],
    }));
  };

  const handleRemoveItem = (index) => {
    setFormData((preState) => ({
      ...preState,
      items: preState.items.filter((item, idx) => idx !== index),
    }));
  };
  // handle function here
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    const [nestedKey, nestedField] = name.split(".");

    if (nestedField) {
      setFormData((prevState) => ({
        ...prevState,
        [nestedKey]: {
          ...prevState[nestedKey],
          [nestedField]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleOnchangeItem = (index, field, value) => {
    setFormData((prevState) => {
      const updateItems = [...prevState.items];
      updateItems[index][field] = value;
      return { ...prevState, items: updateItems };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setValues((prevState) => [formData, ...prevState]);
    setIsOpen(false);
  };
  return (
    <div>
      <div
        id="overlay"
        className=" fixed top-0 md:left-[7rem] inset-0 bg-[#000005be] bg-opacity-[70%] flex justify-start items-start "
      >
        <div className=" bg-main-bg text-main-text w-full md:w-[700px] flex flex-col items-center h-screen">
          <h1 className="text-white text-3xl font-bold mt-8">Invoice</h1>

          <div className="w-full mt-8 overflow-y-scroll ">
            <form action="" className="px-6">
              <h2 className="text-purple-400 font-light "> Bill From</h2>
              {/* first grid section  */}
              <section className="grid grid-cols-3 gap-4">
                <div className="col-span-3 grid ">
                  <label htmlFor="" className="text-gray-400 font-light">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="senderAddress.street"
                    value={formData.senderAddress.street}
                    onChange={handleOnchange}
                    className="p-2 bg-card-bg rounded-md mt-2 focus:outline-purple-400 border-[.1rem] "
                  />
                </div>
                <div className=" col-span-1 flex flex-col gap-1">
                  <label htmlFor="">City</label>
                  <input
                    type="text"
                    name="senderAddress.city"
                    value={formData.senderAddress.city}
                    onChange={handleOnchange}
                    className="p-2 bg-card-bg rounded-md mt-2 focus:outline-purple-400 border-[.1rem] "
                  />
                </div>
                <div className=" col-span-1 flex flex-col gap-1">
                  <label htmlFor="">PostCode</label>
                  <input
                    type="text"
                    name="senderAddress.postCode"
                    value={formData.senderAddress.postCode}
                    onChange={handleOnchange}
                    className="p-2 bg-card-bg rounded-md mt-2 focus:outline-purple-400 border-[.1rem] "
                  />
                </div>
                <div className=" col-span-1 flex flex-col gap-1">
                  <label htmlFor="">Country</label>
                  <input
                    type="text"
                    name="senderAddress.country"
                    value={formData.senderAddress.country}
                    onChange={handleOnchange}
                    className="p-2 bg-card-bg rounded-md mt-2 focus:outline-purple-400 border-[.1rem] "
                  />
                </div>
              </section>

              <h2 className="text-purple-400 mt-8 font-light "> Bill To</h2>
              {/* second grid section  */}
              <section className="grid grid-cols-3 gap-4">
                <div className="col-span-3 grid  ">
                  <label htmlFor="" className="text-gray-400 font-light">
                    Client Name
                  </label>
                  <input
                    type="text"
                    name="clientName"
                    value={formData.clientName}
                    onChange={handleOnchange}
                    className="p-2 bg-card-bg rounded-md mt-2 focus:outline-purple-400   border-[.1rem] "
                  />
                </div>
                <div className="col-span-3 grid ">
                  <label htmlFor="" className="text-gray-400 font-light">
                    Client Email
                  </label>
                  <input
                    type="text"
                    name="clientEmail"
                    value={formData.clientEmail}
                    onChange={handleOnchange}
                    className="p-2 bg-card-bg rounded-md mt-2 focus:outline-purple-400   border-[.1rem] "
                  />
                </div>
                <div className="col-span-3 grid ">
                  <label htmlFor="" className="text-gray-400 font-light">
                    Client Address
                  </label>
                  <input
                    type="text"
                    name="clientAddress.street"
                    value={formData.clientAddress.street}
                    onChange={handleOnchange}
                    className="p-2 bg-card-bg rounded-md mt-2 focus:outline-purple-400   border-[.1rem] "
                  />
                </div>
                <div className=" col-span-1 flex flex-col gap-1">
                  <label htmlFor="">City</label>
                  <input
                    type="text"
                    name="clientAddress.city"
                    value={formData.clientAddress.city}
                    onChange={handleOnchange}
                    className="p-2 bg-card-bg rounded-md mt-2 focus:outline-purple-400   border-[.1rem] "
                  />
                </div>
                <div className=" col-span-1 flex flex-col gap-1">
                  <label htmlFor="">PostCode</label>
                  <input
                    type="text"
                    name="clientAddress.postCode"
                    value={formData.clientAddress.postCode}
                    onChange={handleOnchange}
                    className="p-2 bg-card-bg rounded-md mt-2 focus:outline-purple-400   border-[.1rem] "
                  />
                </div>
                <div className=" col-span-1 flex flex-col gap-1">
                  <label htmlFor="">Country</label>
                  <input
                    type="text"
                    name="clientAddress.country"
                    value={formData.clientAddress.country}
                    onChange={handleOnchange}
                    className="p-2 bg-card-bg rounded-md mt-2 focus:outline-purple-400   border-[.1rem] "
                  />
                </div>
                <div className="col-span-3 ">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="grid gap-2">
                      <label htmlFor="" className="text-gray-400 font-light">
                        Invoice Date
                      </label>
                      <input
                        type="date"
                        name="paymentDue"
                        value={formData.paymentDue}
                        onChange={handleOnchange}
                        className="p-2 bg-card-bg rounded-md mt-2 focus:outline-purple-400   border-[.1rem] "
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="" className="text-gray-400 font-light">
                        Payments Term
                      </label>
                      <select
                        id=""
                        name="paymentTerms"
                        value={formData.paymentTerms}
                        onChange={handleOnchange}
                        className="p-2 bg-card-bg rounded-md mt-2 focus:outline-purple-400   border-[.1rem] "
                      >
                        {deliveryPeriod.map((period, index) => (
                          <option key={index} value={period.value}>
                            {period.text}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-span-3 my-4 grid ">
                    <label htmlFor="" className="text-gray-400 font-light">
                      Description
                    </label>
                    <input
                      type="text"
                      name="description"
                      value={formData.description}
                      onChange={handleOnchange}
                      className="p-2 bg-card-bg rounded-md mt-2 focus:outline-purple-400   border-[.1rem] "
                    />
                  </div>
                  <div className="col-span-3 grid">
                    <h3>Item list</h3>
                    {formData.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-start items-center gap-2 flex-wrap"
                      >
                        <div className=" grid flex-1">
                          <label
                            htmlFor=""
                            className="text-gray-400 font-light"
                          >
                            Item Name
                          </label>
                          <input
                            value={item.name}
                            onChange={(e) =>
                              handleOnchangeItem(index, "name", e.target.value)
                            }
                            type="text"
                            className="p-2 bg-card-bg rounded-md mt-2 focus:outline-purple-400   border-[.1rem] "
                          />
                        </div>
                        <div className=" flex flex-col items-center">
                          <label
                            htmlFor=""
                            className="text-gray-400 font-light"
                          >
                            Qty.
                          </label>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => {
                              handleOnchangeItem(
                                index,
                                "quantity",
                                e.target.value
                              );
                              handleOnchangeItem(
                                index,
                                "total",
                                e.target.value * item.price
                              );
                            }}
                            className="p-2 bg-card-bg w-[80px] rounded-md mt-2 focus:outline-purple-400   border-[.1rem] "
                          />
                        </div>
                        <div className=" flex flex-col items-center">
                          <label
                            htmlFor=""
                            className="text-gray-400 font-light"
                          >
                            Price
                          </label>
                          <input
                            type="number"
                            value={item.price}
                            onChange={(e) =>
                              handleOnchangeItem(index, "price", e.target.value)
                            }
                            className="p-2 bg-card-bg w-[80px] rounded-md mt-2 focus:outline-purple-400   border-[.1rem] "
                          />
                        </div>
                        <div className=" flex flex-col items-center">
                          <label
                            htmlFor=""
                            className="text-gray-400 font-light"
                          >
                            Total
                          </label>
                          <input
                            type="number"
                            disabled
                            value={item.total}
                            className="p-2 bg-card-bg w-[80px] rounded-md mt-2 focus:outline-purple-400   border-[.1rem] "
                          />
                        </div>
                        <div className="flex justify-end items-center cursor-pointer pt-6">
                          <img
                            src={del}
                            alt="deleteicons"
                            className="w-[35px] h-[35px]"
                            onClick={() => handleRemoveItem(index)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-span-3 ">
                  <button
                    type="button"
                    onClick={handleAddItem}
                    className=" mt-4 bg-card-bg text-white  py-2 w-full rounded-md"
                  >
                    {" "}
                    Add Item
                  </button>
                </div>
              </section>
            </form>
          </div>
          <div className="flex justify-center items-center gap-4 mt-6 ">
            <button onClick={()=> setIsOpen(false)} className="mt-4  bg-card-bg  py-2 px-4  rounded-full ">
              Cancel
            </button>
            <button
              type="button"
              onClick={onSubmit}
              className="mt-4  bg-card-bg  py-2 px-4  rounded-full "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
