import React, { useState } from "react";
import CampaignsList from "../componant/campaigns/CampaignsList";
import CampaignsFilter from "../componant/campaigns/CampaignsFilter";
import Filter from "../componant/campaigns/Filter";

export default function Campaigns() {
  const [openFilter, setOpenFilter] = useState(false);
  const [selectCategory, setSelectCategory] = useState("");
  const [all, setAll] = useState(true);
  return (
    <>
      <div className="flex lg:flex-row flex-col gap-5 w-[93%] mx-auto mt-10 min-h-[90vh]">
        <div
          className="bg-bgPop p-3 w-fit font-bold text-gray-900 cursor-pointer lg:hidden"
          onClick={() => setOpenFilter((e) => !e)}
        >
          Filter
        </div>
        {openFilter && (
          <div className="lg:w-[25%] lg:hidden block">
            <Filter
              all={all}
              setAll={setAll}
              setSelectCategory={setSelectCategory}
              selectCategory={selectCategory}
            />
          </div>
        )}
        <div className="lg:w-[25%] lg:block hidden">
          <Filter
            all={all}
            setAll={setAll}
            setSelectCategory={setSelectCategory}
            selectCategory={selectCategory}
          />
        </div>
        { all ? <CampaignsList /> : <CampaignsFilter selectCategory={selectCategory } />}
      </div>
    </>
  );
}
