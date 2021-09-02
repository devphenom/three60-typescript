import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { AuthWrapper } from "./Auth.styles";
import Logo from "./three60.png";

type FormData = {
  email: string;
  password: string;
};

const Auth = () => {
  const [authType, setAuthType] = useState("login");
  const { handleSubmit, register } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <AuthWrapper>
      <div id="login">
        <div id="logo">
          <img src={Logo} alt="logo" />
          <span>three60</span>
        </div>
        <div>
          {authType === "login" ? (
            <h2>Welcome Back</h2>
          ) : (
            <h2>Create an account</h2>
          )}
          <p>Log in to continue</p>
        </div>
        {/* form */}
        <form onSubmit={onSubmit}>
          <label htmlFor="email">Email/Username</label>
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            type="email"
            placeholder="email/username"
          />
          <label htmlFor="password">Password</label>
          <input
            {...register("password", { required: true, min: 8 })}
            type="password"
            placeholder="********"
          />
          {authType === "signup" && (
            <>
              <label htmlFor="password">Confirm Password</label>
              <input
                {...register("password", { required: true, min: 8 })}
                type="password"
                placeholder="********"
              />{" "}
            </>
          )}
          <button>Sign In</button>
          <button>Sign up with Google</button>
        </form>
        {authType === "login" ? (
          <p>
            Not yet signed up?{" "}
            <span className="account-alt" onClick={() => setAuthType("signup")}>
              Create account here
            </span>
          </p>
        ) : (
          <p>
            Have an account?{" "}
            <span className="account-alt" onClick={() => setAuthType("login")}>
              Login here
            </span>
          </p>
        )}
        <p>Privacy Policy and Terms of Service</p>
      </div>
    </AuthWrapper>
  );
};

export default Auth;
