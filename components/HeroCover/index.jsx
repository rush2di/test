import DefaultBTN from "components/Button";
import { joinClassNames } from "helpers/utils";
import styles from "./styles.module.scss";

const { hero, hero__home, hero__page } = styles;

const HeroCover = ({
  subheading,
  heading,
  pageTitle,
  isHome = false,
  isAdminSub = false,
}) => {
  const wrapperStyles = isHome ? joinClassNames([hero, hero__home]) : hero;

  return (
    <div className={wrapperStyles}>
      <div className="container">
        <div className="row">
          <div className="col-5 col-lg-7 col-md-9 col-sm-12">
            <div className="f-flex flex-column">
              <span className="d-block font-weight-medium txt-sm-caps color-light letter-spacing-200">
                {subheading}
              </span>
              <h1 className="color-light font-comp txt-wrap font-weight-light my-1-50 txt-capitalize txt-display-main">
                {heading}
              </h1>
              {isHome && (
                <div className="row">
                  <div className="col-6 col-xsm-12">
                    <DefaultBTN href="/booking" classNames="mr-1">
                      Take a Tour
                    </DefaultBTN>
                  </div>
                  <div className="col-6 col-xsm-12">
                    <DefaultBTN variant="outline" href="/about">
                      Learn More
                    </DefaultBTN>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {!isHome && (
          <div className={joinClassNames([hero__page, "container"])}>
            <div className="d-flex align-center">
              <span className="d-inline-block txt-md font-weight-bold color-dark">
                Home
              </span>
              <span className="d-inline-block txt font-weight-bold color-comp mx-1">
                |
              </span>
              {isAdminSub && (
                <>
                  <span className="d-inline-block txt-md font-weight-bold color-comp">
                    Admin
                  </span>
                  <span className="d-inline-block txt font-weight-bold color-comp mx-1">
                    |
                  </span>
                </>
              )}
              <span className="d-inline-block txt-md font-weight-bold color-comp">
                {pageTitle}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroCover;
