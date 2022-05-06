import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DateFunction from "components/common/functions/DateFunction";
import { CONTACT_URL, LIGHT_AUTH } from "constants/api";
import { schema } from "utils/schemaValidation/contactFormSchema";
import { Form } from "react-bootstrap";
import Alertbox from "components/common/alert/AlertBox";
import { StyledFeedbackContainer, StyledForm } from "./Form.styles";
import Icon, { icons } from "constants/icons";
import { StyledFormButton } from "components/common/buttons/Button.styles";

function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [count, setCount] = useState(0);

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
      title: data.subject,
      fields: {
        message: data.message,
        title: data.subject,
        name: data.name,
        email: data.email,
        date: DateFunction(),
      },
    };

    try {
      await axios.post(CONTACT_URL, data, {
        auth: LIGHT_AUTH,
      });

      // her må jeg få opp en ny boks som sier at meldingen er sent osv.
      // og at de eventuelt kan sende en ny beskjed.
    } catch (error) {
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
      {serverError && <Alertbox>Something went wrong.</Alertbox>}
      <fieldset disabled={submitting}>
        {/* Name  */}
        <Form.Group className="mt-3">
          <div className="d-flex align-items-center">
            <Icon icon={icons.map(icon => icon.user)} className="me-4" />
            <Form.Control type="text" placeholder="Name" className="mt-2" {...register("name")} />
          </div>
          {errors.name && (
            <StyledFeedbackContainer>
              <Icon icon={icons.map(icon => icon.error)} color="#D11117" className="warning-icon" />
              <Alertbox className="mt-2">{errors.name.message}</Alertbox>
            </StyledFeedbackContainer>
          )}
        </Form.Group>

        {/* Email  */}
        <Form.Group className="mt-3">
          <div className="d-flex align-items-center">
            <Icon icon={icons.map(icon => icon.email)} fontSize="25px" className="me-4" />
            <Form.Control
              type="email"
              placeholder="Email"
              className="mt-2"
              {...register("email")}
            />
          </div>
          {errors.email && (
            <StyledFeedbackContainer>
              <Icon icon={icons.map(icon => icon.error)} color="#D11117" className="warning-icon" />
              <Alertbox className="mt-2">{errors.email.message}</Alertbox>
            </StyledFeedbackContainer>
          )}
        </Form.Group>

        <Form.Group className="mt-3">
          <div className="d-flex align-items-center">
            <Icon icon={icons.map(icon => icon.text)} fontSize="25px" className="me-4" />

            <Form.Control
              type="text"
              placeholder="Subject"
              className="mt-2"
              {...register("subject")}
            />
          </div>
          {errors.subject && (
            <StyledFeedbackContainer>
              <Icon icon={icons.map(icon => icon.error)} color="#D11117" className="warning-icon" />
              <Alertbox className="mt-2">{errors.subject.message}</Alertbox>
            </StyledFeedbackContainer>
          )}
        </Form.Group>

        <Form.Group className="mt-3">
          <div className="text-area-container">
            <Icon icon={icons.map(icon => icon.chat)} fontSize="25px" className="me-4 mt-2" />
            <Form.Control
              as="textarea"
              rows={6}
              onKeyUp={e => setCount(e.target.value.length)}
              placeholder="Message"
              className="mt-2"
              {...register("message")}
            />
            <span className="counter">{count}/20</span>
          </div>

          {errors.message && (
            <StyledFeedbackContainer>
              <Icon
                icon={icons.map(icon => icon.error)}
                color="#D11117"
                className="warning-icon text-area-icon"
              />
              <Alertbox className="mt-2">{errors.message.message}</Alertbox>
            </StyledFeedbackContainer>
          )}
        </Form.Group>

        <StyledFormButton className="mb-4 mt-5" type="submit">
          {submitting ? "sending.." : "Send"}
        </StyledFormButton>

        {submitting && (
          <Alertbox type="success" className="mt-4 mb-4">
            Your message was sent
          </Alertbox>
        )}
      </fieldset>
    </StyledForm>
  );
}

export default ContactForm;
