import React from "react";
import { MdOutlineFileUpload } from "react-icons/md";
export default function Input({
  type,
  name,
  placeholder,
  register,
  validation,
  option,
}) {
  if (type === "select")
    return (
      <div className="flex flex-col gap-1 mt-4">
        <select
          className="border border-gray-400 rounded-md p-2 outline-none scrollbar"
          {...register(name, validation)}
        >
          <option value="">{placeholder}</option>
          {option?.map((e, i) => (
            <option key={i} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>
    );
  if (type === "textarea")
    return (
      <div className="relative mt-4 w-full ">
        <label
          htmlFor=""
          className=" absolute -top-[13px] bg-white left-3 px-2 text-[0.8rem] text-NavbarBackground"
        >
          {placeholder}
        </label>
        <textarea
          type={type}
          className="rounded-md border p-2 w-full border-gray-500 outline-none min-h-[100px]"
          name={name}
          {...register(name, validation)}
        />
      </div>
    );
  if (type === "file")
    return (
      <>
        <label
          htmlFor={name}
          className=" p-[10px] outline-none border border-gray-400 text-sm flex justify-between  text-textInput rounded-md mt-2 w-full bg-white cursor-pointer"
        >
          <div>{placeholder}</div>
          <div>
            <MdOutlineFileUpload />
          </div>
        </label>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          {...register(name, validation)}
          className=" hidden"
        />
      </>
    );
  return (
    <div className="relative mt-4 w-full ">
      <label
        htmlFor=""
        className=" absolute -top-[13px] bg-white left-3 px-2 text-[0.8rem] text-NavbarBackground"
      >
        {placeholder}
      </label>
      <input
        type={type}
        className="rounded-md border p-2 w-full border-gray-500 outline-none"
        name={name}
        {...register(name, validation)}
      />
    </div>
  );
}
