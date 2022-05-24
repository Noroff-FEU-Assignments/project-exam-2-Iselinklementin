import Messages from "./Messages";
import { StyledTabs } from "../../../styles/pages/admin/StyledTabs.styled";
import { Tab, Tabs } from "react-bootstrap";

export const AdminTabs = ({ value, handleClick }) => {
  return (
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
  );
};
