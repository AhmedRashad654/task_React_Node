import React from "react";
import Input from "../componant/Input";
import { useForm } from "react-hook-form";
import LoadingButton from "../componant/LoadingButton";
import { Link, useNavigate } from "react-router-dom";
import { request } from "../axios/axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/userSlice";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const password = watch("password");
  async function onSubmit(data) {
    try {
      const response = await request.post("/api/user/register", {
        name: data.name,
        email: data.email,
        password: data.password,
      });
      if (response.data.message === "register successfully") {
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
    <div className="flex justify-center items-center min-h-[86vh]">
      <div className="flex flex-col gap-5 items-center lg:w-[65%] w-full p-5">
        <h1 className="font-bold text-[1.2rem]"> Register</h1>
        <form
          className="flex flex-col gap-5 w-full"
          method="post"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full relative">
            <Input
              type={"text"}
              name={"name"}
              placeholder={"name"}
              validation={{
                required: "name is required",
                maxLength: {
                  value: 50,
                  message: "name is max length 50 character",
                },
              }}
              register={register}
            />
            {errors.name && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="w-full relative">
            <Input
              type={"email"}
              name={"email"}
              placeholder={"email"}
              validation={{
                required: "emaill is required",
                maxLength: {
                  value: 100,
                  message: "email is max length 100 character",
                },
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
                minLength: {
                  value: 6,
                  message: "password is wrong",
                },
              }}
              register={register}
            />
            {errors.password && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="w-full relative">
            <Input
              type={"password"}
              name={"confirmPassword"}
              placeholder={"confirm Password"}
              validation={{
                required: "confirm password is required",
                validate: (value) => value === password || "password not match",
              }}
              register={register}
            />
            {errors.confirmPassword && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button className="bg-bgButtonNavbar flex justify-center items-center rounded-sm text-white py-2 px-3 w-full mt-4">
            {isSubmitting ? <LoadingButton /> : "Register"}
          </button>
        </form>

        <div className="">
          Do you have Account ?
          <Link to={"/login"}>
            <span className="font-bold cursor-pointer"> Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
