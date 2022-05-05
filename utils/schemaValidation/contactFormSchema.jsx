import * as yup from "yup";

export const schema = yup.object().shape({
  title: yup.string().required("Please enter your name").min(3, "Your name must at be at least 3 characters"),
  name: yup.string().required("Please enter your name").min(3, "Your name must at be at least 3 characters"),
  email: yup.string().required("Please enter your email address").email("Please enter a valid email address"),
  subject: yup.string().required("Please enter your message").min(2, "Your subject must at be at least 2 characters"),
  message: yup.string().required("Please enter your message").min(10, "Your message must at be at least 10 characters"),
});
