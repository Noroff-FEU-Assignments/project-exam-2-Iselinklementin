import Icon, { icons } from "constants/icons";

// Filter icons

export default function FilterIcons({ includes, iconIncludes }) {
  let stayIcons = [];

  icons.map((icon) => {
    let keys = Object.keys(icon);
    if (includes && keys.includes(iconIncludes)) {
      stayIcons.push(icon);
    }
  });
  return <Icon icon={stayIcons.map((icon) => Object.entries(icon)[0][1])} className="me-2" fontSize="16px" />;
}
