import NextHead from "next/head";
import PropTypes from "prop-types";

export default function Head({ title = "" }) {
  return (
    <NextHead>
      <title>
        {title}
        {title ? " | " : ""}Holidaze
      </title>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}

Head.propTypes = {
  title: PropTypes.node,
};
