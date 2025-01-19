import React from "react";

const DataContainer = () => {
  return (
    <section className="w-full flex flex-col">
      <label
        htmlFor={inputName}
        className="text-slate-700 font-semibold capitalize text-sm"
      >
        {label}
      </label>
      <h5 className="bg-transparent border-[2px] border-slate-400 px-2 py-3 rounded-lg placeholder:text-[12px] flex-1  text-[12px]"></h5>
    </section>
  );
};

export default DataContainer;
