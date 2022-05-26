import moment from "moment";
import Link from "next/link";
import { joinClassNames } from "helpers/utils";
import styles from "./styles.module.scss";

const {
  mailenquiry__wrapper,
  mailenquiry__name,
  mailenquiry__dateRange,
  mailenquiry__guests,
  mailenquiry__date,
  mailenquiry__opened,
  mailenquiry__notOpened,
} = styles;

const EnquiryRow = ({ id, name, checkin, checkout, guests, date, isOpened }) => {
  const wrapperStyles = isOpened
    ? joinClassNames([mailenquiry__wrapper, mailenquiry__opened])
    : joinClassNames([mailenquiry__wrapper, mailenquiry__notOpened]);

  return (
    <Link href={`/admin/enquiries/${id}`}>
      <a className={wrapperStyles}>
        <div className={joinClassNames(["font-weight-bold", mailenquiry__name])}>
          {name}
        </div>
        <div className={joinClassNames(["txt-label", mailenquiry__dateRange])}>
          {checkin} to {checkout}
        </div>
        <div className={joinClassNames(["txt-label", mailenquiry__guests])}>
          {guests} Guests
        </div>
        <div className={joinClassNames(["font-weight-bold txt-align-end", mailenquiry__date])}>
          {moment(date).utc().format("dddd, MMMM Do YYYY")}
        </div>
      </a>
    </Link>
  );
};

export default EnquiryRow;
