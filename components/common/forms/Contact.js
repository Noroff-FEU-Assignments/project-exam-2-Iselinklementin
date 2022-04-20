import React, { useState } from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const CONTACT_URL = "https://grafs.no/wp-json/contact-form-7/v1/contact-forms/669/feedback";

const schema = yup.object().shape({
  firstname: yup
    .string()
    .required("Please enter your firstname")
    .min(3, "Your firstname must at be at least 3 characters"),
  email: yup
    .string()
    .required("Please enter your email address")
    .email("Please enter a valid email address"),
  subject: yup
    .string()
    .required("Please enter your message")
    .min(2, "Your subject must at be at least 2 characters"),
  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "Your message must at be at least 10 characters"),
});

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    try {
      // await axios.post(CONTACT_URL, data);

      await axios.post(CONTACT_URL, data);
      setSubmitting(true);
      console.log(data);
    } catch (error) {
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {submitting}

      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name: */}
        <input
          name="your-name"
          label="Name"
          type="text"
          placeholder="Nora Nordmann"
          {...register("firstname")}
        />

        {/* Email: */}
        <input
          name="your-email"
          label="Email"
          type="text"
          placeholder="nora@nordmann.no"
          {...register("email")}
        />

        {/* Message: */}
        <textarea
          name="your-message"
          label="Message"
          placeholder="Message"
          {...register("message")}
        />

        <button type="submit">{submitting ? "sending.." : "send"}</button>
      </form>
    </>
  );
}

export default Contact;
