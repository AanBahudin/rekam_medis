import React from "react";

const Data = ({ label, value, dataType = "simple", bg = "" }) => {
  return (
    <>
      {dataType === "simple" ? (
        <div className="flex flex-col gap-y-1">
          <h5 className="text-[14px] font-medium truncate capitalize">
            {label}
          </h5>
          <p
            className={`px-2 py-3 ${
              bg ? bg : "bg-transparent"
            } rounded-md text-[12px] border-[1px] border-greySecondary/60`}
          >
            {value}
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-y-1">
          <h5 className="text-[14px] font-medium truncate capitalize">
            {label}
          </h5>
          <div className="w-full rounded-md bg-transparent h-[15vh] overflow-y-auto no-scrollbar border-[1px] border-greySecondary/60">
            <p className="text-[12px] px-2 py-3">{value}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Data;
