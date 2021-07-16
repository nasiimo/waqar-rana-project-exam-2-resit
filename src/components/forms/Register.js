import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    var email = data.email;
    var password = data.password;
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  }

  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="email" {...register("email")} />

      <input
        placeholder="password"
        {...register("password", { required: true })}
      />
      {errors.lastName && <span>This field is required</span>}

      <button>Send</button>
    </form>
  );
}
