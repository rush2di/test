import { joinClassNames } from "helpers/utils";
import { useEffect } from "react";
import styles from "./styles.module.scss";

const {
  modalWrapper,
  modalWrapper__child,
  modalWrapper__isOpen,
  modalWrapper__isClosed,
} = styles;

const ModalWrapper = ({ children, isOpen = false, handleClick }) => {
  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "initial";
    }
  }, [isOpen]);

  const modalStyles = isOpen
    ? joinClassNames([modalWrapper, modalWrapper__isOpen])
    : joinClassNames([modalWrapper, modalWrapper__isClosed]);

  return (
    <div className={modalStyles}>
      <div onClick={handleClick}></div>
      <div className="d-flex align-center justify-center">
        <div className={modalWrapper__child}>{children}</div>
      </div>
    </div>
  );
};

export default ModalWrapper;
