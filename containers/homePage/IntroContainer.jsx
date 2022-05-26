import Intro from "components/Intro";
import { IntroCard } from "components/Cards";
import { joinClassNames } from "helpers/utils";
import styles from "./styles.module.scss";

const { intro__img } = styles;

const IntroContainer = () => {
  return (
    <section className="bg-light py-3 py-sm-1">
      <div className="container py-4">
        <div className="row">
          <div className="col-6 col-lg-10 col-offset-lg-1 col-offset-sm-0 col-sm-12">
            <div className="row">
              <div className="col-6 col-sm-12">
                <div className="d-flex flex-column">
                  <IntroCard
                    title={`Strong Team`}
                    text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
                    imgSrc={`/assets/images/TEAM.png`}
                  />
                  <div
                    className={joinClassNames([
                      intro__img,
                      "mt-1-25 elevation-sm-1",
                    ])}
                  >
                    <img
                      src="/assets/images/intro1.jpg"
                      alt="holidaze hotels"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-12">
                <div className="d-flex flex-column mt-1-50 mt-sm-0">
                  <div
                    className={joinClassNames([
                      intro__img,
                      "mb-1-25 elevation-sm-1",
                    ])}
                  >
                    <img
                      src="/assets/images/intro2.jpg"
                      alt="holidaze hotels"
                    />
                  </div>
                  <IntroCard
                    title={`Luxury Hotels`}
                    text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
                    imgSrc={`/assets/images/LUXURY.png`}
                    isDark={true}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-10 col-offset-lg-1 col-offset-sm-0 col-sm-12">
            <div className="h-100 ml-1-50 ml-lg-0 d-flex align-center justify-center flex-column">
              <Intro
                subtitle={`About Us`}
                title={`Discover Our underground.`}
                text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Maecenas vel neque gravida egestas ut turpis sed. Commodo, a id ultrices sit amet, 
                neque amet eget ullamcorper. Vestibulum morbi pulvinar tempor tortor. 
                Nisi vitae orci nullam consequat, lacinia neque convallis tortor ut.`}
                buttonText={`Learn More`}
                buttonHref={`/about`}
                headingTag={`h2`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroContainer;
