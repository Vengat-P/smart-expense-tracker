import React, { useContext, useEffect } from "react";
import { userContext } from "../Context/userContext";

const Home = () => {
  const { data, setData, formData, setFormData } = useContext(userContext);
  useEffect(() => {}, [data]);
  const handleSubmit = async (e) => {
    document.getElementById("my_modal_1").close();
    e.preventDefault();
    console.log(formData);
    setFormData(() => {
      data.push(formData);
      localStorage.setItem("data", JSON.stringify(data));
    });
    setFormData({
      detail: "",
      amount: "",
      category: "",
      date: "",
      note: "",
    });

    console.log(data);
  };
  return (
    <>
      <div className=" container grid grid-cols-2 gap-4 overflow-hidden ">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          open modal
        </button>
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
        <div className="grid justify-center h-3/4 overflow-y-scroll ">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm"
              >
                <h1>detail: {item.detail}</h1>
                <h2>amount: {item.amount}</h2>
                <h2>category: {item.category}</h2>
                <h2>note: {item.note}</h2>
                <h2>Date: {item.date}</h2>
                <div className="flex justify-around">
                    <button
                  className="btn p-3 flex m-2 w-auto cursor-pointer text-white rounded-lg bg-blue-600"
                  onClick={() => handleEdit(index)}
                > Edit
                </button>
                <button
                  type="button"
                  className=" btn p-3 flex m-2 w-auto text-white cursor-pointer rounded-lg bg-red-600"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
