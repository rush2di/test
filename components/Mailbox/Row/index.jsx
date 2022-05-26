import { joinClassNames } from "helpers/utils";
import moment from "moment";
import Link from "next/link";
import styles from "./styles.module.scss";

const {
  mailbox__wrapper,
  mailbox__name,
  mailbox__message,
  mailbox__date,
  mailbox__opened,
  mailbox__notOpened,
} = styles;

const MailboxRow = ({ id, name, message, date, isOpened }) => {
  const wrapperStyles = isOpened
    ? joinClassNames([mailbox__wrapper, mailbox__opened])
    : joinClassNames([mailbox__wrapper, mailbox__notOpened]);

  return (
    <Link href={`/admin/contact/${id}`}>
      <a className={wrapperStyles}>
        <div className={joinClassNames(["font-weight-bold", mailbox__name])}>
          {name}
        </div>
        <div className={joinClassNames(["txt-label", mailbox__message])}>
          <span>{message}</span>
        </div>
        <div className={joinClassNames(["font-weight-bold", mailbox__date])}>
          {moment(date).utc().format("dddd, MMMM Do YYYY")}
        </div>
      </a>
    </Link>
  );
};

export default MailboxRow;
