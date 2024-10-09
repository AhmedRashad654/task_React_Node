import React, { useState } from "react";
import { toast } from "react-toastify";
import { request } from "../../axios/axios";
import LoadingButton from "../LoadingButton";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function DonateNow({ id, refetch }) {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(null);
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state?.user);
  const navigate = useNavigate();
  async function handleDonate() {
    if (!amount) {
      return toast.error("amount is required");
    }
    if (!amount === 0) {
      return toast.error("amount must be > 0");
    }
    try {
      setLoading(true);
      const response = await request.post(`/api/donors/${id}`, {
        amount: amount,
      });
      if (response?.data?.message === "you donors successfully") {
        setOpen(false);
        refetch();
        return toast.success(response?.data?.message);
      }
    } catch (error) {
      setOpen(false);
      return toast.error(error?.response?.data?.error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button"
        onClick={() => (user?.id ? setOpen(true) : navigate("/login"))}
      >
        Donate Now
      </button>
      {open && (
        <div
          tabIndex={-1}
          className=" fixed top-0 left-0  w-full flex justify-center bg-bgOverlay items-center h-full  p-5"
        >
          <div className="bg-white rounded-lg shadow p-2 lg:w-[60%] w-full">
            <div className=" p-2 md:p-3 border-b rounded-t ">
              <h3 className="text-xl font-semibold text-gray-900 ">
                Donate Now
              </h3>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <input
                type={"number"}
                placeholder={"Enter the amount ..."}
                className="p-[7px] outline-none border text-sm border-gray-400 text-textInput rounded-md w-full"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="flex items-center p-4 md:p-5 border-gray-200 rounded-b dark:border-gray-600">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={handleDonate}
              >
                {loading ? <LoadingButton /> : "Donate"}
              </button>
              <button
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                onClick={(e) => setOpen(false)}
              >
                close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
