import Link from "next/link";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Amenities from "components/Amenities";
import {
  amenitiesToArr,
  transformAmenitiesData,
  joinClassNames,
} from "helpers/utils";

import { settings } from "./constants";
import styles from "./styles.module.scss";
import SectionTitle from "components/SectionTitle";

const {
  slider__wrapper,
  slider__img,
  slider__prevBtn,
  slider__nextBtn,
  slider__card,
  slider__cardAmenities,
  slider__cardDesc,
} = styles;

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className={joinClassNames([slider__nextBtn, "elevation-sm-2"])}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={["fas", "arrow-right"]} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className={joinClassNames([slider__prevBtn, "elevation-sm-2"])}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={["fas", "arrow-left"]} />
    </div>
  );
};

const Roomslider = ({ data }) => {
  return (
    <section className={slider__wrapper}>
      <div className="w-100 p-0">
        <SectionTitle subtitle={`Room`} title={`Hand Picked Rooms`} />
        <Slider
          className="rooms-slider-two justify-center py-1-50 overflow--h"
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
          {...settings}
        >
          {data.map((item, i) => (
            <SliderCard key={i} item={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

const SliderCard = ({ item }) => {
  return (
    <div className={joinClassNames([slider__card, "w-100 px-1-50 px-xsm-0"])}>
      <div className={slider__cardAmenities}>
        <Amenities
          {...transformAmenitiesData(amenitiesToArr(item.attributes.Amenities))}
        />
      </div>
      <div className={slider__img}>
        <img src={item.attributes.ImageSrc} alt={item.attributes.Name} />
      </div>
      <div className={joinClassNames([slider__cardDesc, "h-100"])}>
        <div className="card--bordered mx-1-50 px-1-50 py-1 elevation-sm-2">
          <div className="d-flex align-center justify-between">
            <div>
              <h3 className="txt-h3 font-comp font-weight-light">
                <Link href={`/booking/hotel/${item.id}`}>
                  {item.attributes.Name}
                </Link>
              </h3>
              <div>
                <p className="txt-label">{item.attributes.Description}</p>
              </div>
            </div>
            <div className="ml-1-50 ml-sm-0 mt-sm-1">
              <span className="txt-h3 color-comp font-weight-bold">
                ${item.attributes.Price}
              </span>
              <span className="txt color-comp font-weight-bold">/Night</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roomslider;
