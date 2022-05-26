import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { joinClassNames } from "helpers/utils";
import { defaultAmenities } from "./constants";
import Amenities from "components/Amenities";

import styles from "./styles.module.scss";

const { booking, booking__amenities, booking__text } = styles;

const BookingCard = ({
  id,
  hasLink = false,
  amenities = defaultAmenities,
  imgSrc,
  title,
  text,
  price,
  handleDelete,
}) => {
  return (
    <CardWrapper id={id} hasLink={hasLink}>
      <div className="card__cover card__cover--overlayed">
        <img src={imgSrc} alt={title} />
        <div />
      </div>
      <div className={booking__amenities}>
        <Amenities {...amenities} />
      </div>
      <div className="card__content">
        <h3 className="txt-h3 font-weight-normal font-comp color-darktxt-capitalize">
          {title}
        </h3>
        <div className={joinClassNames(["my-0-50", booking__text])}>
          <p className="txt">{text}</p>
        </div>
        {!!handleDelete ? (
          <AdminButtons handleDelete={() => handleDelete(id)} id={id} />
        ) : (
          <DefaultButtons price={price} id={id} />
        )}
      </div>
    </CardWrapper>
  );
};

const CardWrapper = ({ id, hasLink = false, children }) => {
  if (hasLink) {
    return (
      <Link href={`/booking/hotel/${id}`}>
        <a
          className={joinClassNames([
            "card card--bordered elevation-sm-1 h-100 w-100",
            booking,
          ])}
        >
          {children}
        </a>
      </Link>
    );
  }

  return (
    <div
      className={joinClassNames([
        "card card--bordered elevation-sm-1 h-100 w-100",
        booking,
      ])}
    >
      {children}
    </div>
  );
};

const DefaultButtons = ({ id, price }) => {
  return (
    <div className="d-flex align-center justify-between mt-1">
      <p className="color-comp font-weight-medium txt-h6">${price}/Night</p>
      <Link href={`hotels/booking/${id}`}>
        <a className="color-muted font-weight-medium txt-h6">Booking Now</a>
      </Link>
    </div>
  );
};

const AdminButtons = ({ id, handleDelete }) => {
  return (
    <div className="d-flex align-center justify-between mt-1">
      <Link href={`/admin/hotels/edit/${id}`}>
        <a className="btn btn--bg-success btn--flex-between color-light w-100">
          <span className="d-block txt-align-start w-100">Edite</span>
          <FontAwesomeIcon icon={["fas", "edit"]} style={{ height: 16 }} />
        </a>
      </Link>
      <button
        onClick={handleDelete}
        className="btn btn--flex-between btn--bg-danger w-100"
      >
        <span className="d-block">Delete</span>
        <FontAwesomeIcon icon={["fas", "trash"]} style={{ height: 16 }} />
      </button>
    </div>
  );
};

export default BookingCard;
