import React from "react";

const DataContainer = ({ label, value }) => {
  return (
    <section className="w-full flex flex-col">
      <p className="text-slate-700 font-semibold capitalize text-sm">
        {" "}
        {label}{" "}
      </p>
      <h5 className="bg-transparent border-[2px] text-slate-600 border-slate-400 px-2 py-3 rounded-lg placeholder:text-[12px] flex-1 outline-none text-[12px]">
        {value}
      </h5>
    </section>
  );
};

export default DataContainer;
