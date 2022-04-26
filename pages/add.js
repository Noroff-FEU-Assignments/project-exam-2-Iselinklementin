import React, { useState, Component, useContext } from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select, { components } from "react-select";
import Layout from "../components/layout/Layout";
import useAxios from "../hooks/useAxios";
import { API_URL } from "../constants/api";
import AuthContext from "../context/AuthContext";
import Checkbox from "../components/common/Checkbox";

const schema = yup.object().shape({
  title: yup.string().required("Please enter the title"),
  // .required("Please enter your email address")
  // .email("Please enter a valid email address"),
  description: yup.string(),
  // .required("Please enter your message")
  // .min(10, "Your message must at be at least 10 characters"),
  check_in: yup.string(),
  checkout: yup.string(),
  price: yup.number(),
  full_address: yup.string(),
  short_description: yup.string(),
  text: yup.string(),
  room_info: yup.string(),
  featured: yup.boolean(),
  wifi: yup.boolean(),
  kitchen: yup.boolean(),
  free_parking: yup.boolean(),
  breakfast: yup.boolean(),
  swimming_pool: yup.boolean(),
  pet_friendly: yup.boolean(),
  no_smoking: yup.boolean(),
  handicap_friendly: yup.boolean(),
});

const STAYS = [
  { value: "Hotel", label: "Hotel" },
  { value: "Apartment", label: "Apartment" },
  { value: "B&B", label: "B&B" },
];

const REVIEW = [
  { value: "3 stars", label: "3 stars" },
  { value: "4 stars", label: "4 stars" },
  { value: "5 stars", label: "5 stars" },
];

const ROOMS = [
  { value: "Superior Room - Queensize bed", label: "Superior Room - Queensize bed" },
  {
    value: "Superior Double Room - 1 large double bed",
    label: "Superior Double Room - 1 large double bed",
  },
  { value: "Standard Twin Room - 2 single beds", label: "Standard Twin Room - 2 single beds" },
  { value: "Standard Room - 1 double bed", label: "Standard Room - 1 double bed" },
];

function add() {
  const [submitted, setSubmitted] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);

  let http = useAxios();

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
        title: data.title,
        stay_description: data.description,
        price: data.price,
        featured: data.featured,
        address: {
          full_address: data.full_address,
          short_description: data.short_description,
        },
        nice_to_know: {
          check_in: data.check_in,
          checkout: data.checkout,
          nice_text: data.text,
          handicap_friendly: data.handicap_friendly,
          no_smoking: data.no_smoking,
        },
        room: {
          room_info: data.room_info,
          room_type: data.room_type.value,
          stay_type: data.stay_type.value,
        },
        stars: data.stars.value,
        stay_includes: {
          wifi: data.wifi,
          kitchen: data.kitchen,
          free_parking: data.free_parking,
          breakfast: data.breakfast,
          swimming_pool: data.swimming_pool,
          pet_friendly: data.pet_friendly,
        },
      },
    };
    console.log(data);
    setSubmitted(true);

    try {
      await http.post(API_URL, data);
    } catch (error) {
      setServerError(error.toString());
    } finally {
      setSubmitted(false);
    }
  }

  return (
    <Layout>
      {submitted}

      <form className="add-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          label="stay_title"
          type="text"
          style={{ height: "35px" }}
          placeholder="title"
          {...register("title")}
        />
        <br />
        <input
          label="price"
          type="text"
          style={{ height: "35px" }}
          placeholder="price"
          {...register("price")}
        />
        <br />
        <textarea label="description" placeholder="description" {...register("description")} />
        <br />
        <br />
        <input
          label="full_address"
          type="text"
          style={{ height: "35px" }}
          placeholder="full_address"
          {...register("full_address")}
        />
        <br />
        <input
          label="short_description"
          type="text"
          style={{ height: "35px" }}
          placeholder="short_description"
          {...register("short_description")}
        />
        <br />
        <input
          label="check_in"
          type="text"
          style={{ height: "35px" }}
          placeholder="check_in"
          {...register("check_in")}
        />
        <br />
        <input
          label="checkout"
          type="text"
          style={{ height: "35px" }}
          placeholder="checkout"
          {...register("checkout")}
        />
        <br />
        <input
          label="text"
          type="text"
          style={{ height: "35px" }}
          placeholder="text"
          {...register("text")}
        />
        <br />
        <input
          label="room_info"
          type="text"
          style={{ height: "35px" }}
          placeholder="room_info"
          {...register("room_info")}
        />
        <br />
        <Controller
          name="room_type"
          style={{ height: "35px" }}
          control={control}
          render={({ field }) => (
            <Select
              name="room_type"
              options={ROOMS}
              defaultValue={{ value: "0", label: "Type of room" }}
              {...field}
            />
          )}
        />
        <br />
        <Controller
          name="stay_type"
          style={{ height: "35px" }}
          control={control}
          render={({ field }) => (
            <Select
              name="stay_type"
              options={STAYS}
              defaultValue={{ value: "0", label: "Stay type" }}
              {...field}
            />
          )}
        />
        <br />
        <Controller
          name="stars"
          style={{ height: "35px" }}
          control={control}
          render={({ field }) => (
            <Select
              name="stars"
              options={REVIEW}
              defaultValue={{ value: "0", label: "How many stars" }}
              {...field}
            />
          )}
        />
        <br />
        <input type="checkbox" name="featured" {...register("featured")} />
        <label htmlFor="featured">Featured</label>
        <input type="checkbox" name="wifi" {...register("wifi")} />
        <label htmlFor="wifi">Wifi</label>
        <input type="checkbox" name="kitchen" {...register("kitchen")} />
        <label htmlFor="kitchen">kitchen</label>
        <input type="checkbox" name="free_parking" {...register("free_parking")} />
        <label htmlFor="free_parking">free_parking</label>
        <input type="checkbox" name="breakfast" {...register("breakfast")} />
        <label htmlFor="breakfast">breakfast</label>
        <input type="checkbox" name="swimming_pool" {...register("swimming_pool")} />
        <label htmlFor="swimming_pool">swimming_pool</label>
        <input type="checkbox" name="pet_friendly" {...register("pet_friendly")} />
        <label htmlFor="pet_friendly">pet_friendly</label>
        <input type="checkbox" name="no_smoking" {...register("no_smoking")} />
        <label htmlFor="no_smoking">no_smoking</label>
        <input type="checkbox" name="handicap_friendly" {...register("handicap_friendly")} />
        <label htmlFor="handicap_friendly">handicap_friendly</label>

        <br />
        <br />
        <button type="submit">{submitted ? "sending.." : "send"}</button>
      </form>
    </Layout>
  );
}

export default add;
