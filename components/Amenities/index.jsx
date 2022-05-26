import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { joinClassNames } from "helpers/utils";
import styles from "./styles.module.scss";

const { amenities, amenities__default, amenities__grid } = styles;

const Amenities = ({
  wifi = false,
  shower = false,
  support = false,
  towels = false,
  security = false,
  cleaning = false,
  grocery = false,
  nearShop = false,
  kitchen = false,
  doubleBed = false,
  smartLocker = false,
  transportation = false,
  includeText = false,
}) => {
  return (
    <div className={joinClassNames([amenities,"py-1 px-1-50 bg-white card--bordered elevation-sm-1 w-100"])}>
      <div className={includeText ? amenities__grid : amenities__default}>
        {wifi && (
          <AmenitiesIconWrapper
            icon={["fas", "wifi"]}
            text={includeText && "Free Wifi"}
          />
        )}
        {shower && (
          <AmenitiesIconWrapper
            icon={["fas", "bath"]}
            text={includeText && "Shower"}
          />
        )}
        {support && (
          <AmenitiesIconWrapper
            icon={["fas", "headset"]}
            text={includeText && "Costumer Support"}
          />
        )}
        {towels && (
          <AmenitiesIconWrapper
            icon={["fas", "scroll"]}
            text={includeText && "Towels"}
          />
        )}
        {security && (
          <AmenitiesIconWrapper
            icon={["fas", "lock"]}
            text={includeText && "24/7 Security"}
          />
        )}
        {cleaning && (
          <AmenitiesIconWrapper
            icon={["fas", "broom"]}
            text={includeText && "Room Services"}
          />
        )}
        {grocery && (
          <AmenitiesIconWrapper
            icon={["fas", "shopping-basket"]}
            text={includeText && "Close Markets"}
          />
        )}
        {nearShop && (
          <AmenitiesIconWrapper
            icon={["fas", "shopping-cart"]}
            text={includeText && "Near Public Shops"}
          />
        )}
        {kitchen && (
          <AmenitiesIconWrapper
            icon={["fas", "sink"]}
            text={includeText && "Personel Kitchen"}
          />
        )}
        {doubleBed && (
          <AmenitiesIconWrapper
            icon={["fas", "bed"]}
            text={includeText && "Double Bed"}
          />
        )}
        {smartLocker && (
          <AmenitiesIconWrapper
            icon={["fas", "key"]}
            text={includeText && "Smart Locked"}
          />
        )}
        {transportation && (
          <AmenitiesIconWrapper
            icon={["fas", "bus"]}
            text={includeText && "Transportation Services"}
          />
        )}
      </div>
    </div>
  );
};

const AmenitiesIconWrapper = ({ icon, text }) => {
  const wrapperStyle = !!text ? "d-flex align-start" : "d-flex mx-0-50";

  return (
    <div className={wrapperStyle}>
      <div className="d-flex align-center justify-center">
        <FontAwesomeIcon icon={icon} />
      </div>
      {!!text && <p className="ml-0-25">{text}</p>}
    </div>
  );
};

export default Amenities;
