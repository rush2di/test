import Link from "next/link";
import styles from "./styles.module.scss";

const { squareBtn, squareBtn__content } = styles;

const SquareBTN = ({ href, children, ...rest }) => {
  if (!href) {
    return (
      <button className={squareBtn} {...rest}>
        <div className={squareBtn__content}>{children}</div>
      </button>
    );
  }

  return (
    <Link href={href}>
      <a className={squareBtn} {...rest}>
        <div className={squareBtn__content}>{children}</div>
      </a>
    </Link>
  );
};

export default SquareBTN;
