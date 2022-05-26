import { Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  DEFAULT_LOCATIONS,
  DEFAULT_AMENITIES_SELECTION,
} from "helpers/constants";
import { SelectInput, TextAreaInput, TextInput } from "components/Fields";
import DefaultBTN from "components/Button";

const AdminForm = ({ initialValues, validationSchema, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, isSubmitting }) => (
        <form
          onSubmit={handleSubmit}
          className="form form--bordered form--columns elevation-sm-1"
        >
          <div className="mb-1 w-100">
            <TextInput
              label="Hotel Image URL"
              name="image"
              type="text"
              placeholder="Add hotel image link"
            />
          </div>
          <div className="mb-1 w-100">
            <TextInput
              label="Hotel Name"
              name="name"
              type="text"
              placeholder="Add hotel name"
            />
          </div>
          <div className="mb-1 w-100">
            <SelectInput
              options={DEFAULT_LOCATIONS}
              label="Location"
              name="location"
              id="location"
              placeholder="Add hotel location"
            />
          </div>
          <div className="mb-1 w-100">
            <TextAreaInput
              label="Description"
              name="description"
              placeholder="Add hotel description"
            />
          </div>
          <div className="mb-1 w-100">
            <TextInput
              label="Hotel stars"
              name="stars"
              type="number"
              placeholder="Add hotel name"
              min={1}
              max={5}
            />
          </div>
          <div className="mb-1 w-100">
            <TextInput
              label="Hotel price per night in US dollars"
              name="price"
              type="number"
              placeholder="price per night"
              step="0.01"
              min={10}
            />
          </div>
          <div className="mb-2 w-100">
            <SelectInput
              options={DEFAULT_AMENITIES_SELECTION}
              label="Amenities"
              name="amenities"
              id="amenities"
              placeholder="Add hotel amenities"
              isMulti
            />
          </div>
          <DefaultBTN type="submit">
            {isSubmitting ? (
              <FontAwesomeIcon
                icon={["fas", "circle-notch"]}
                style={{ fontSize: 16 }}
                spin={true}
              />
            ) : (
              "Submit"
            )}
          </DefaultBTN>
        </form>
      )}
    </Formik>
  );
};

export default AdminForm;
