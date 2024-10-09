import React, { useState } from "react";
import CampaignsItem from "./CampaignsItem";
import Paginations from "./Paginations";
import { request } from "../../axios/axios";
import { useQuery } from "@tanstack/react-query";

export default function CampaignsList() {
  const [page, setPage] = useState(1);
  function getCampaignsForPublic() {
    return request.get(`/api/campaign?page=${page}&limit=${6}`);
  }
  let { data, refetch, isLoading } = useQuery({
    queryKey: ["getCampaignsForPublic", page],
    queryFn: () => getCampaignsForPublic(page),
    keepPreviousData: true,
  });
  if (isLoading)
    return (
      <div className="flex justify-center items-center w-full">Loading...</div>
    );
  return (
    <div className="flex flex-col gap-5 w-full pb-5">
      {data?.data?.data?.map((campaign, i) => (
        <CampaignsItem key={i} campaign={campaign} refetch={refetch} />
      ))}
      <Paginations page={page} setPage={setPage} meta={data?.data?.meta} />
    </div>
  );
}
