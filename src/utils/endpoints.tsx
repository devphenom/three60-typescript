import { AxiosError } from "axios";
import { signIn, signUp } from "./api";
import { FormData } from "../pages/Login/Auth";
import { setUsers } from "./utils";
// type guard
function isAxiosError(error: any): error is AxiosError {
  return (error as AxiosError).isAxiosError !== undefined;
}

export const signin = async (
  formData: FormData,
  history: { push: Function }
) => {
  try {
    const { data } = await signIn(formData);
    setUsers(data);
    console.log(data);
    history.push("/dashboard");
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        return {
          status: error.response?.status,
          message: error.response?.data.message,
        };
      } else {
        return error.message;
      }
    }
  }
};

export const signup = async (
  formData: FormData,
  history: { push: Function }
) => {
  try {
    const { data } = await signUp(formData);
    setUsers(data);
    history.push("/dashboard");

    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        return {
          status: error.response?.status,
          message: error.response?.data.message,
        };
      } else {
        return error.message;
      }
    }
  }
};
