import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PaymentModal from "../layout/PaymentModal";
import { useState } from "react";

const schema = yup.object().shape({
  name: yup.string().required("Please enter your full name"),
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  country: yup.string().required("Please enter your country"),
  postal: yup
    .number()
    .required("Please enter your postal code")
    .min(4, "The postal code must be at least 4 characters"),
  city: yup.string().required("Please enter your postal code"),
  address: yup
    .string()
    .required("Please enter your address")
    .min(10, "The address must be at least 10 characters"),
  cardholdersName: yup.string().required("Please enter the card holders name"),
  cardnumber: yup
    .number()
    .required("Please enter card number")
    .min(16, "The card number must be at least 16 characters"),
  expiration: yup
    .number()
    .required("Please enter the expiration date")
    .min(4, "The expiration date must be at least 3 characters"),
  cvc: yup
    .number()
    .required("Please enter card number")
    .min(3, "The cvc number must be at least 3 characters"),
});

function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [showModal, setShowModal] = useState(false);

  function onSubmit(data) {
    setShowModal(true);
  }

  console.log(errors);

  return (
    <div className="checkout-form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="personal-info">
          <h4>Shipping info</h4>
          <input
            className="full-size"
            {...register("name")}
            placeholder="name"
          />
          {errors.name && <span>{errors.name.message}</span>}

          <input
            className="full-size"
            {...register("email")}
            placeholder="email"
          />
          {errors.email && <span>{errors.email.message}</span>}

          <input
            className="half-size"
            id="cc"
            {...register("country")}
            placeholder="country"
          />
          {errors.country && <span>{errors.country.message}</span>}

          <input
            className="half-size"
            {...register("postal")}
            placeholder="postal code"
          />
          {errors.postal && <span>{errors.postal.message}</span>}

          <input
            className="full-size"
            {...register("city")}
            placeholder="city"
          />
          {errors.city && <span>{errors.city.message}</span>}

          <input
            className="full-size"
            {...register("address")}
            placeholder="address"
          />
          {errors.address && <span>{errors.address.message}</span>}
        </div>

        <div className="payment-info">
          <h4>Payment info</h4>
          <input
            className="full-size"
            {...register("cardholdersName")}
            placeholder="cardholders name"
          />
          {errors.cardholdersName && (
            <span>{errors.cardholdersName.message}</span>
          )}

          <input
            className="full-size"
            {...register("cardnumber")}
            placeholder="cardnumber"
          />
          {errors.cardnumber && <span>{errors.cardnumber.message}</span>}

          <input
            className="half-size"
            {...register("expiration")}
            placeholder="expiration date"
          />
          {errors.expiration && <span>{errors.expiration.message}</span>}

          <input className="half-size" {...register("cvc")} placeholder="cvc" />
          {errors.cvc && <span>{errors.cvc.message}</span>}
          <button>Submit</button>
        </div>
      </form>
      <PaymentModal show={showModal} />
    </div>
  );
}

export default CheckoutForm;
