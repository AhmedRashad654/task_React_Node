import React, { useState } from "react";
import { request } from "../../axios/axios";
import { useQuery } from "@tanstack/react-query";
import CampaignsItem from "./CampaignsItem";
import Paginations from "./Paginations";

export default function CampaignsFilter({ selectCategory }) {
  const [page, setPage] = useState(1);
  function getCampaignsForPublicFilter() {
    return request.get(
      `/api/campaign/filter?category=${selectCategory}&page=${page}&limit=${6}`
    );
  }
  let { data, refetch, isLoading } = useQuery({
    queryKey: ["getCampaignsForPublicFilter", page, selectCategory],
    queryFn: () => getCampaignsForPublicFilter(page),
    keepPreviousData: true,
  });
  if (isLoading)
    return (
      <div className="flex justify-center items-center w-full">Loading...</div>
    );
  if (data?.data?.data?.length === 0)
    return (
      <div className="flex justify-center items-center w-full">
        Not Found Result{" "}
      </div>
    );
  return (
    <div className="flex flex-col gap-5 w-full pb-5">
      {data?.data?.data.map((campaign, i) => (
        <CampaignsItem key={i} campaign={campaign} refetch={refetch} />
      ))}
      <Paginations page={page} setPage={setPage} meta={data?.data?.meta} />
    </div>
  );
}
