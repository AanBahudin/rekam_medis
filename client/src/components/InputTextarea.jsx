import React from "react";

const InputTextarea = ({
  label,
  inputName,
  defaultValue,
  placeholder,
  isRequired = true,
}) => {
  return (
    <section className="w-full flex flex-col">
      <label
        htmlFor={inputName}
        className="text-slate-700 font-semibold capitalize text-sm"
      >
        {label}
      </label>
      <textarea
        name={inputName}
        id={inputName}
        placeholder={placeholder}
        rows={5}
        className="bg-transparent border-[2px] border-slate-400 px-2 py-3 rounded-lg placeholder:text-[12px] flex-1 outline-none text-[12px] focus:placeholder:text-transparent resize-none"
      ></textarea>
    </section>
  );
};

export default InputTextarea;
