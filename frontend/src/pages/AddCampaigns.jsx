import React from "react";
import Input from "../componant/Input";
import { useForm } from "react-hook-form";
import LoadingButton from "../componant/LoadingButton";
import { request } from "../axios/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function AddCampaigns() {
  const {
    handleSubmit,
    register,

    formState: { errors, isSubmitting },
    watch,
  } = useForm();
  const navigate = useNavigate();
  const watchImage = watch("image");
  async function onSubmit(data) {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("dateDue", data.dateDue);
    formData.append("goalAmount", data.goalAmount);
    formData.append("category", data.category);
    formData.append("image", data.image[0]);

    try {
      const response = await request.post("/api/campaign", formData);
      if (response?.data?.message === "create campaign successgully") {
        toast.success(response?.data?.message);
        navigate("/campaigns");
      }
    } catch (error) {
      return toast.error(error?.response?.data?.error);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-[86vh] ">
      <div className="flex flex-col gap-5 items-center lg:w-[65%] w-full p-5">
        <h1 className="font-bold text-[1.2rem]"> Create Campaigns</h1>
        <form
          className="flex flex-col gap-5 w-full"
          method="post"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full relative">
            <Input
              type={"text"}
              name={"title"}
              placeholder={"  title"}
              validation={{
                required: " title is required",
                maxLength: {
                  value: 200,
                  message: "max length is 200 character",
                },
              }}
              register={register}
            />
            {errors.title && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.title.message}
              </p>
            )}
          </div>
          <div className="w-full relative">
            <Input
              type={"number"}
              name={"goalAmount"}
              placeholder={"goal Amount"}
              validation={{
                required: " goal Amount is required",
                validate: (value) => {
                  return value > 0 || "goal Amount must be > 0";
                },
              }}
              register={register}
            />
            {errors.goalAmount && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.goalAmount.message}
              </p>
            )}
          </div>
          <div className="w-full relative">
            <Input
              type={"date"}
              name={"dateDue"}
              placeholder={"date Due"}
              validation={{
                required: "date Due is required",
                validate: (value) => {
                  const currentDate = new Date();
                  const selectDate = new Date(value);
                  return selectDate > currentDate || "date must be in future";
                },
              }}
              register={register}
            />
            {errors.dateDue && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.dateDue.message}
              </p>
            )}
          </div>
          <div className="w-full relative">
            <Input
              type={"select"}
              name={"category"}
              placeholder={"category"}
              option={["Education", "Health", "Arts", "Tecnology", "Social"]}
              validation={{
                required: "category is required",
              }}
              register={register}
            />
            {errors.category && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.category.message}
              </p>
            )}
          </div>
          <div className="w-full relative">
            <Input
              type={"file"}
              name={"image"}
              placeholder={"image"}
              validation={{
                required: "image is required",
              }}
              register={register}
            />
            {errors.image && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.image.message}
              </p>
            )}
            {watchImage && watchImage[0] && (
              <p className=" text-[0.7rem] absolute -bottom-[17px]">
                {watchImage[0]?.name}
              </p>
            )}
          </div>
          <div className="w-full relative">
            <Input
              type={"textarea"}
              name={"description"}
              placeholder={"description"}
              validation={{
                required: "description is required",
              }}
              register={register}
            />
            {errors.description && (
              <p className="text-red text-[0.7rem] absolute -bottom-[17px]">
                {errors.description.message}
              </p>
            )}
          </div>

          <button className="bg-bgButtonNavbar flex justify-center items-center rounded-sm text-white py-2 px-3 w-full">
            {isSubmitting ? <LoadingButton /> : "create"}
          </button>
        </form>
      </div>
    </div>
  );
}
