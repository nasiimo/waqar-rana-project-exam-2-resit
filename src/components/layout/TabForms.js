import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(10, "The password must be at least 10 characters"),
});

export function Register() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  /* Will need to submit functions. One for register to send to LS. And one for Login to match the values in LS */
  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Controller
          name="email"
          type="email"
          placeholder="enter email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Form.Control placeholder="Enter your email" {...field} />
          )}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Controller
          name="password"
          type="password"
          placeholder="enter password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Form.Control placeholder="Enter your password" {...field} />
          )}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
}

/* Need to validate these fields and insert post function onSubmit */
export function Login() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  /* Will need to submit functions. One for register to send to LS. And one for Login to match the values in LS */
  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Controller
          name="email"
          type="email"
          placeholder="enter email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Form.Control placeholder="Enter your email" {...field} />
          )}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Controller
          name="password"
          type="password"
          placeholder="enter password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Form.Control placeholder="Enter your password" {...field} />
          )}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}
