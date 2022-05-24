import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";
import { Breadcrumb } from "react-bootstrap";

const StyledBreadcrumb = styled(Breadcrumb)`
  li {
    font-size: 12px;
    text-transform: uppercase;
  }
`;

export const Breadcrumbs = ({ link, linkName, title }) => {
  return (
    <StyledBreadcrumb>
      <li className="breadcrumb-item">
        <Link href={link}>{linkName}</Link>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        {title}
      </li>
    </StyledBreadcrumb>
  );
};

Breadcrumbs.propTypes = {
  link: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
