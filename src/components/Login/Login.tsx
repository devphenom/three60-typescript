import React from "react";
import { useForm } from "react-hook-form";

import { LoginWrapper } from "./Login.styles";
import Logo from "./three60.png";

type FormData = {
  email: string;
  password: string;
};

type Props = {
  auth: Function;
};

const Login = ({ auth }: Props) => {
  const { handleSubmit, register } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <LoginWrapper>
      <div id="login">
        <div id="logo">
          <img src={Logo} alt="logo" />
          <span>three60</span>
        </div>
        <div>
          <h2>Welcome Back</h2>
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
          <label htmlFor="password">Confirm Password</label>
          <input
            {...register("password", { required: true, min: 8 })}
            type="password"
            placeholder="********"
          />
          <button>Sign In</button>
          <button>Sign up with Google</button>
        </form>
        <p>
          Not yet signed up?{" "}
          <span className="account-alt" onClick={() => auth("ubu")}>
            Create account here
          </span>
        </p>
        <p>Privacy Policy and Terms of Service</p>
      </div>
    </LoginWrapper>
  );
};

export default Login;
