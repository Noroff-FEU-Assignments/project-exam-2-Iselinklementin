import axios from "axios";
import React, { useState } from "react";
import { Container, Tab, Tabs, Accordion } from "react-bootstrap";
import Head from "components/layout/Head";
import Layout from "components/layout/Layout";
import Heading from "components/typography/Heading";
import Messages from "components/admin/Messages";
import Enquires from "components/admin/Enquires";
import Paragraph from "components/typography/Paragraph";
import { AddEnquireBtn } from "components/common/buttons/AddEnqurieBtn";
import { StyledTabs } from "styles/pages/home/admin/StyledTabs.styles";

function admin() {
  const [value, setValue] = useState([]);

  const doThis = (e) => {
    setValue(<Enquires />);
  };

  return (
    <Layout>
      <Head title="Admin" />
      <Container>
        <div className="text-center p-2 mb-4">
          <Heading className="mt-5" size="1">
            Welcome Admin
          </Heading>

          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </Paragraph>

          <AddEnquireBtn />
        </div>
        <StyledTabs>
          <Tabs defaultActiveKey="messages" className="mb-3" onClick={doThis}>
            <Tab eventKey="messages" title="Messages" value="0">
              <Messages />
            </Tab>
            <Tab eventKey="enquires" title="Enquires" value="1">
              {value}
            </Tab>
          </Tabs>
        </StyledTabs>
      </Container>
    </Layout>
  );
}

export default admin;
