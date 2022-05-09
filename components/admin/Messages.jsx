import axios from "axios";
import Alertbox from "components/common/alert/AlertBox";
import Loader from "components/common/loader/Loader";
import { CONTACT_URL } from "constants/api";
import { getMessages } from "lib/getMessages";
import React, { useEffect, useState } from "react";
import { Container, Tab, Tabs, Accordion, Spinner } from "react-bootstrap";
import { StyledAccordion } from "styles/pages/home/admin/StyledAccordion.styles";
import Icon, { icons } from "constants/icons";
import Paragraph from "components/typography/Paragraph";
import { RemoveWords } from "components/common/functions/RemoveWords";

export default function Messages() {
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMessages() {
      try {
        const response = await axios.get(CONTACT_URL);
        if (response.status === 200) {
          setContact(response.data);
        } else {
          setError("This wasnt good");
        }
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    getMessages();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Alertbox className="mt-2" type="danger">
        {error}
      </Alertbox>
    );
  }

  let count = 0;

  return (
    <StyledAccordion>
      <Accordion defaultActiveKey="0" flush>
        {contact.map(item => {
          count++;
          let received = item.acf.date;

          return (
            <Accordion.Item eventKey={count}>
              <Accordion.Header>
                {item.acf.title}
                <div className="received-container">
                  <p className="date">{RemoveWords(received)}</p>
                  <Icon className="ms-3" icon={icons.map(icon => icon.email)} />
                </div>
              </Accordion.Header>
              <Accordion.Body className="d-flex">
                <Icon icon={icons.map(icon => icon.chat)} className="me-3" fontSize="18px" />
                <div className="text-container">
                  <Paragraph className="fw-bold">{item.acf.name}</Paragraph>
                  <Paragraph>
                    <span>Message:</span> {item.acf.message}
                  </Paragraph>
                  <Paragraph>
                    <span>Email:</span> {item.acf.email}
                  </Paragraph>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </StyledAccordion>
  );
}

// export async function getStaticProps() {
//   const messages = await getMessages();
//   return { props: { messages } };
// }
