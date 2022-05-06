import * as yup from "yup";

export const schema = yup.object().shape({
  title: yup.string().required("Please enter the title"),
  description: yup
    .string()
    .required("Please enter your message")
    .min(10, "Your message must at be at least 10 characters"),
  check_in: yup.string(),
  checkout: yup.string(),
  price: yup.string(),
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
  images: yup.mixed(),
});
