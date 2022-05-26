import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik } from "formik";
import * as Yup from "yup";

import DefaultBTN from "components/Button";
import { TextAreaInput, TextInput } from "components/Fields";
import { transformValues } from "./utils";
import api from "services/api";
import { setNotification } from "helpers/utils";

const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("name is required"),
    email: Yup.string()
      .email("should be a valid email")
      .required("email is required"),
    message: Yup.string()
      .min(10, "message is to short")
      .required("message is required"),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log("submitting");
    try {
      const body = { data: { ...transformValues(values) } };
      const response = await api.post("/api/contact-messages", body);

      if (response) {
        setNotification()
          .onSuccess({ message: "Your message was sent succesfully" })
          .onClose(() => {
            setSubmitting(false);
            resetForm();
          });
      }
    } catch (error) {
      setNotification()
        .onError({ message: "Error, please try again" })
        .onClose(() => {
          setSubmitting(false);
        });
    }
  };

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
          <div className="mb-2 w-100">
            <TextAreaInput
              label="Message"
              name="message"
              placeholder="Write your message here"
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

export default ContactForm;
