import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import LoginAndRegister from "./LoginAndRegister";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center px-[40px] w-[100%] h-[70px] bg-NavbarBackground">
        <div className="flex justify-between items-center gap-10">
          <div className="text-[45px] text-[#FFF] font-bold cursor-pointer">
            <Link to={"/"}>GF</Link>
          </div>
          <ul className="lg:flex gap-7 font-normal text-[#FFF] items-center cursor-pointer hidden">
            <li className="font-semibold">
              {" "}
              <Link to={"/"}>home</Link>
            </li>
            <li>
              <Link to={"/campaigns"}>Campaigns</Link>
            </li>
            <li>
              <Link to={"/createCampaigns"}>Create Campaigns</Link>
            </li>
            <li>
              <Link to={"/Dashboard"}>Dashboard</Link>
            </li>
          </ul>
        </div>
        <div
          className="block lg:hidden cursor-pointer"
          onClick={() => setOpen((e) => !e)}
        >
          <FaBars color="white" size={30} />
        </div>
        <div className="lg:flex hidden ">
          <LoginAndRegister />
        </div>
      </div>
      <ul
        className={`lg:hidden flex flex-col absolute w-full mt-[1px]  gap-5 font-normal text-[#FFF] cursor-pointer bg-NavbarBackground z-10 transition-all duration-500 ${
          open ? "max-h-[500px]" : "max-h-0  overflow-hidden"
        }`}
      >
        <li className="font-semibold mt-5 ml-10 cursor-pointer">
          <Link to={"/"}>home</Link>
        </li>
        <li className="ml-10 cursor-pointer">
          <Link to={"/campaigns"}>Campaigns</Link>{" "}
        </li>
        <li className="ml-10 cursor-pointer">
          <Link to={"/createCampaigns"}>Create Campaigns</Link>
        </li>
        <li className="ml-10 cursor-pointer">
          <Link to={"/Dashboard"}>Dashboard</Link>
        </li>
        <li className="flex -mt-3 mb-5 ml-10">
          <LoginAndRegister />
        </li>
      </ul>
    </div>
  );
}
