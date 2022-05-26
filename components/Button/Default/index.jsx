import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { defaultBtnProps } from "../constants";
import styles from "./styles.module.scss";
import { joinClassNames } from "helpers/utils";

const { btn__text } = styles;

const DefaultBTN = ({
  variant = defaultBtnProps.variant.fill,
  color = defaultBtnProps.color.comp,
  classNames = "",
  children,
  icon,
  href,
  ...rest
}) => {
  const textAlignment = icon ? "ml-0-50" : "m-auto";
  const wrapperClassNames = `align-center btn btn--${variant}-${color} d-flex w-100`;
  const contentClassNames = `txt-sm-caps letter-spacing-100 font-weight-medium color-light ${textAlignment} ${btn__text}`;

  if (!href) {
    return (
      <button
        className={joinClassNames([wrapperClassNames, classNames])}
        {...rest}
      >
        <BtnContent contentClassNames={contentClassNames} icon={icon}>
          {children}
        </BtnContent>
      </button>
    );
  }

  return (
    <Link href={href}>
      <a className={joinClassNames([wrapperClassNames, classNames])} {...rest}>
        <BtnContent contentClassNames={contentClassNames} icon={icon}>
          {children}
        </BtnContent>
      </a>
    </Link>
  );
};

const BtnContent = ({ contentClassNames, icon, children }) => {
  return (
    <>
      {!!icon && <FontAwesomeIcon icon={icon} className={Button__text} />}
      <span className={contentClassNames}>{children}</span>
    </>
  );
};

export default DefaultBTN;
