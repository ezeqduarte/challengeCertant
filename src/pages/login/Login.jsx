import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [password, setPassword] = useState("password");

  const seePassword = () => {
    if (password === "text") {
      setPassword("password");
    }

    if (password === "password") {
      setPassword("text");
    }
  };

  return (
    <section className="section-login">
      <form className="form-login">
        <label>
          <input placeholder="Username" type="text" />
        </label>
        <fieldset>
          <label>
            <input placeholder="Password" type={password} />
            {password === "password" ? (
              <svg
                width="24px"
                height="24px"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
                onClick={seePassword}
              >
                <path
                  d="M12 14a2 2 0 100-4 2 2 0 000 4z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            ) : (
              <svg
                width="24px"
                height="24px"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
                onClick={seePassword}
              >
                <path
                  d="M3 3l18 18M10.5 10.677a2 2 0 002.823 2.823"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M7.362 7.561C5.68 8.74 4.279 10.42 3 12c1.889 2.991 5.282 6 9 6 1.55 0 3.043-.523 4.395-1.35M12 6c4.008 0 6.701 3.158 9 6a15.66 15.66 0 01-1.078 1.5"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            )}
          </label>
        </fieldset>

        <button type="button">Login</button>
      </form>
    </section>
  );
}
