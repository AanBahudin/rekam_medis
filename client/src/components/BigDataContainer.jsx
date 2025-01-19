import React from "react";

const BigDataContainer = ({ label, value }) => {
  return (
    <div className="flex flex-col gap-y-1">
      <p className="text-slate-700 font-semibold capitalize text-sm">{label}</p>
      <div className="w-full rounded-md bg-transparent h-[15vh] overflow-y-auto no-scrollbar border-[2px] border-slate-400">
        <p className="text-slate-600 text-[12px] px-2 py-3">{value}</p>
      </div>
    </div>
  );
};

export default BigDataContainer;
