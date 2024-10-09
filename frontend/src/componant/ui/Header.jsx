import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="bg-bgHeader min-h-[86vh] flex justify-center items-center mt-2">
      <div className="flex justify-between items-center w-[90%]">
        <div className="flex flex-col gap-5 lg:w-[40%] w-[100%]">
          <h1 className="font-bold text-oneTextHeader text-[2rem]">
            Crowdfunding Campaigns
          </h1>
          <p className="text-twoTextHeader">
            We always strive to enrich creativity and enable individuals to
            invest in the best They have talents and abilities. Our goal is to
            help them showcase their skills and ideas Innovating the world and
            achieving their professional ambitions
          </p>
          <Link to={"/campaigns"}>
            <button className="bg-bgButtonHeader rounded-md text-[#FFF] mt-1 py-2 px-12 w-fit">
              view crowdfunding
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
