import styles from "./styles.module.scss";

const { mailboxhead__notification } = styles;

const MailboxHead = ({ title, unreadCount }) => {
  return (
    <div className="align-center card--bordered d-flex justify-between px-0-75 py-3 w-100">
      <h1 className="txt-h5 font-weight-bold">{title}</h1>
      <span className="d-flex">
        <span className={mailboxhead__notification}>{unreadCount}</span> unread
        message(s)
      </span>
    </div>
  );
};

export default MailboxHead;
