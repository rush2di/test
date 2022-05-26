import { joinClassNames } from "helpers/utils";
import Image from "next/image";
import styles from "./styles.module.scss";

const { features } = styles;

const FeaturesCard = ({ imgSrc, index, title, text }) => {
  return (
    <div
      className={joinClassNames([
        "card card--bordered elevation-sm-1",
        features,
      ])}
    >
      <div className="card__cover">
        <div className="next-img-wrapper">
          <Image src={imgSrc} alt={title} layout="fill" />
        </div>
        <span className="color-label d-block font-weight-bold txt-display-main">
          {index}
        </span>
      </div>
      <div className="card__content">
        <h3 className="color-comp font-comp font-weight-light txt-capitalize txt-h4">
          {title}
        </h3>
        <p className="txt">{text}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
