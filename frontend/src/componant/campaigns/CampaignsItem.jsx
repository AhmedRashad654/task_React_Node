import React from "react";
import DonateNow from "./DonateNow";
import { useNavigate } from "react-router-dom";
export default function CampaignsItem({ campaign, refetch }) {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full hover:bg-gray-100 cursor-pointer"
      onClick={() => navigate(`/campaigns/${campaign?.id}`)}
    >
      <img
        className="w-full h-72 md:w-64 md:h-60 object-cover rounded-t-lg"
        src={campaign?.image}
        alt="card"
      />
      <div className="flex flex-col justify-between p-4">
        <h5 className=" text-2xl font-bold tracking-tight text-gray-900 ">
          {campaign?.title}
        </h5>
        <h6 className="mb-2 tracking-tight text-gray-900 ">
          {campaign?.category}
        </h6>
        <p className="mb-2 text-gray-700 text-[0.9rem] line-clamp-2">
          {campaign?.description}
        </p>
        <div className="flex md:flex-row items-center  gap-3 flex-wrap">
          <p className="min-w-[130px] text-sm">
            {campaign?.currentAmount + "/" + campaign?.goalAmount}$
          </p>
          <p className="min-w-[130px] text-sm">status : {campaign?.status}</p>
          <p className="min-w-[130px] text-sm">
            num of donors : ${campaign?.numOfDonors}
          </p>
          <DonateNow id={campaign?.id} refetch={refetch} />
        </div>
      </div>
    </div>
  );
}
