import PropTypes from "prop-types";

export default function Paragraph({ className, children }) {
  return <p className={className}>{children}</p>;
}

Paragraph.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
