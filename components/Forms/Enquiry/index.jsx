import { Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Yup from "yup";

import DefaultBTN from "components/Button";
import { TextInput } from "components/Fields";

const EnquiryForm = ({ onSubmit }) => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: 1,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("name is required"),
    email: Yup.string()
      .email("should be a valid email")
      .required("email is required"),
    phone: Yup.string()
      .min(6, "phone number is to short")
      .max(19, "phone number is to long")
      .required("phone number is required"),
    checkin: Yup.date().required("check-in date is required"),
    checkout: Yup.date().required("check-out date is required"),
    guests: Yup.number()
      .required("number of guests is required")
      .min(1)
      .max(6, "exceeds the average limit")
      .positive(),
  });

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
              label="Name"
              name="name"
              type="text"
              placeholder="Please enter your name"
            />
          </div>
          <div className="mb-2 w-100">
            <TextInput
              label="Email"
              name="email"
              type="email"
              placeholder="Please enter your email"
            />
          </div>
          <div className="mb-1 w-100">
            <TextInput
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="Write your phone number here"
            />
          </div>
          <div className="mb-1 w-100">
            <TextInput label="Checkin Date" name="checkin" type="date" />
          </div>
          <div className="mb-1 w-100">
            <TextInput label="Checkout Date" name="checkout" type="date" />
          </div>
          <div className="mb-2 w-100">
            <TextInput
              label="Guests"
              name="guests"
              type="number"
              default={1}
              min={1}
              max={5}
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

export default EnquiryForm;
