import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import DateFunction from "../DateFunction";
import { CONTACT_URL, LIGHT_AUTH } from "../../../constants/api";

const schema = yup.object().shape({
  title: yup
    .string()
    .required("Please enter your name")
    .min(3, "Your name must at be at least 3 characters"),
  name: yup
    .string()
    .required("Please enter your name")
    .min(3, "Your name must at be at least 3 characters"),
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
    setSubmitting(true);

    data = {
      status: "publish",
      title: data.title,
      fields: {
        message: data.message,
        title: data.title,
        name: data.name,
        subject: data.subject,
        email: data.email,
        date: DateFunction(),
      },
    };

    try {
      await axios.post(CONTACT_URL, data, {
        auth: LIGHT_AUTH,
      });
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
        <input
          label="title"
          type="text"
          style={{ height: "35px" }}
          placeholder="title"
          {...register("title")}
        />
        <br />
        <input
          label="Name"
          type="text"
          style={{ height: "35px" }}
          placeholder="Nora Nordmann"
          {...register("name")}
        />
        <br />
        <input
          label="Email"
          type="text"
          style={{ height: "35px" }}
          placeholder="nora@nordmann.no"
          {...register("email")}
        />
        <br />
        <input
          label="Subject"
          type="text"
          style={{ height: "35px" }}
          placeholder="Subject"
          {...register("subject")}
        />
        <br />
        <textarea label="Message" placeholder="Message" {...register("message")} />
        <br />
        <br />
        <button type="submit">{submitting ? "sending.." : "send"}</button>
      </form>
    </>
  );
}

export default Contact;
