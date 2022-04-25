import * as yup from "yup";
import axios from "axios";
import AuthContext from "../../../context/AuthContext";
import { BASE_URL, TOKEN_PATH } from "../../../constants/api";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export default function Login() {
  const [submitting, setSumbitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  // const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [auth, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSumbitting(true);
    setLoginError(null);

    try {
      const response = await axios.post(url, data);
      // return router.push("/admin");
      setAuth(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSumbitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset disabled={submitting}>
        <label>Username: </label> <br />
        <input name="username" placeholder="Username" {...register("username")} />
        <label>Password: </label> <br />
        <input name="password" placeholder="Password" {...register("password")} type="password" />
        <button type="submit">{submitting ? "Logging in.." : "Login"}</button>
      </fieldset>
    </form>
  );
}
