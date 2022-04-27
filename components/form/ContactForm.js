import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import DateFunction from "../common/DateFunction";
import { CONTACT_URL, LIGHT_AUTH } from "../../constants/api";
import { schema } from "../../utils/schemaValidation/contactFormSchema";
import { Form, Button } from "react-bootstrap";
import AlertBox from "../common/AlertBox";

function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);

    data = {
      status: "publish",
      title: data.title,
      fields: {
        message: data.message,
        title: data.title,
        name: data.name,
        subject: data.subject,
        email: data.email,
        date: DateFunction(),
      },
    };

    try {
      await axios.post(CONTACT_URL, data, {
        auth: LIGHT_AUTH,
      });
    } catch (error) {
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {serverError && <AlertBox type="danger">Something went wrong.</AlertBox>}
      <fieldset disabled={submitting}>
        {/* Title  */}
        <Form.Group className="mt-3">
          <Form.Label className="d-block mb-0">Title</Form.Label>
          <Form.Text className="text-muted">Please insert a title</Form.Text>
          <Form.Control type="text" placeholder="Title" className="mt-2" {...register("title")} />
          {errors.title && (
            <AlertBox className="mt-2" type="danger">
              {errors.title.message}
            </AlertBox>
          )}
        </Form.Group>

        {/* Name  */}
        <Form.Group className="mt-3">
          <Form.Label className="d-block mb-0">Name</Form.Label>
          <Form.Text className="text-muted">Please insert your name</Form.Text>
          <Form.Control type="text" placeholder="Name" className="mt-2" {...register("name")} />
          {errors.name && (
            <AlertBox className="mt-2" type="danger">
              {errors.name.message}
            </AlertBox>
          )}
        </Form.Group>

        {/* Email  */}
        <Form.Group className="mt-3">
          <Form.Label className="d-block mb-0">Email</Form.Label>
          <Form.Text className="text-muted">Please insert a valid email address</Form.Text>
          <Form.Control type="email" placeholder="Email" className="mt-2" {...register("email")} />
          {errors.email && (
            <AlertBox className="mt-2" type="danger">
              {errors.email.message}
            </AlertBox>
          )}
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label className="d-block mb-0">Subject</Form.Label>
          <Form.Text className="text-muted">Please insert your subject</Form.Text>
          <Form.Control type="text" placeholder="Subject" className="mt-2" {...register("subject")} />
          {errors.subject && (
            <AlertBox className="mt-2" type="danger">
              {errors.subject.message}
            </AlertBox>
          )}
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label className="d-block mb-0">Message</Form.Label>
          <Form.Text className="text-muted">Your message must at be at least 10 characters</Form.Text>
          <Form.Control as="textarea" rows={6} placeholder="Message" className="mt-2" {...register("message")} />
          {errors.message && (
            <AlertBox className="mt-2" type="danger">
              {errors.message.message}
            </AlertBox>
          )}
        </Form.Group>

        <Button type="submit" className="mt-4">
          {submitting ? "sending.." : "Send"}
        </Button>

        {submitting && (
          <AlertBox type="success" className="mt-4 mb-4">
            Your message was sent
          </AlertBox>
        )}
      </fieldset>
    </Form>
  );
}

export default ContactForm;