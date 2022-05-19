import React, { useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import Head from "components/layout/Head";
import Layout from "components/layout/Layout";
import Heading from "components/typography/Heading";
import Messages from "components/pages/admin/Messages";
import Enquires from "components/pages/admin/Enquires";
import Paragraph from "components/typography/Paragraph";
import { AddEnquireBtn } from "components/common/buttons/AddEnqurieBtn";
import { StyledTabs } from "styles/pages/admin/StyledTabs.styles";
import styled from "styled-components";
import { device } from "styles/global/ThemeConfig";
import { StyledContainer } from "styles/StyledContainer";

const StyledTextContainer = styled.div`
  text-align: center;
  padding: 1.5rem;
  max-width: 960px;
  margin: auto auto 3rem auto;

  p {
    max-width: 450px;
    margin: auto auto 2rem auto;
  }

  .add {
    text-transform: uppercase;
    font-size: 14px;
  }

  @media ${device.tablet} {
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6rem;
    margin-top: 6rem;
    padding: 0;

    p {
      margin: initial;
    }
  }
`;

function admin() {
  const [value, setValue] = useState([]);

  const handleClick = (e) => {
    setValue(<Enquires />);
  };

  return (
    <Layout>
      <Head title="Admin" />
      <StyledContainer className="mt-5 py-4">
        <Container>
          <StyledTextContainer>
            <div>
              <Heading size="1">Welcome Admin</Heading>

              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </Paragraph>
            </div>

            <div className="text-center">
              <AddEnquireBtn />
              <Paragraph className="add">Add stay</Paragraph>
            </div>
          </StyledTextContainer>

          <StyledTabs>
            <Tabs defaultActiveKey="messages" onClick={handleClick}>
              <Tab eventKey="messages" title="Messages" value="0">
                <Messages />
              </Tab>
              <Tab eventKey="enquires" title="Enquires" value="1">
                {value}
              </Tab>
            </Tabs>
          </StyledTabs>
        </Container>
      </StyledContainer>
    </Layout>
  );
}

export default admin;
