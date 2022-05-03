import { css } from "styled-components";

// eksempel på en mixin
// eventuelt på flex-containere

export const Size = ({ height, maxHeight, maxWidth, width }) => css`
  block-size: ${height};
  inline-size: ${width};
  max-block-size: ${maxHeight};
  max-inline-size: ${maxWidth};
`;

// import { Size } from 'Mixins';

// const SomeComponent = styled.div`
//   ${Size({ height: '15rem', maxWidth: '50rem', width: '100%' });
// `;

const theme = {
  primaryColour: "#FC5156",
  SecondaryColour: "#301850",
  light: "#F2F0EB",
  body: "#1E1B21",
  primaryFont: "Roboto",
  secondaryFont: "Railway",
  backgroundColour: "white",
  success: "#92B76B",
  error: "#D11117",
  status: "#A1D1ED",
  warning: "#EE9F35",
};

export default theme;

export const size = {
  mobile: "375px",
  tablet: "768px",
  laptop: "992px",
  desktop: "1200px",
  desktop_large: "1400px",
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
  desktop_large: `(min-width: ${size.desktop_large})`,
};

// export const typography = {
//   overline: "10px",
//   button: "14px",
// };
