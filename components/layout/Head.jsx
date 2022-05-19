import NextHead from "next/head";
import PropTypes from "prop-types";

// husk å fyll inn på sidene

export default function Head({ title = "", content, keywords }) {
  return (
    <NextHead>
      <title>
        {title}
        {title ? " | " : ""}Holidaze
      </title>
      <meta name="description" content={content} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}

Head.propTypes = {
  title: PropTypes.node,
  content: PropTypes.string,
};
