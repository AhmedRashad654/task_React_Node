import React from "react";
import { MdOutlineSecurity } from "react-icons/md";
import Input from "../Input";
import LoadingButton from "../LoadingButton";
import { useForm } from "react-hook-form";
import { request } from "../../axios/axios";
import { toast } from "react-toastify";

export default function Security() {
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const newPassword = watch("newPassword");
  async function onSubmit(data) {
    await request
      .put("/api/user/update_password", {
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      })
      .then((result) => {
        if (result?.data?.message === "update password successfully") {
          toast.success(result?.data?.message);
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.error);
      });
  }
  return (
    <div className="min-h-[70vh]">
      <div className="flex items-center gap-2">
        <MdOutlineSecurity color="#61CE70" size={25} />
        <h1 className="font-semibold cursor-pointer"> Security</h1>
      </div>
      <form
        className="flex flex-col gap-5 w-full mt-3"
        method="post"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full relative">
          <Input
            type={"password"}
            placeholder={"current Password "}
            name={"oldPassword"}
            validation={{
              required: "current Password is Required",
            }}
            register={register}
          />
          {errors.oldPassword && (
            <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
              {errors.oldPassword.message}
            </p>
          )}
        </div>

        <div className="w-full relative">
          <Input
            type={"password"}
            placeholder={"new Password"}
            name={"newPassword"}
            validation={{
              required: "new Password is Required  ",
              minLength: {
                value: 6,
                message: "  password is week",
              },
            }}
            register={register}
          />
          {errors.newPassword && (
            <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
              {errors.newPassword.message}
            </p>
          )}
        </div>
        <div className="w-full relative">
          <Input
            type={"password"}
            placeholder={"Confirm New Password"}
            name={"confirmNewPassord"}
            validation={{
              required: "Confirm New Password is required",
              validate: (value) =>
                value === newPassword || "confirm not identie",
            }}
            register={register}
          />
          {errors.confirmNewPassord && (
            <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
              {errors.confirmNewPassord.message}
            </p>
          )}
        </div>

        <div className="flex justify-start mt-5">
          <button className="p-2 rounded-lg bg-bgButtonNavbar text-white">
            {isSubmitting ? <LoadingButton /> : " Save Changes "}
          </button>
        </div>
      </form>
    </div>
  );
}
