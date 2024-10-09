import React from "react";

export default function CheckBox({ text, setAll, selectCategory, setSelectCategory }) {
  return (
    <div
      className="flex items-center gap-1 cursor-pointer"
      onClick={() => {
        setAll(false);
        setSelectCategory(text);
      }}
    >
      <div className="w-[16px] h-[16px] rounded-full border border-textFilter flex justify-center items-center ">
        {selectCategory === text ? (
          <div className="w-[12px] mt-[px] h-[12px] rounded-full bg-textFilter"></div>
        ) : (
          ""
        )}
      </div>
      <label className="cursor-pointer">{text}</label>
    </div>
  );
}
