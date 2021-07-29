import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkUserMatches } from "../../auth/auth.service";

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

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    checkUserMatches(data);
  }

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
      <button id="tabFormButton">Login</button>
    </form>
  );
}
