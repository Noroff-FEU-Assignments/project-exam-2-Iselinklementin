import PropTypes from "prop-types";

export default function Heading({ size = "1", className, children, fontSize }) {
  const VariableHeading = `h${size}`;
  return (
    <VariableHeading style={{ fontSize }} className={className}>
      {children}
    </VariableHeading>
  );
}

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
  fontSize: PropTypes.string,
};
