import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../Context/userContext";
import BarChart from "../Components/BarChart";

const Home = () => {
  const { data, setData, formData, setFormData, food, bills, travel, others } =
    useContext(userContext);
  useEffect(() => {

  }, [data]);
  const handleSubmit = async (e) => {
    document.getElementById("my_modal_1").close();
    e.preventDefault();
    data.push(formData);
    localStorage.setItem("data", JSON.stringify(data));
    setData(() => {
      const storedData = localStorage.getItem("data");
      return storedData ? JSON.parse(storedData) : [];
    });
    setFormData({
      detail: "",
      amount: "",
      category: "",
      date: "",
      note: "",
    });
    
  };
  const handleDelete = (key) => {
    data.splice(key, 1);
    localStorage.setItem("data", JSON.stringify(data));
    setData(() => {
      const storedData = localStorage.getItem("data");
      return storedData ? JSON.parse(storedData) : [];
    });
  };

  // console.log(food);
  // console.log(travel);
  // console.log(bills);
  // console.log(others);

  return (
    <>
      <div className=" md:h-screen bg-neutral-content grid md:grid-cols-2 gap-4 overflow-hidden ">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <div>
        <div className="w-full md:h-80 lg:h-60 p-4 m-2 grid border-0 shadow-lg bg-gray-100 justify-center mx-auto ">
          <button
            className="btn mt-2 w-auto bg-neutral text-neutral-content text-lg"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Add new Entry
          </button>
          <h1 className="sm:text-xl md:text-2xl font-bold text-red-500">
            Total Spent Amount is :
            <span className="text-neutral ml-3">
              {data.reduce((sum, item) => {
                return sum + parseInt(`${item.amount}`);
              }, 0)}
            </span>
          </h1>
          <div className="sm:grid lg:flex gap-4 justify-between">
            <h1 className="text-2xl font-bold text-red-500">
              Food:
              <span className="text-neutral ml-3">
                {food.reduce((sum, item) => {
                  return sum + parseInt(`${item.amount}`);
                }, 0)}
              </span>
            </h1>
            <h1 className="sm:text-xl md:text-2xl font-bold text-red-500">
              Travel:
              <span className="text-neutral ml-3">
                {travel.reduce((sum, item) => {
                  return sum + parseInt(`${item.amount}`);
                }, 0)}
              </span>
            </h1>
            <h1 className="sm:text-xl md:text-2xl font-bold text-red-500">
              Bills:
              <span className="text-neutral ml-3">
                {bills.reduce((sum, item) => {
                  return sum + parseInt(`${item.amount}`);
                }, 0)}
              </span>
            </h1>
            <h1 className="sm:text-xl md:text-2xl font-bold text-red-500">
              Others:
              <span className="text-neutral ml-3">
                {others.reduce((sum, item) => {
                  return sum + parseInt(`${item.amount}`);
                }, 0)}
              </span>
            </h1>
          </div>
        </div>
        <div className="sm:w-full  md:w-3/4  mx-auto ">
          <BarChart/>
        </div>
        </div>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <div className="modal-action">
              <form
                method="dialog"
                onSubmit={handleSubmit}
                className="bg-white/60 backdrop-blur-md shadow-xl rounded-xl p-10 w-full max-w-md border border-white/40"
              >
                <input
                  type="text"
                  placeholder="Enter Entry Details"
                  value={formData.detail}
                  required
                  className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) =>
                    setFormData({ ...formData, detail: e.target.value })
                  }
                />
                <input
                  type="number"
                  placeholder="Enter the Amount"
                  value={formData.amount}
                  required
                  className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) =>
                    setFormData({ ...formData, amount: e.target.value })
                  }
                />
                <select
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  value={formData.category}
                  required
                  className="border p-2 mt-2 mb-4 rounded w-full"
                >
                  <option>Select</option>
                  <option value="food">Food</option>
                  <option value="travel">Travel</option>
                  <option value="bills">Bills</option>
                  <option value="others">Others</option>
                </select>
                <input
                  type="date"
                  placeholder="Enter notes"
                  value={formData.date}
                  required
                  className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Enter notes"
                  value={formData.note}
                  required
                  className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) =>
                    setFormData({ ...formData, note: e.target.value })
                  }
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
                >
                  Create
                </button>
                <button
                  onClick={() => document.getElementById("my_modal_1").close()}
                  className=" w-fit p-3  bg-gray-400 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition duration-300"
                >
                  close
                </button>
                {/* if there is a button i n form, it will close the modal */}
              </form>
            </div>
          </div>
        </dialog>
        <div className="md:h-3/4 border-0 m-2  bg-gray-100 rounded-lg shadow-lg p-4">
          <h1 className="text-2xl bg-neutral text-neutral-content text-center text-bold">
            Recent Entries
          </h1>
          <div className=" flex justify-between">
            <button className="flex cursor-pointer">
              <span>sort</span>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 20V10m0 10-3-3m3 3 3-3m5-13v10m0-10 3 3m-3-3-3 3"
                />
              </svg>
            </button>
            <button className="flex cursor-pointer">
              <span>filter</span>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
                />
              </svg>
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-3 p-6 justify-center md:h-3/4  mb-3  overflow-y-scroll ">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="max-w-sm p-6 grid gap-2 bg-white border border-gray-200 rounded-lg shadow-sm"
                >
                  <h2 className=" text-lg">
                    Detail:{" "}
                    <span className="font-medium text-neutral">
                      {item.detail}
                    </span>
                  </h2>
                  <h2>
                    Amount:{" "}
                    <span className="font-medium text-neutral">
                      {item.amount}
                    </span>
                  </h2>
                  <h2>
                    Category:{" "}
                    <span className="font-medium text-neutral">
                      {item.category}
                    </span>
                  </h2>
                  <h2>
                    Note:{" "}
                    <span className="font-medium text-neutral">
                      {item.note}
                    </span>
                  </h2>
                  <h2>
                    Date:{" "}
                    <span className="font-medium text-neutral">
                      {item.date}
                    </span>
                  </h2>
                  <button
                    type="button"
                    className=" btn p-3 flex  w-auto text-white cursor-pointer rounded-lg bg-red-500"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
