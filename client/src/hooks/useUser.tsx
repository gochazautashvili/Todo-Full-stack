import { useDispatch, useSelector } from "react-redux";
import { login, logout, register } from "../redux/userSlicer/userSlicer";
import { userType } from "../types/types";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { LoginAPI, RegisterAPI } from "../api/userApi";

function useUser() {
  const dispatch = useDispatch();
  const user: userType = useSelector((state: RootState) => state.user.value);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const { name, gmail } = user ? JSON.parse(user) : "";

    if (name) {
      dispatch(login({ name, gmail }));
    }
  }, []);

  const Register = async ({ name, age, gmail, password }: userType) => {
    const res = await RegisterAPI({ name, age, gmail, password });

    const { token } = res;

    dispatch(register({ name, age, gmail, password }));
    localStorage.setItem("user", JSON.stringify({ token, name, gmail }));

    return res;
  };

  const Login = async ({ name, age, gmail, password }: userType) => {
    const res = await LoginAPI({ name, gmail, password });

    const { token } = res;

    dispatch(login({ name, age, gmail }));
    localStorage.setItem("user", JSON.stringify({ token, gmail, name }));

    return res;
  };

  const Logout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
  };

  return { Login, Logout, user, Register };
}

export default useUser;
