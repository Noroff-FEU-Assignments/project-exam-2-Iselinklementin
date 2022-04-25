import React, { useState } from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import DateFunction from "../DateFunction";
import { ENQUIRES_URL, LIGHT_AUTH } from "../../../constants/api";
import Select from "react-select";

const schema = yup.object().shape({
  title: yup.string().required("Please enter the title"),
  name: yup.string().required("Please enter your name"),
  email: yup.string(),
  // .required("Please enter your email address")
  // .email("Please enter a valid email address"),
  message: yup.string(),
  // .required("Please enter your message")
  // .min(10, "Your message must at be at least 10 characters"),
  from_date: yup.string(),
  to_date: yup.string(),
  phone: yup.number(),
});

export const SUBJECT = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5+", label: "5+" },
];

function EnquireForm() {
  const [submitted, setSubmitted] = useState(false);
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
    data = {
      status: "publish",
      title: data.title,
      fields: {
        comments: data.message,
        stay_title: data.title,
        name: data.name,
        email: data.email,
        from_date: data.from_date,
        to_date: data.to_date,
        how_many: data.how_many.value,
        phone: data.phone,
      },
    };
    console.log(data);
    setSubmitted(true);

    try {
      await axios.post(ENQUIRES_URL, data, {
        auth: LIGHT_AUTH,
      });
    } catch (error) {
      setServerError(error.toString());
    } finally {
      setSubmitted(false);
    }
  }

  return (
    <>
      {submitted}

      <form className="enquire-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          label="stay_title"
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
          name="how_many"
          style={{ height: "35px" }}
          control={control}
          render={({ field }) => (
            <Select
              placeholder="How many"
              defaultValue={{ value: 0, label: "How many" }}
              options={SUBJECT}
              {...field}
            />
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
        <input
          label="from_date"
          type="text"
          style={{ height: "35px" }}
          placeholder="from_date"
          {...register("from_date")}
        />
        <br />
        <input
          label="to_date"
          type="text"
          style={{ height: "35px" }}
          placeholder="to_date"
          {...register("to_date")}
        />
        <br />
        <textarea label="comments" placeholder="comments" {...register("message")} />
        <br />
        <br />
        <button type="submit">{submitted ? "sending.." : "send"}</button>
      </form>
    </>
  );
}

export default EnquireForm;
