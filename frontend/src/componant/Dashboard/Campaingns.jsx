import React, { useState } from "react";
import Pagination from "../../componant/campaigns/Paginations";
import { FaBandcamp } from "react-icons/fa6";
import { request } from "../../axios/axios";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
export default function Campaingns() {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  function getCampaignsAndDonorsPrivate() {
    return request.get(
      `/api/donors/donors_myCampaigns?page=${page}&limit=${2}`
    );
  }
  let { data, isLoading } = useQuery({
    queryKey: ["getCampaignsAndDonorsPrivate", page],
    queryFn: () => getCampaignsAndDonorsPrivate(page),
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
        No have champaigns yet
      </div>
    );
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <FaBandcamp color="gray" size={25} />
        <h1 className="font-semibold cursor-pointer">Campaingns</h1>
      </div>
      {data?.data?.data?.map((e, i) => (
        <div className="" key={i}>
          <div className="ml-2">
            <h1 className="font-semibold">{i + 1 + "-" + e?.title}</h1>
            <h4>{e?.description}</h4>
          </div>

          <div className="mx-auto flex justify-center text-blue-600 mt-2">
            Table Donatios for this campaign
          </div>
          <div className="containerTableDashboard scrollbar px-2">
            <table>
              <thead>
                <tr>
                  <th className="thDashboard"> name</th>
                  <th className="thDashboard"> email</th>
                  <th className="thDashboard"> amount</th>
                </tr>
              </thead>
              <tbody>
                {e?.Donors.map((e, i) => (
                  <tr className="cursor-pointer" key={i}>
                    <td>{e?.user?.name}</td>
                    <td>{e?.user?.email}</td>
                    <td>{e?.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className="bg-blue-400 p-1 text-white rounded-md text-sm mt-3"
              onClick={() => navigate(`/dashboard/detailsDonations/${e?.id}`)}
            >
              veiw All Donors for this campaign
            </button>
          </div>
        </div>
      ))}
      <Pagination meta={data?.data?.meta} page={page} setPage={setPage} />
    </div>
  );
}
