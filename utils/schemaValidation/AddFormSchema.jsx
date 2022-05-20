import * as yup from "yup";

// fjern room info og hotel rom hvis jeg ikke validerer

export const schema = yup.object().shape({
  title: yup.string().required("Please enter the title"),
  description: yup
    .string()
    .required("Please enter your message")
    .min(20, "Description must at be at least 20 characters"),
  price: yup.number().typeError("Price must be a number").required("Please add a price"),
  stay_type: yup.string().required("Select a stay type").oneOf(["Hotel", "Apartment", "Bed & Breakfast"]),
  full_address: yup.string().required("Fill in address"),
  short_description: yup.string().required("Enter location"),
  nice_text: yup.string().required("Fill in a short description").min(20, "Minimum 20 characters"),
  stars: yup.string().required("Select a the review").oneOf(["3 stars", "4 stars", "5 stars"]),
  // room_info: yup.string(),
  // featured: yup.boolean(),
  // wifi: yup.boolean(),
  // kitchen: yup.boolean(),
  // free_parking: yup.boolean(),
  // breakfast: yup.boolean(),
  // swimming_pool: yup.boolean(),
  // pet_friendly: yup.boolean(),
  // no_smoking: yup.boolean(),
  // handicap_friendly: yup.boolean(),
  // check_in: yup.string().required("Enter a check-in time"),
  // checkout: yup.string().required("Enter a checkout time"),
  // images: yup.mixed().required("Add images"),
  // checkboxes: yup.boolean().oneOf([true], "Must include something"),
  // checkboxes = (value) => {
  //   if (value == null) {
  //     return "Please, choose a value";
  //   }
  //   return true;
  // },
});
