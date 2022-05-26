import { joinClassNames } from "helpers/utils";
import styles from "./styles.module.scss";

const { intro } = styles;

const IntroCard = ({ isDark = false, title, text, imgSrc }) => {
  const wrapperStyle = isDark
    ? joinClassNames([intro, "card card--bordered elevation-sm-1 w-100 bg-dark"])
    : joinClassNames([intro, "card card--bordered elevation-sm-1 w-100 bg-white"]);

  return (
    <div className={wrapperStyle}>
      <div className="align-center card__cover d-flex justify-center">
        <img src={imgSrc} alt={title} className="mb-0" />
      </div>
      <div className="card__content txt-center pt-0 mt-auto mb-1">
        <span className="color-comp d-block font-comp txt-h3 font-weight-light">
          {title}
        </span>
        <p className="txt">{text}</p>
      </div>
    </div>
  );
};

export default IntroCard;
