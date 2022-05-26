import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { joinClassNames } from "helpers/utils";
import styles from "./styles.module.scss";

const { addhotel } = styles;

const AddHotelCard = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={joinClassNames([
        "card card--bordered elevation-sm-1 btn--naked w-100 h-100",
        addhotel,
      ])}
    >
      <div className="m-auto px-1-50">
        <div>
          <FontAwesomeIcon icon={["fas", "clipboard-list"]} />
        </div>
        <span className="txt font-weight-medium color-comp txt-uppercase mt-1-50 d-inline-block">
          {text}
        </span>
      </div>
    </button>
  );
};

export default AddHotelCard;
