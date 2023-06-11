import React from "react";
import "./Login.css"

export default function Login() {
  return (
    <section>
      <form className="form-login">
        <label>
          <input placeholder="Username" type="text" />
        </label>
        <label>
          <input placeholder="Password" type="text" />
        </label>
        <button type="button">Login</button>
      </form>
    </section>
  );
}
