import React from "react";
import DonateNow from "../componant/campaigns/DonateNow";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { request } from "../axios/axios";
export default function DetailsCampaigns() {
  const { id } = useParams();
  async function getSingleCampaign() {
    try {
      return await request.get(`/api/campaign/${id}`);
    } catch (error) {
      throw new Error(error?.response?.data?.error);
    }
  }
  let { data, error, isLoading, refetch } = useQuery({
    queryKey: ["getSingleCampaign", id],
    queryFn: getSingleCampaign,
    keepPreviousData: true,
  });
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        Loading...
      </div>
    );
  }
  if (error)
    return (
      <div className="flex justify-center items-center h-[80vh]">
        {error?.message}
      </div>
    );
  if (data)
    return (
      <div className="p-2">
        <h1 className="font-bold flex justify-center mt-5 text-[1.5rem]">
          Details campaign
        </h1>
        <div className="max-w-sm bg-white rounded-lg shadow min-h-[80%] my-5 mx-auto">
          <img
            className="rounded-t-lg w-full h-80"
            src={data?.data?.data?.image}
            alt="card"
          />
          <div className="p-5">
            <h5 className="mb-2 font-bold text-lg tracking-tight text-gray-900 ">
              {data?.data?.data?.title}
            </h5>
            <h6 className="mb-2  text-lg tracking-tight text-gray-900 ">
              {data?.data?.data?.category}
            </h6>
            <p className="mb-3 font-normal text-gray-700">
              {data?.data?.data?.description}
            </p>
            <div className="flex flex-col gap-3">
              <p className=" text-sm">
                {data?.data?.data?.currentAmount +
                  "/" +
                  data?.data?.data?.goalAmount}
                $
              </p>
              <p className=" text-sm">status : {data?.data?.data?.status}</p>
              <p className=" text-sm">
                num of donors : {data?.data?.data?.numOfDonors}
              </p>
              <p className=" text-sm">
                created Date : {data?.data?.data?.createdAt?.slice(0, 10)}
              </p>
              <p className=" text-sm">
                Due Date : {data?.data?.data?.dateDue?.slice(0, 10)}
              </p>
              <DonateNow id={id} refetch={refetch} />
            </div>
          </div>
        </div>
      </div>
    );
}
