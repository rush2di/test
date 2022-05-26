import styles from "./styles.module.scss";

const { hotelcover, hotelcover__image } = styles;

const HotelCover = ({ title, price, imageSrc }) => {
  return (
    <div className={hotelcover}>
      <div className="align-center card--bordered d-flex elevation-sm-1 justify-between px-1-50 py-1">
        <div className="d-inline-block">
          <span className="color-dark font-weight-bold letter-spacing-100 txt-sm-caps">
            Hotel details
          </span>
          <h1 className="color-dark font-comp font-weight-medium mt-0-50 txt-h2">
            {title}
          </h1>
        </div>
        <div className="align-center color-comp d-flex">
          <span className="d-inline-block txt-h2">${price}</span>
          <span className="d-inline-block txt-h6">/night</span>
        </div>
      </div>
      <img
        className={hotelcover__image}
        src={imageSrc}
        alt={`${title} Image`}
      />
    </div>
  );
};

export default HotelCover;
