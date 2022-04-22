import React, { useState } from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import DateFunction from "../DateFunction";
import { ENQUIRES_URL, LIGHT_AUTH } from "../../../constants/api";
import Select from "react-select";

const schema = yup.object().shape({
  stay: yup
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
  phone: yup.number(),
  comments: yup
    .string()
    .required("Please enter your comments")
    .min(10, "Your comment must at be at least 10 characters"),
});

export const SUBJECT = [
  { value: "Sea", label: "Sea" },
  { value: "Critters", label: "Critters" },
  { value: "Villagers", label: "Villagers" },
];

function EnquireForm() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
  }

  return (
    <>
      {submitting}

      <form className="enquire-form" onSubmit={handleSubmit(onSubmit)}>
        <h6>Stay (hidden)</h6>
        <input
          label="title"
          type="text"
          style={{ height: "35px" }}
          placeholder="title"
          {...register("title")}
        />
        <br />
        <h3>Who is traveling?</h3>
        <input
          label="Name"
          type="text"
          style={{ height: "35px" }}
          placeholder="Nora Nordmann"
          {...register("name")}
        />
        <br />
        <Controller
          name="subject"
          style={{ height: "35px" }}
          control={control}
          render={({ field }) => (
            <Select className="mt-2" placeholder="Antall personer" options={SUBJECT} {...field} />
          )}
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
          label="phone"
          type="text"
          style={{ height: "35px" }}
          placeholder="phone"
          {...register("phone")}
        />
        <br />
        <textarea label="comments" placeholder="comments" {...register("comments")} />
        <br />
        <br />
        <button type="submit">{submitting ? "sending.." : "send"}</button>
      </form>
    </>
  );
}

export default EnquireForm;
