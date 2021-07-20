import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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
    const loginEmail = data.email;
    const loginPassword = data.password;

    if (localStorage.getItem("user")) {
      const loginDetails = JSON.parse(localStorage.getItem("user"));
      if (
        loginEmail === loginDetails.email &&
        loginPassword === loginDetails.password
      ) {
        console.log("login successfull");
        window.location = "/browse";
      } else {
        console.log("Wrong credentials");
      }
    } else {
      console.log("Not a registered user");
    }
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
      <button id="tabFormButton">Login</button>
    </form>
  );
}
