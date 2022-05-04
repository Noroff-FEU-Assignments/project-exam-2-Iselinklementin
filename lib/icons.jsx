import { FaUser, FaShoppingBag, FaUserPlus, FaLock, FaCoins, FaBed, FaHeart } from "react-icons/fa";
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
import { IoMdImages, IoLogoNoSmoking, IoIosMore, IoIosMenu } from "react-icons/io";
import { IoChatbubblesSharp, IoBedSharp, IoLocationSharp } from "react-icons/io5";
import { RiHotelFill, RiImageFill, RiParkingBoxFill } from "react-icons/ri";
import { GrWheelchair } from "react-icons/gr";
import {
  BsFillTelephoneFill,
  BsStarFill,
  BsFillCalendarCheckFill,
  BsSearch,
  BsFilter,
  BsFillClockFill,
  BsFillArrowRightCircleFill,
  BsJustifyLeft,
} from "react-icons/bs";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";

export const icons = [
  {
    arrow: <BsFillArrowRightCircleFill />,
  },
  {
    burger: <IoIosMenu />,
  },
  {
    breakfast: <ImSpoonKnife />,
  },
  {
    filter: <BsFilter />,
  },
  {
    star: <BsStarFill />,
  },
  {
    title: <MdTextFields />,
  },
  {
    free_parking: <RiParkingBoxFill />,
  },
  {
    wifi: <MdWifi />,
  },
  {
    kitchen: <MdKitchen />,
  },
  {
    location: <IoLocationSharp />,
  },
  {
    pet_friendly: <MdPets />,
  },
  {
    swimming_pool: <MdPool />,
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
    bag: <FaShoppingBag />,
  },
  {
    search: <BsSearch />,
  },
  {
    check_in: <BsFillClockFill />,
  },
  {
    checkout: <BsFillClockFill />,
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
    handicap_friendly: <GrWheelchair />,
  },
  {
    apartment: <IoBedSharp />,
  },
  {
    no_smoking: <IoLogoNoSmoking />,
  },
];

const Icon = ({ icon, fontSize, color, className }) => {
  return (
    <>
      <IconContext.Provider value={{ style: { fontSize, color }, className }}>{icon}</IconContext.Provider>
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
  color: "#1E1B21",
};

export default Icon;

// <div style={{ paddingTop: "3px", display: "flex" }}>
