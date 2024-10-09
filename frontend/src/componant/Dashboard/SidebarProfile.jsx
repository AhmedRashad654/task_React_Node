import React from "react";
import Avatar from "../Avatar";
import { SiInformatica } from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";
import { FaBandcamp } from "react-icons/fa6";
import { FcDonate } from "react-icons/fc";
export default function SidebarProfile({ setDisplayBlock }) {
  return (
    <div className="p-5 rounded-lg bg-bgPop">
      <div className="flex  items-center flex-col gap-3">
        <Avatar width={100} name={"a r"} />
        <h1 className="text-oneTextHeader font-bold"> Yousef</h1>
      </div>
      <div className="mt-7">
        <h1 className="font-bold"> General settings</h1>
        <ul className="flex flex-col gap-4 mt-5">
          <li
            className="flex items-center gap-2"
            onClick={() => setDisplayBlock("information")}
          >
            <SiInformatica color="#EDC165EB" size={25} />
            <h4 className="font-semibold cursor-pointer">
              {" "}
              Personal Information
            </h4>
          </li>
          <li
            className="flex items-center gap-2"
            onClick={() => setDisplayBlock("security")}
          >
            <MdOutlineSecurity color="#61CE70" size={25} />
            <h4 className="font-semibold cursor-pointer"> Security</h4>
          </li>
          <li
            className="flex items-center gap-2"
            onClick={() => setDisplayBlock("campaigns")}
          >
            <FaBandcamp color="gray" size={25} />
            <h4 className="font-semibold cursor-pointer"> Campaigns, Donations</h4>
          </li>
          <li
            className="flex items-center gap-2"
            onClick={() => setDisplayBlock("donations")}
          >
            <FcDonate color="yellow" size={25} />
            <h4 className="font-semibold cursor-pointer">my Donations</h4>
          </li>
        </ul>
      </div>
    </div>
  );
}
