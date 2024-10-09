import React, { useState } from "react";
import Paginations from "../componant/campaigns/Paginations";
import { useNavigate, useParams } from "react-router-dom";
import { request } from "../axios/axios";
import { useQuery } from "@tanstack/react-query";

export default function DetailsDonations() {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  function getDetailsDonors() {
    return request.get(
      `/api/donors/All_donors_myCampaigns/${id}?page=${page}&limit=${6}`
    );
  }
  let { data } = useQuery({
    queryKey: ["getDetailsDonors", page],
    queryFn: () => getDetailsDonors(page),
    keepPreviousData: true,
  });
  return (
    <div className="min-h-[80vh] p-2">
      <h1 className="font-semibold text-[1.2rem] mt-3 ml-2">
        Donations for this campaign{" "}
      </h1>
      <div className="containerTableDashboard scrollbar px-2">
        <table>
          <thead>
            <tr>
              <th className="thDashboard"> name</th>
              <th className="thDashboard"> email</th>
              <th className="thDashboard"> amount</th>
              <th className="thDashboard"> create Date</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.data?.map((e, i) => (
              <tr key={i}>
                <td>{e?.user?.name}</td>
                <td>{e?.user?.email}</td>
                <td>{e?.amount}</td>
                <td>{e?.createdAt?.slice(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center gap-5">
        <Paginations page={page} setPage={setPage} meta={data?.data?.meta} />
        <button
          className="p-1 px-2 rounded-md bg-blue-400 text-white -mb-5"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  );
}
