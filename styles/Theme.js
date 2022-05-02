const theme = {
  primaryColour: "#E92569",
  secondaryColour: "#767676",
  backgroundColour: "white",
  primaryFont: "Roboto",
  secondaryFont: "Railway",
  gradientBackground: "radial-gradient(#FFFFFF 40%, #E5E5E5 100%)",
  gradientCards: "radial-gradient(#FFFFFF 60%, #f9f9f9)",
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
