import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerUser } from "../../auth/auth.service";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  password: yup
    .string()
    .required("Please enter your message")
    .min(10, "The message must be at least 10 characters"),
});

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    /* registerUser(data);
    const registerSuccess = registerUser(data);
    if (registerSuccess) {
      console.log("success");
    } else {
      console.log("failure");
    } */

    let user = {
      email: data.email,
      password: data.password,
    };
    localStorage.setItem("user", JSON.stringify(user));
  }

  /* console.log(errors); */
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email address</label>
      <input
        id="tabFormInput"
        name="email"
        placeholder="Enter your email"
        {...register("email")}
      />
      {errors.email && <span>{errors.email.message}</span>}
      <label>Password</label>
      <input
        id="tabFormInput"
        name="password"
        placeholder="Enter your password"
        {...register("password", { required: true })}
      />
      {errors.password && <span>This field is required</span>}

      <button id="tabFormButton">Register</button>
    </form>
  );
}
