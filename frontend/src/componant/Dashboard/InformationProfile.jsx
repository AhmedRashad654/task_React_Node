import React, { useEffect } from "react";
import { SiInformatica } from "react-icons/si";
import Input from "../Input";
import LoadingButton from "../LoadingButton";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { request } from "../../axios/axios";
import { toast } from "react-toastify";
import { setUser } from "../../redux/features/userSlice";

export default function InformationProfile() {
  const user = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
    },
  });
  useEffect(() => {
    if (user?.id) {
      reset(user);
    }
  }, [reset, user]);
  async function onSubmit(data) {
    await request
      .put("/api/user", data)
      .then((result) => {
        if (result?.data?.message === "user updated successfully") {
          localStorage.setItem(
            "informUser",
            JSON.stringify(result?.data?.data)
          );
          dispatch(setUser(result?.data?.data));
          toast.success(result?.data?.message);
        }
      })
      .catch((error) => {
        return toast.error(error?.response?.data?.error);
      });
  }
  return (
    <div className="min-h-[70vh]">
      <div className="flex items-center gap-2">
        <SiInformatica color="#EDC165EB" size={25} />
        <h1 className="font-semibold cursor-pointer"> Personal Information</h1>
      </div>
      <form
        className="flex flex-col gap-5 w-full"
        method="post"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full relative">
          <Input
            type={"text"}
            placeholder={" name"}
            name={"name"}
            validation={{
              required: "  name is required ",
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
            placeholder={"  email"}
            name={"email"}
            validation={{
              required: "email is required ",
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

        <div className="flex justify-start mt-5">
          <button className="p-2 rounded-lg bg-bgButtonNavbar text-white">
            {isSubmitting ? <LoadingButton /> : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
