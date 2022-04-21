import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAxios from "../../../hooks/useAxios";
import { BASE_URL, TOKEN_PATH } from "../../../constants/api";
import AuthContext from "../../../context/AuthContext";

const CONTACT_URL = "https://grafs.no/wp-json/wp/v2/holidaze_contact";

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
  id: yup.number(),
});

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [auth, setAuth] = useState(AuthContext);

  const userData = { username: "light_user", password: "nhHC xwcm oDMI jrVs 6lHy zlFK" };

  // async function signIn() {
  //   try {
  //     const responseSignIn = await axios.post(BASE_URL + TOKEN_PATH, userData);
  //     let responseData = responseSignIn.data;
  //     setAuth(responseData);
  //   } catch (error) {
  //     console.log("error", error);
  //   } finally {
  //   }
  // }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const http = useAxios();

  async function onSubmit(data) {
    setSubmitting(true);
    data.status = "publish";
    // data.date = Date();
    // setServerError(null);

    try {
      //
      data = {
        status: "publish",
        fields: {
          message: data.message,
          title: data.title,
          name: data.name,
          subject: data.subject,
          email: data.email,
          id: data.id,
        },
      };
      console.log(data);

      await axios.post(CONTACT_URL, data, {
        auth: {
          username: "light_user",
          password: "nhHC xwcm oDMI jrVs 6lHy zlFK",
        },
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
        <input label="title" type="text" placeholder="title" {...register("title")} />
        <input label="Name" type="text" placeholder="Nora Nordmann" {...register("name")} />

        <input label="Email" type="text" placeholder="nora@nordmann.no" {...register("email")} />

        <input label="Subject" type="text" placeholder="Subject" {...register("subject")} />

        <textarea label="Message" placeholder="Message" {...register("message")} />

        <input name="id" placeholder="id" {...register("id")} />

        <button type="submit">{submitting ? "sending.." : "send"}</button>
      </form>
    </>
  );
}

export default Contact;

// const headers = {
//   Authorization: "Bearer " + username + ":" + application_password,
//   "My-Custom-Header": "foobar",
// };
// await axios.post(CONTACT_URL, data, { headers });
//   await http.post(CONTACT_URL, beforeSend: function ( xhr ) {
//     xhr.setRequestHeader( 'X-WP-Nonce', wpApiSettings.nonce );
// }, data);

// const username = "light_user";
// const application_password = "nhHC xwcm oDMI jrVs 6lHy zlFK";
// const url = BASE_URL + CONTACT_URL;

//        action="<?php wp_nonce_field( 'wp_rest' );  ?>"
