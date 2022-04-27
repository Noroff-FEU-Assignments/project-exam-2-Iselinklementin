import * as yup from "yup";
import axios from "axios";
import React from "react";
import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { LOGIN_URL } from "../../constants/api";
import AuthContext from "../../context/AuthContext";
import AlertBox from "../common/AlertBox";
import { schema } from "../../utils/schemaValidation/loginFormSchema";

function LoginForm() {
  const [submitting, setSumbitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const router = useRouter();

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
      const response = await axios.post(LOGIN_URL, data);
      setAuth(response.data);
      console.log(response.data);
      return router.push("/admin");
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSumbitting(false);
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {loginError && (
        <AlertBox type="danger">Wrong username or password. Please ensure you entered your correct details.</AlertBox>
      )}
      <fieldset disabled={submitting}>
        <Form.Group className="mb-3">
          <Form.Label>Username: </Form.Label> <br />
          <Form.Control name="username" placeholder="Username" {...register("username")} />
          {errors.username && (
            <AlertBox type="danger" className="mt-2">
              {errors.username.message}
            </AlertBox>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password: </Form.Label> <br />
          <Form.Control name="password" placeholder="Password" {...register("password")} type="password" />
          {errors.password && (
            <AlertBox type="danger" className="mt-2">
              {errors.password.message}
            </AlertBox>
          )}
        </Form.Group>

        <Button className="mt-3 mb-4" type="submit">
          {submitting ? "Logging in.." : "Login"}
        </Button>
      </fieldset>
    </Form>
  );
}

export default LoginForm;
