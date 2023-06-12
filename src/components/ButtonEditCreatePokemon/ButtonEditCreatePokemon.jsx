import React from "react";

export default function ButtonEditCreatePokemon({ popUp, setPopUp, text }) {
  return (
    <>
      {popUp ? (
        <button
          onClick={() => setPopUp(!popUp)}
          className="sticky hover:bg-red-300 left-[107rem] bottom-5 p-5 bg-red-200 border rounded-full font-bold text-[1rem]"
        >
          Close X
        </button>
      ) : (
        <button
          onClick={() => setPopUp(!popUp)}
          className="sticky hover:bg-green-300 left-[107rem] bottom-5 p-5 bg-green-200 border rounded-full font-bold text-[1rem]"
        >
          {text} +
        </button>
      )}
    </>
  );
}
