import React, { useState } from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ENQUIRES_URL, LIGHT_AUTH } from "constants/api";
import Select from "react-select";
import { schema } from "utils/schemaValidation/enquireFormSchema";
import { Container, Form, Button } from "react-bootstrap";
import Alertbox from "components/common/Alertbox";
import Heading from "components/typography/Heading";

export const SUBJECT = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5+", label: "5+" },
];

export default function EnquireForm() {
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
    setSubmitting(true);

    try {
      await axios.post(ENQUIRES_URL, data, {
        auth: LIGHT_AUTH,
      });
    } catch (error) {
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {submitting}

      <Form className="enquire-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Form.Group className="mt-3">
          <Form.Label className="d-block mb-0">Title</Form.Label>
          <Form.Text className="text-muted">Denne skal komme automatisk</Form.Text>
          <Form.Control type="text" placeholder="Title" className="mt-2" {...register("title")} />
          {errors.title && (
            <Alertbox className="mt-2" type="danger">
              {errors.title.message}
            </Alertbox>
          )}
        </Form.Group>

        <Heading size="2">Who is traveling?</Heading>

        {/* Name  */}
        <Form.Group className="mt-3">
          <Form.Label className="d-block mb-0">Name</Form.Label>
          <Form.Text className="text-muted">Please insert your name</Form.Text>
          <Form.Control type="text" placeholder="Name" className="mt-2" {...register("name")} />
          {errors.name && (
            <Alertbox className="mt-2" type="danger">
              {errors.name.message}
            </Alertbox>
          )}
        </Form.Group>

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

        {/* Email  */}
        <Form.Group className="mt-3">
          <Form.Label className="d-block mb-0">Email</Form.Label>
          <Form.Text className="text-muted">Please insert a valid email address</Form.Text>
          <Form.Control type="email" placeholder="Email" className="mt-2" {...register("email")} />
          {errors.email && (
            <Alertbox className="mt-2" type="danger">
              {errors.email.message}
            </Alertbox>
          )}
        </Form.Group>

        {/* Phone  */}
        <Form.Group className="mt-3">
          <Form.Label className="d-block mb-0">Phone</Form.Label>
          <Form.Text className="text-muted">Please insert your phonenumber</Form.Text>
          <Form.Control type="number" placeholder="Name" className="mt-2" {...register("phone")} />
          {errors.name && (
            <Alertbox className="mt-2" type="danger">
              {errors.phone.message}
            </Alertbox>
          )}
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label className="d-block mb-0">from_date</Form.Label>
          <Form.Text className="text-muted">Please insert from_date</Form.Text>
          <Form.Control
            type="text"
            placeholder="from_date"
            className="mt-2"
            {...register("from_date")}
          />
          {errors.from_date && (
            <Alertbox className="mt-2" type="danger">
              {errors.from_date.message}
            </Alertbox>
          )}
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label className="d-block mb-0">to_date</Form.Label>
          <Form.Text className="text-muted">Please insert to_date</Form.Text>
          <Form.Control
            type="text"
            placeholder="to_date"
            className="mt-2"
            {...register("to_date")}
          />
          {errors.to_date && (
            <Alertbox className="mt-2" type="danger">
              {errors.to_date.message}
            </Alertbox>
          )}
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label className="d-block mb-0">Message</Form.Label>
          <Form.Text className="text-muted">
            Your message must at be at least 10 characters
          </Form.Text>
          <Form.Control
            as="textarea"
            rows={6}
            placeholder="Message"
            className="mt-2"
            {...register("message")}
          />
          {errors.message && (
            <Alertbox className="mt-2" type="danger">
              {errors.message.message}
            </Alertbox>
          )}
        </Form.Group>

        <Button type="submit" className="mt-4">
          {submitting ? "sending.." : "Send"}
        </Button>

        {submitting && (
          <Alertbox type="success" className="mt-4 mb-4">
            Your message was sent
          </Alertbox>
        )}
      </Form>
    </>
  );
}
