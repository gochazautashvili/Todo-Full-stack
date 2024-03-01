import "./Form.scss";
import useUser from "../../hooks/useUser";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { userType } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function FormComp() {
  const { Login } = useUser();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const userData: userType = data as userType;

    Login(userData)
      .then(() => {
        reset();
        navigate("/");
      })
      .catch((error) => {
        setError(error.response.data);
      });
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {error && <span className="error">{error}</span>}
      <label htmlFor="name">First Name:</label>
      <input
        id="name"
        type="text"
        placeholder="Enter your name..."
        {...register("name", { required: true })}
        autoComplete="name"
      />
      {errors?.name && <span className="error">This field is required</span>}
      <label htmlFor="age">Age:</label>
      <input
        id="age"
        type="number"
        placeholder="Enter your age..."
        {...register("age", { required: true })}
      />
      {errors?.age && <span className="error">This field is required</span>}
      <label htmlFor="gmail">Gmail:</label>
      <input
        id="gmail"
        type="email"
        placeholder="Enter your email..."
        {...register("gmail", { required: true })}
      />
      {errors?.gmail && <span className="error">This field is required</span>}
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password..."
        {...register("password", { required: true })}
      />
      {errors?.password && (
        <span className="error">This field is required</span>
      )}
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComp;
