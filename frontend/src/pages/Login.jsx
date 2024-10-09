import React from "react";
import Input from "../componant/Input";
import { useForm } from "react-hook-form";
import LoadingButton from "../componant/LoadingButton";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { request } from "../axios/axios";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/userSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    try {
      const response = await request.post("/api/user/login", data);
      if (response?.data?.message === "login successfully") {
        localStorage.setItem(
          "informUser",
          JSON.stringify(response?.data?.data)
        );
        dispatch(setUser(response?.data?.data));
        navigate("/");
      }
    } catch (error) {
      return toast.error(error?.response?.data?.error);
    }
  }
  return (
    <div className="flex flex-col gap-5 items-center mx-auto h-[85vh] justify-center  lg:w-[65%] w-full p-5">
      <h1 className="font-bold text-[1.2rem]"> Login</h1>
      <form
        className="flex flex-col gap-5 w-full"
        method="post"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full relative">
          <Input
            type={"email"}
            name={"email"}
            placeholder={"email"}
            validation={{
              required: "emaill is required",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "email invalid",
              },
            }}
            register={register}
          />
          {errors.email && (
            <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="w-full relative">
          <Input
            type={"password"}
            name={"password"}
            placeholder={"password"}
            validation={{
              required: "password is required",
            }}
            register={register}
          />
          {errors.password && (
            <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
              {errors.password.message}
            </p>
          )}
        </div>

        <button className="bg-bgButtonNavbar flex justify-center items-center rounded-sm text-white py-2 px-3 w-full">
          {isSubmitting ? <LoadingButton /> : "Login"}
        </button>
      </form>

      <div className="">
        Not have Account ?
        <Link to={"/register"}>
          <span className="font-bold cursor-pointer"> Register</span>
        </Link>
      </div>
    </div>
  );
}
