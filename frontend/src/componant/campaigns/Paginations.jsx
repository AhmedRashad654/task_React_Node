import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
export default function Paginations({ page, setPage, meta }) {
  return (
    <div className="mt-5 flex items-center gap-3">
      <div
        onClick={() => (page > 1 ? setPage((e) => e - 1) : "")}
        className={` ${page > 1 ? "cursor-pointer" : ""}`}
      >
        <FaAngleLeft size={25} color="gray" />
      </div>
      <div className="flex gap-2 items-center">
        {meta?.totalPages <= 3 ? (
          Array.from({ length: meta?.totalPages }).map((e, i) => (
            <div
              key={i}
              className={`p-1 px-4 ${
                page === i + 1
                  ? "bg-bgButtonPaginationActive"
                  : "bg-bgButtonPagination"
              }  text-white font-bold rounded-md cursor-pointer`}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </div>
          ))
        ) : (
          <div className="flex gap-2 items-center">
            {Array.from({ length: 2 }).map((e, i) => (
              <div
                key={i}
                className={`p-1 px-4 ${
                  page === i + 1
                    ? "bg-bgButtonPaginationActive"
                    : "bg-bgButtonPagination"
                }  text-white font-bold rounded-md cursor-pointer`}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </div>
            ))}
            <div
              className={`p-1 px-4 ${
                page > 2
                  ? "bg-bgButtonPaginationActive"
                  : "bg-bgButtonPagination"
              }  text-white font-bold rounded-md cursor-pointer min-h-[30px]`}
            >
              {page > 2 ? page : ""}
            </div>
          </div>
        )}
      </div>
      <div
        onClick={() => (meta?.totalPages > page ? setPage((e) => e + 1) : "")}
        className={` ${meta?.totalPages > page ? "cursor-pointer" : ""}`}
      ></div>
      <FaAngleRight size={25} color="gray" />
    </div>
  );
}
