import { FaUser, FaUserPlus, FaLock, FaCoins, FaBed, FaHeart, FaPlus } from "react-icons/fa";
import {
  MdEmail,
  MdShortText,
  MdError,
  MdCheckCircle,
  MdPool,
  MdPets,
  MdKitchen,
  MdWifi,
  MdTextFields,
} from "react-icons/md";
import { HiPlusSm } from "react-icons/hi";
import { ImSpoonKnife } from "react-icons/im";
import { IoMdImages, IoLogoNoSmoking, IoIosMore } from "react-icons/io";
import { GrTextAlignFull } from "react-icons/gr";
import { IoChatbubblesSharp, IoBedSharp, IoLocationSharp } from "react-icons/io5";
import { RiHotelFill, RiImageFill, RiParkingBoxFill } from "react-icons/ri";

import {
  BsFillTelephoneFill,
  BsFillCalendarCheckFill,
  BsFillBagPlusFill,
  BsSearch,
  BsFillClockFill,
  BsTextLeft,
  BsJustifyLeft,
  BsPlus,
  BsCheckCircleFill,
} from "react-icons/bs";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";

export const icons = [
  {
    title: <MdTextFields />,
  },
  {
    parking: <RiParkingBoxFill />,
  },
  {
    wifi: <MdWifi />,
  },
  {
    eat: <ImSpoonKnife />,
  },
  {
    kitchen: <MdKitchen />,
  },
  {
    location: <IoLocationSharp />,
  },
  {
    pet: <MdPets />,
  },
  {
    pool: <MdPool />,
  },
  {
    check: <MdCheckCircle />,
  },
  {
    error: <MdError />,
  },
  {
    more: <IoIosMore />,
  },
  {
    plus: <HiPlusSm />,
  },
  {
    images: <IoMdImages />,
  },
  {
    image: <RiImageFill />,
  },
  {
    heart: <FaHeart />,
  },
  {
    text: <BsJustifyLeft />,
  },
  {
    shortText: <MdShortText />,
  },
  {
    email: <MdEmail />,
  },
  {
    user: <FaUser />,
  },
  {
    phone: <BsFillTelephoneFill />,
  },
  {
    userplus: <FaUserPlus />,
  },
  {
    calendar: <BsFillCalendarCheckFill />,
  },
  {
    bag: <BsFillBagPlusFill />,
  },
  {
    search: <BsSearch />,
  },
  {
    clock: <BsFillClockFill />,
  },
  {
    lock: <FaLock />,
  },
  {
    chat: <IoChatbubblesSharp />,
  },
  {
    price: <FaCoins />,
  },
  {
    bed: <FaBed />,
  },
  {
    hotel: <RiHotelFill />,
  },
  {
    apartment: <IoBedSharp />,
  },
  {
    smoking: <IoLogoNoSmoking />,
  },
];

const Icon = ({ icon, fontSize, color, className }) => {
  return (
    <>
      <IconContext.Provider value={{ style: { fontSize, color }, className }}>
        <div>{icon}</div>
      </IconContext.Provider>
    </>
  );
};

Icon.propTypes = {
  icon: PropTypes.node.isRequired,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

Icon.defaultProps = {
  fontSize: "20px",
  color: "black",
};

export default Icon;
