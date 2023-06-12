import React from "react";

export default function AddProperty({ text, set, condition }) {
  return (
    <>
      {text === "-" && (
        <span
          onClick={() => set()}
          className="cursor-pointer font-bold bg-slate-200 border rounded-full px-2"
        >
          {text}
        </span>
      )}

      {text === "+" && (
        <span
          onClick={() => set()}
          className="cursor-pointer font-bold bg-slate-200 border rounded-full px-2"
        >
          {text}
        </span>
      )}
    </>
  );
}
