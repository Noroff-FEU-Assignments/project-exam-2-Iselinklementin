import * as yup from "yup";

export const schema = yup.object().shape({
  title: yup.string().required("Please enter the title"),
  name: yup.string().required("Please enter your name"),
  email: yup.string().required("Please enter your email address").email("Please enter a valid email address"),
  message: yup.string().required("Please enter your message").min(10, "Your message must at be at least 10 characters"),
  from_date: yup.string(),
  to_date: yup.string(),
  phone: yup.number(),
});
