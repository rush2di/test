import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { joinClassNames } from "helpers/utils";
import moment from "moment";

import styles from "./styles.module.scss";
import DefaultBTN from "components/Button";
import ReactSelect from "react-select";
import { DEFAULT_LOCATIONS } from "helpers/constants";
import { useRouter } from "next/router";

const { search, field } = styles;

const Search = () => {
  const _DEFAULT_OPTIONS = DEFAULT_LOCATIONS.map((option) => ({
    label: option,
    value: option,
  }));

  const { push } = useRouter();
  const [state, setState] = useState({
    startDate: new Date(),
    city: "",
  });

  const handleChange = (city) => {
    setState({ ...state, city: city.value });
  };

  const heandleSearch = () => {
    if (state.city !== "") push(`/booking?c=${state.city}`);
  };

  return (
    <div className={search}>
      <div className="container">
        <div className="row">
          <div className="col-3 col-md-4 col-sm-6 col-xsm-12">
            <FieldWrapper label="Location" icon={["fas", "home"]}>
              <ReactSelect
                options={_DEFAULT_OPTIONS}
                onChange={handleChange}
                type="text"
                name="city"
                id="city"
                instanceId="city"
                placeholder="Oslo"
                closeMenuOnScroll={false}
                classNamePrefix="select"
              />
            </FieldWrapper>
          </div>
          <div className="col-3 col-md-4 col-sm-6 col-xsm-12">
            <FieldWrapper label="Check in" icon={["far", "calendar"]}>
              <input
                type="date"
                name="date"
                id="date"
                defaultValue={moment(state.startDate).format("L")}
                min={moment(state.startDate).format("L")}
              />
            </FieldWrapper>
          </div>
          <div className="col-3 col-md-4 col-sm-6 col-xsm-12">
            <FieldWrapper label="Guests" icon={["fas", "chevron-down"]}>
              <input
                type="number"
                name="guests"
                id="guests"
                min={1}
                max={5}
                defaultValue={1}
              />
            </FieldWrapper>
          </div>
          <div className="col-3 col-md-12 col-sm-6 col-xsm-12">
            <div className="align-end d-flex h-100">
              <DefaultBTN onClick={heandleSearch}>Search Hotels</DefaultBTN>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FieldWrapper = ({ children, icon, label }) => {
  return (
    <div className={joinClassNames(["d-flex flex-column align-start", field])}>
      <span className="color-light d-block font-weight-medium txt-btn mb-1">
        {label}
      </span>
      <div className="d-flex">
        <div>
          <FontAwesomeIcon icon={icon} size="xs" fixedWidth />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Search;
