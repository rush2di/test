import Intro from "components/Intro";
import { joinClassNames } from "helpers/utils";
import styles from "./styles.module.scss";

const { cover, cover__img } = styles;

const CoverContainer = () => {
  return (
    <div className={joinClassNames([cover, "bg-dark my-2"])}>
      <div className="container py-5">
        <div className="row --sm-col-reverse">
          <div className="col-7 col-md-9 col-sm-12">
            <div className="d-flex flex-column justify-center h-100">
              <Intro
                title={`Meet With Our Luxury Places.`}
                subtitle={`Why chose us`}
                text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Maecenas vel neque gravida egestas ut turpis sed. Commodo, a id ultrices sit amet, neque amet eget ullamcorper. 
                Vestibulum morbi pulvinar tempor tortor. Nisi vitae orci nullam consequat, lacinia neque convallis tortor ut.`}
                headingTag={`h4`}
                buttonText={`Book Now`}
                buttonHref={`/booking`}
                isDark
              />
            </div>
          </div>
          <div className="col-5">
            <div className={cover__img}>
              <img
                src="/assets/images/cover1.jpg"
                alt="Holidaze hotels cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverContainer;
