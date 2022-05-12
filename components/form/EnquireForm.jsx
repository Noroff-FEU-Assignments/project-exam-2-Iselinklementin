import React, { useState } from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { ENQUIRES_URL, LIGHT_AUTH } from "constants/api";
import Select from "react-select";
import { schema } from "utils/schemaValidation/enquireFormSchema";
import { Form } from "react-bootstrap";
import Alertbox from "components/common/alert/AlertBox";
import { StyledFeedbackContainer, StyledForm } from "./Form.styles";
import Icon, { icons } from "constants/icons";
import { StyledFormButton } from "components/common/buttons/Button.styles";
import DateFunction from "components/common/functions/DateFunction";
import { StyledParagraphColoured } from "components/typography/Paragraph";
import { RemoveLastWord } from "components/common/functions/RemoveWords";
import Heading from "components/typography/Heading";

// PHONE - må sjekke for nummer
// TEXTAREA - skift font inni
// SELECT - endre styling og gi advarsel
// Gi tilbakemelding når sendt, fjern skjema

export const SUBJECT = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5+", label: "5+" },
];

export default function EnquireForm({ title, room, type }) {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [count, setCount] = useState(0);

  let today = DateFunction();

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
        room: data.room,
        date_received: DateFunction(),
        type_of_stay: data.stay_type,
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

      <StyledForm className="enquire-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Form.Control type="hidden" placeholder="Title" value={title} className="mt-2" {...register("title")} />
        <Form.Control type="hidden" placeholder="Type" value={type} className="mt-2" {...register("stay_type")} />
        <Form.Control type="hidden" placeholder="Room" value={room} className="mt-2" {...register("room")} />

        {/* Name  */}
        <Form.Group className="mt-3">
          <div className="d-flex align-items-center">
            <Icon icon={icons.map((icon) => icon.user)} className="me-4" />
            <Form.Control type="text" placeholder="Name" className="mt-2" {...register("name")} />
          </div>
          {errors.name && (
            <StyledFeedbackContainer>
              <Icon icon={icons.map((icon) => icon.error)} color="#D11117" className="warning-icon" />
              <Alertbox className="mt-2">{errors.name.message}</Alertbox>
            </StyledFeedbackContainer>
          )}
        </Form.Group>
        {/* Phone  */}
        <Form.Group className="mt-3">
          <div className="d-flex align-items-center">
            <Icon icon={icons.map((icon) => icon.phone)} className="me-4" />
            <Form.Control type="text" placeholder="Phone" className="mt-2" {...register("phone")} />
          </div>
          {errors.name && (
            <StyledFeedbackContainer>
              <Icon icon={icons.map((icon) => icon.error)} color="#D11117" className="warning-icon" />
              <Alertbox className="mt-2">{errors.phone.message}</Alertbox>
            </StyledFeedbackContainer>
          )}
        </Form.Group>
        {/* Email  */}
        <Form.Group className="mt-3">
          <div className="d-flex align-items-center">
            <Icon icon={icons.map((icon) => icon.email)} fontSize="25px" className="me-4" />
            <Form.Control type="email" placeholder="Email" className="mt-2" {...register("email")} />
          </div>
          {errors.email && (
            <StyledFeedbackContainer>
              <Icon icon={icons.map((icon) => icon.error)} color="#D11117" className="warning-icon" />
              <Alertbox className="mt-2">{errors.email.message}</Alertbox>
            </StyledFeedbackContainer>
          )}
        </Form.Group>

        <Form.Group className="mt-3">
          <div className="d-flex align-items-center">
            <Icon icon={icons.map((icon) => icon.userplus)} fontSize="25px" className="me-4" />
            <Controller
              name="how_many"
              control={control}
              render={({ field }) => (
                <Select
                  className="select"
                  classNamePrefix="react-select"
                  defaultValue={{ value: 0, label: "Persons" }}
                  // defaultInputValue="Persons"
                  options={SUBJECT}
                  {...field}
                />
              )}
            />
          </div>
        </Form.Group>
        <Form.Group className="mt-3">
          <div className="text-area-container">
            <Icon icon={icons.map((icon) => icon.chat)} fontSize="25px" className="me-4" />
            <Form.Control
              as="textarea"
              rows={6}
              placeholder="Comments"
              onKeyUp={(e) => setCount(e.target.value.length)}
              className="mt-2"
              {...register("message")}
            />
            <span className="counter">{count}/20</span>
          </div>
          {errors.message && (
            <StyledFeedbackContainer>
              <Icon icon={icons.map((icon) => icon.error)} color="#D11117" className="warning-icon" />
              <Alertbox className="mt-2">{errors.message.message}</Alertbox>
            </StyledFeedbackContainer>
          )}
        </Form.Group>

        <StyledParagraphColoured className="mt-5">Date</StyledParagraphColoured>
        <Heading size="2">{RemoveLastWord(today)}</Heading>

        <div className="d-flex align-items-center mt-3 justify-content-between">
          <Icon icon={icons.map((icon) => icon.calendar)} fontSize="20px" className="me-3" />
          <Form.Group className="mt-3">
            <Form.Control type="text" placeholder="from_date" className="mt-2" {...register("from_date")} />
            {errors.from_date && (
              <StyledFeedbackContainer>
                <Alertbox className="mt-2">{errors.to_date.message}</Alertbox>
              </StyledFeedbackContainer>
            )}
          </Form.Group>

          <div className="mx-2 d-flex align-items-center justify-content-center"> - </div>

          <Form.Group className="mt-3">
            <Form.Control type="text" placeholder="to_date" className="mt-2" {...register("to_date")} />
            {errors.to_date && (
              <StyledFeedbackContainer>
                <Alertbox className="mt-2">{errors.to_date.message}</Alertbox>
              </StyledFeedbackContainer>
            )}
          </Form.Group>
        </div>
        <StyledFormButton className="mb-4 mt-5" type="submit">
          <Icon icon={icons.map((icon) => icon.bag)} color="white" fontSize="16px" className="me-2" />
          {submitting ? "sending enquire.." : "Enquire"}
        </StyledFormButton>
        {submitting && (
          <Alertbox type="success" className="mt-4 mb-4">
            Your message was sent
          </Alertbox>
        )}
      </StyledForm>
    </>
  );
}
