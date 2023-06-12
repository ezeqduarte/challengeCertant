import React, { useRef, useState } from "react";
import "./Login.css";
import { useLogIn } from "../../store/useLoginStore";
import { useLoginRequest } from "../../hooks/http/login";

export default function Login() {
  const logIn = useLogIn();
  const logInRequest = useLoginRequest();
  const [password, setPassword] = useState("password");

  const usernameValue = useRef("");
  const passwordValue = useRef("");

  const seePassword = () => {
    if (password === "text") {
      setPassword("password");
    }

    if (password === "password") {
      setPassword("text");
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    logInRequest(usernameValue.current.value, passwordValue.current.value).then(
      (res) => {
        const userId = res.data.content?.userId;
        if (userId) logIn(userId);
      }
    );
  };

  return (
    <section className="section-login flex flex-col gap-10 ">
      <h2 className="text-[28px]">¡Welcome to Pókedex Lite!</h2>
      <form onSubmit={submitForm} className="form-login">
        <label class="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Username
          </span>
          <input
            type="text"
            ref={usernameValue}
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Insert your username"
          />
        </label>
        <fieldset className="relative">
          <label>
            <label class="block">
              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Password
              </span>
              <input
                type={password}
                ref={passwordValue}
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 "
                placeholder="Insert your password"
              />
            </label>

            {password === "password" ? (
              <svg
                width="24px"
                height="24px"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
                onClick={seePassword}
                className="absolute bottom-[4px] right-1 cursor-pointer"
              >
                <path
                  d="M12 14a2 2 0 100-4 2 2 0 000 4z"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6z"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            ) : (
              <svg
                width="24px"
                height="24px"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
                className="absolute bottom-[4px] right-1 cursor-pointer"
                onClick={seePassword}
              >
                <path
                  d="M3 3l18 18M10.5 10.677a2 2 0 002.823 2.823"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M7.362 7.561C5.68 8.74 4.279 10.42 3 12c1.889 2.991 5.282 6 9 6 1.55 0 3.043-.523 4.395-1.35M12 6c4.008 0 6.701 3.158 9 6a15.66 15.66 0 01-1.078 1.5"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            )}
          </label>
        </fieldset>

        <button
          type="submit"
          className="bg-zinc-600 hover:bg-zinc-700 mt-[10px] text-white font-bold"
        >
          Login
        </button>
      </form>
    </section>
  );
}
