import HeroCover from "components/HeroCover";
import SectionTitle from "components/SectionTitle";
import Seo from "components/Seo";
import { _WEBSITE_TITLE } from "helpers/constants";

const _PAGE_TITLE = "About Us";

const About = () => {
  return (
    <>
      <Seo
        pageTitle={_PAGE_TITLE}
        pageDesc={`${_WEBSITE_TITLE}, Choose From a Wide Range of Properties Which ${_WEBSITE_TITLE} Offers. 
        Search Now! Find What You Need At ${_WEBSITE_TITLE}, The Biggest Travel Site In The World. Hotels. Motels.`}
      />
      <HeroCover
        pageTitle={_PAGE_TITLE}
        subheading={`The ultimate luxury`}
        heading={`Our Story`}
      />
      <div className="container">
        <div className="my-5 py-5">
          <div className="mx-auto w-80 w-xsm-95">
            <SectionTitle
              subtitle={`Since 1994`}
              title={`Hello. Our Agency has been present for over 20 years. We make the best for all our customers.`}
            />
            <p className="txt txt-center mt-1">
              Founded in 1996 in Oslo, Holidaze has grown from a small start-up
              to one of the world’s leading digital travel companies.{" "}
              <span className="color-dark font-weight-bold">
                Holidaze’s mission is to make it easier for everyone to
                experience the world.
              </span>
            </p>
            <p className="txt txt-center mt-1">
              By investing in technology that takes the friction out of travel,
              Holidaze seamlessly connects millions of travelers to memorable
              experiences, a variety of transportation options, and incredible
              places to stay – from homes to hotels, and much more.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
