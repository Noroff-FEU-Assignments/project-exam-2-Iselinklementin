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
        {contact.map((item) => {
          count++;
          console.log(item);
          // let received = JSON.stringify(item.acf.date);
          let received = item.acf.date;
          let thisisit = received.split(" ")[0];
          console.log(typeof thisisit);

          return (
            <Accordion.Item eventKey={count}>
              <Accordion.Header>
                {item.acf.title}
                // Nå viser den bare fredag
                <p className="date">{thisisit}</p>
                <Icon className="message-icon" icon={icons.map((icon) => icon.email)} />
              </Accordion.Header>
              <Accordion.Body className="d-flex">
                <Icon icon={icons.map((icon) => icon.chat)} className="me-3 mt-1" />
                <div key={item.acf.id}>
                  <Paragraph className="fw-bold">{item.acf.name}</Paragraph>
                  <Paragraph>Subject: {item.acf.subject}</Paragraph>
                  <Paragraph>
                    <span className="fw-bold">message:</span> {item.acf.message}
                  </Paragraph>
                  <Paragraph>
                    <span className="fw-bold">sent from:</span> {item.acf.email}
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
