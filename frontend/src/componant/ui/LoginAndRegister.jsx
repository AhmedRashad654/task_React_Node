import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../Avatar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../utils/logout";

export default function LoginAndRegister() {
  const user = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  async function handleLogout() {
    await logout(dispatch);
  }
  if (user?.id)
    return (
      <div className="flex gap-3 ">
        <button className="text-white" onClick={handleLogout}>
          Logout
        </button>
        <Link to={"/dashboard"}>
          <Avatar width={45} name={"ahmed rashad"} />
        </Link>
      </div>
    );
  return (
    <div className="flex gap-3 items-center text-[#FFF]">
      <Link to={"/login"}>
        <button> Login</button>
      </Link>
      <Link to={"/register"}>
        <button className="bg-bgButtonNavbar rounded-md text-white py-2 px-3">
          Register
        </button>
      </Link>
    </div>
  );
}
