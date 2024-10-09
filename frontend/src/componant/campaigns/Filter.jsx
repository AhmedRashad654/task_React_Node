import React from "react";
import CheckBox from "./CheckBox";
export default function Filter({
  all,
  setAll,
  selectCategory,
  setSelectCategory,
}) {
  return (
    <div className="bg-bgPop w-[100%]  rounded-md p-5 text-textFilter">
      <h1 className="font-bold">Filters</h1>
      <div
        onClick={() => {
          setAll(true);
          setSelectCategory("");
        }}
        className="flex items-center gap-2 mt-5 cursor-pointer"
      >
        <div className="w-[16px] h-[16px] rounded-full border border-textFilter flex justify-center items-center ">
          {all && (
            <div className="w-[12px] mt-[px] h-[12px] rounded-full bg-textFilter"></div>
          )}
        </div>
        <label className="cursor-pointer">All</label>
      </div>
      <div>
        <h1 className="font-bold mt-5 text-insideTextFilter"> Categories</h1>
        <div className="flex flex-col gap-4 mt-3">
          {["Education", "Health", "Arts", "Tecnology", "Social"].map(
            (title, index) => (
              <CheckBox
                key={index}
                setAll={setAll}
                text={title}
                setSelectCategory={setSelectCategory}
                selectCategory={selectCategory}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
