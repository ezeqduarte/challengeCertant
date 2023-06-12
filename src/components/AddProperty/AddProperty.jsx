import React from "react";

export default function AddProperty({ text, onClick, disabled = false }) {
  return (
    <>
      {text === "-" && (
        <button
          onClick={onClick}
          className="cursor-pointer w-[30px] flex justify-center items-center h-[30px] font-bold bg-slate-200 border rounded-full"
          type="button"
          disabled={disabled}
        >
          {text}
        </button>
      )}

      {text === "+" && (
        <button
          onClick={onClick}
          className="cursor-pointer  w-[30px] h-[30px] flex justify-center items-center font-bold bg-slate-200 border rounded-full"
          type="button"
        >
          {text}
        </button>
      )}
    </>
  );
}
