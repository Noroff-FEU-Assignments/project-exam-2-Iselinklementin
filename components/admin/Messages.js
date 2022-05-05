import axios from "axios";
import Alertbox from "components/common/Alertbox";
import Loader from "components/common/Loader";
import { CONTACT_URL } from "constants/api";
import { getMessages } from "lib/getMessages";
import React, { useEffect, useState } from "react";
import { Container, Tab, Tabs, Accordion, Spinner } from "react-bootstrap";

export default function Messages() {
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMessages() {
      try {
        const response = await axios.get(CONTACT_URL);
        if (response.status === 200) {
          // console.log(response);
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
    <Accordion defaultActiveKey="0" flush>
      {contact.map((item) => {
        count++;
        return (
          <Accordion.Item eventKey={count}>
            <Accordion.Header>{item.acf.title}</Accordion.Header>
            <Accordion.Body>
              <div key={item.acf.id}>
                <h3 key={item.acf.id}>{item.acf.title}</h3>
                <p>sent: {item.acf.date}</p>
                <p>message: {item.acf.message}</p>
                <p>sent from: {item.acf.email}</p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}

// export async function getStaticProps() {
//   const messages = await getMessages();
//   return { props: { messages } };
// }
