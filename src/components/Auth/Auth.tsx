import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";

import { AuthWrapper } from "./Auth.styles";
import { Logo } from "../Globals.styles";
import LogoImg from "./three60.png";
import { signin, signup } from "../../utils/endpoints";
import { useHistory } from "react-router";
import { getUsers } from "../../utils/utils";

export interface FormData {
  email: string;
  password: string;
  confirmPassword?: string;
}

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const history = useHistory();
  const onSubmit = (formData: FormData) => {
    if (isSignup) {
      signup(formData, history);
    } else {
      signin(formData, history);
    }
  };

  const googleSuccess = async (
    res: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    try {
      if ("profileObj" in res && "tokenId" in res) {
        const result = res?.profileObj;
        const token = res?.tokenId;
        localStorage.setItem("user", JSON.stringify({ result, token }));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = (error: Object) => {
    console.log(error);
    console.log("Google Signin was unsuccessful");
  };

  useEffect(() => {
    const { tk, user } = getUsers();
    console.log(tk, user);
    if (Object.keys(user).length && tk) {
      history.push("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AuthWrapper>
      <div id="login">
        <Logo>
          <img src={LogoImg} alt="logo" />
          <span>three60</span>
        </Logo>
        <div>
          {isSignup ? <h2>Create an account</h2> : <h2>Welcome Back</h2>}
          <p>Enter your credentials</p>
        </div>
        {/* form */}
        <Formik
          onSubmit={onSubmit}
          initialValues={{ email: "", password: "", confirmPassword: "" }}
        >
          <Form>
            <label htmlFor="email">Email</label>
            <Field name="email" placeholder="johndoe@gmail.com" />
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" placeholder="********" />
            {isSignup && (
              <>
                <label htmlFor="password">Confirm Password</label>
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="********"
                />
              </>
            )}
            <button type="submit">Submit</button>
          </Form>
        </Formik>
        <GoogleLogin
          clientId={`${process.env.REACT_APP_CLIENT_ID}`}
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Sign up with Google
            </button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy="single_host_origin"
        />
        {/* </form> */}
        {isSignup ? (
          <p>
            Have an account?{" "}
            <span className="account-alt" onClick={() => setIsSignup(false)}>
              Login here
            </span>
          </p>
        ) : (
          <p>
            Not yet signed up?{" "}
            <span className="account-alt" onClick={() => setIsSignup(true)}>
              Create account here
            </span>
          </p>
        )}
      </div>
    </AuthWrapper>
  );
};

export default Auth;
