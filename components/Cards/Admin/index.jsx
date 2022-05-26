import Image from "next/image";

import { joinClassNames } from "helpers/utils";
import { _AdminCardProps } from "./constants";

import styles from "./styles.module.scss";
import Link from "next/link";

const { admincard, admincard__notification } = styles;

const AdminCard = ({
  type = _AdminCardProps.type.enquiries.key,
  notificationCount = 0,
  title,
  text,
}) => {

  return (
    <Link href={`/admin/${type}`}>
      <a className={joinClassNames([admincard,"card card--bordered elevation-sm-1"])} >
        <div className="card__cover">
          <div className="next-img-wrapper">
            <Image
              src={_AdminCardProps.type[type].iconSrc}
              alt={title}
              layout="fill"
            />
            {!!notificationCount && (
              <div className={admincard__notification}>{notificationCount}</div>
            )}
          </div>
        </div>
        <div className="card__content">
          <h3 className="txt font-weight-medium txt-uppercase">{title}</h3>
          <p className="txt">{text}</p>
        </div>
      </a>
    </Link>
  );
};

export default AdminCard;
