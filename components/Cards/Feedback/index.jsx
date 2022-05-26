import { joinClassNames } from "helpers/utils";
import styles from "./styles.module.scss";

const { feedback } = styles;

const FeedbackCard = ({ imgSrc, fullname, role, text }) => {
  return (
    <div className={joinClassNames([feedback, "card card--bordered elevation-sm-1"])}>
      <div className="align-center card__cover d-flex justify-center">
        <img src={imgSrc} alt={fullname} />
      </div>
      <div className="card__content txt-center pt-0">
        <span className="color-dark d-block font-comp txt-h3 font-weight-light">{fullname}</span>
        <span className="color-comp d-block font-weight-bold my-0-50 txt-btn txt-h6 txt-uppercase">{role}</span>
        <p className="txt">{text}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
