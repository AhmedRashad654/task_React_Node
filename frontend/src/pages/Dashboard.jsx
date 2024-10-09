import React, { useState } from "react";
import SidebarProfile from "../componant/Dashboard/SidebarProfile";
import InformationProfile from "../componant/Dashboard/InformationProfile";
import Security from "../componant/Dashboard/Security";
import Campaingns from "../componant/Dashboard/Campaingns";
import Donations from "../componant/Dashboard/Donations";
export default function Dashboard() {
  const [displayBlock, setDisplayBlock] = useState("information");
  const [openControl, setOpenControl] = useState(false);

  return (
    <div className="mt-20 w-[90%] flex lg:flex-row flex-col gap-5 mx-auto pb-5">
      <div
        className="bg-bgPop p-3 w-fit font-bold text-gray-900 cursor-pointer lg:hidden"
        onClick={() => setOpenControl((e) => !e)}
      >
        لوحة التحكم
      </div>

      {openControl && (
        <div className="lg:hidden block">
          <SidebarProfile setDisplayBlock={setDisplayBlock} />
        </div>
      )}
      <div className="lg:w-[25%] hidden lg:block">
        <SidebarProfile setDisplayBlock={setDisplayBlock} />
      </div>
      <div className="lg:w-[75%] w-[100%]">
        {displayBlock === "information" && <InformationProfile />}
        {displayBlock === "security" && <Security />}
        {displayBlock === "campaigns" && <Campaingns />}
        {displayBlock === "donations" && <Donations />}
      </div>
    </div>
  );
}
