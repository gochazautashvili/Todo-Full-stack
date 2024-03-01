import axios from "axios";
import { loginUserType, userType } from "../types/types";

export const RegisterAPI = async ({ name, age, gmail, password }: userType) => {
  const user = await axios.post(
    `${import.meta.env.VITE_API_URL}/auth/register`,
    { name, age, gmail, password }
  );

  return user.data;
};

export const LoginAPI = async ({ name, gmail, password }: loginUserType) => {
  const user = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
    name,
    gmail,
    password,
  });

  return user.data;
};
