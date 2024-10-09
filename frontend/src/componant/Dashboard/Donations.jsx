import React, { useState } from "react";
import Pagination from "../../componant/campaigns/Paginations";
import { FcDonate } from "react-icons/fc";
import { request } from "../../axios/axios";
import { useQuery } from "@tanstack/react-query";

export default function Donations() {
  const [page, setPage] = useState(1);
  function getAllMyDonord() {
    return request.get(`/api/donors/All_myDonors?page=${page}&limit=${6}`);
  }
  let { data, isLoading } = useQuery({
    queryKey: ["getAllMyDonord", page],
    queryFn: () => getAllMyDonord(page),
    keepPreviousData: true,
  });
  if (isLoading)
    return (
      <div className="flex justify-center items-center w-full min-h-[70vh]">
        Loading...
      </div>
    );
  if (data?.data?.data?.length === 0)
    return (
      <div className="flex justify-center items-center w-full">
        No have Donations yet
      </div>
    );
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <FcDonate color="gray" size={25} />
        <h1 className="font-semibold cursor-pointer">my Donations</h1>
      </div>
      <div className="containerTableDashboard scrollbar px-2">
        <table>
          <thead>
            <tr>
              <th className="thDashboard"> Campaings Title</th>
              <th className="thDashboard"> Campaigns Status </th>
              <th className="thDashboard"> Donation amount </th>
              <th className="thDashboard"> Donation Date</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.data?.map((e, i) => (
              <tr className="cursor-pointer" key={i}>
                <td>{e?.campaign?.title}</td>
                <td>{e?.campaign?.status}</td>
                <td>{e?.amount}</td>
                <td>{e?.createdAt?.slice(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination page={page} setPage={setPage} meta={data?.data?.meta} />
    </div>
  );
}
