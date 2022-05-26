import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "components/Button";
import styles from "./styles.module.scss";

const { footer__wrapper, footer__social, footer__input } = styles;

const Footer = () => {
  return (
    <footer className={footer__wrapper}>
      <img
        src="/assets/images/FOOTER_COVER.png"
        alt="Holidaz destinations"
        className="w-100"
      />
      <div className="py-3">
        <div className="container">
          <div className="row --sm-col-reverse">
            <div className="col-5 col-md-6 col-sm-12">
              <div className="d-flex flex-column align-start">
                <img src="/assets/images/LOGO_ALT.png" alt="Holidaz logo" />
                <p className="mt-1 txt color-label">
                  No matter if you're looking for a deal or want to pay more for
                  something really special - Holidaze got you covered.
                </p>
                <ul className="d-flex mt-1">
                  <li className={footer__social}>
                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                  </li>
                  <li className={footer__social}>
                    <FontAwesomeIcon icon={["fab", "facebook"]} />
                  </li>
                  <li className={footer__social}>
                    <FontAwesomeIcon icon={["fab", "instagram-square"]} />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-7 col-md-6 col-sm-12">
              <div className="p-1-50 bg-dark">
                <h5 className="color-label font-comp font-weight-light txt-capitalize txt-h5">
                  Subscribe to our Newsletter
                </h5>
                <div className={footer__input}>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@example.com..."
                  />
                  <Button>Submit</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap justify-between py-1">
            <p className="color-light my-0-50">Copyright By@Holidaze - 2022</p>
            <div className="d-flex flex-wrap my-0-50">
              <p className="color-light mr-1">Terms of use</p>
              <p className="color-light mr-1">|</p>
              <p className="color-light">Privacy Environmental Policy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
