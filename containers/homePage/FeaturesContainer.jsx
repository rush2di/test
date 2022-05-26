import { FeaturesCard } from "components/Cards";
import SectionTitle from "components/SectionTitle";
import React from "react";

const FeaturesContainer = () => {
  return (
    <div className="py-5 py-sm-2">
      <div className="container">
        <SectionTitle subtitle={`Facilities`} title={`Core Features`} />
        <div className="row mt-3">
          <div className="col-4 col-md-6 col-xsm-12">
            <FeaturesCard
              index={"01"}
              imgSrc={`/assets/images/RATING.png`}
              title={`Have High Rating`}
              text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna;`}
            />
          </div>
          <div className="col-4 col-md-6 col-xsm-12">
            <FeaturesCard
              index={"02"}
              imgSrc={`/assets/images/HOURS.png`}
              title={`Quiet Hours`}
              text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna;`}
            />
          </div>
          <div className="col-4 col-md-6 col-xsm-12">
            <FeaturesCard
              index={"03"}
              imgSrc={`/assets/images/LOCATIONS.png`}
              title={`Best Locations`}
              text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna;`}
            />
          </div>
          <div className="col-4 col-md-6 col-xsm-12">
            <FeaturesCard
              index={"04"}
              imgSrc={`/assets/images/CANCELATION.png`}
              title={`Free Cancellation`}
              text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna;`}
            />
          </div>
          <div className="col-4 col-md-6 col-xsm-12">
            <FeaturesCard
              index={"05"}
              imgSrc={`/assets/images/PAYMENTS.png`}
              title={`Payment Options`}
              text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna;`}
            />
          </div>
          <div className="col-4 col-md-6 col-xsm-12">
            <FeaturesCard
              index={"06"}
              imgSrc={`/assets/images/OFFERS.png`}
              title={`Special Offers`}
              text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna;`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesContainer;
