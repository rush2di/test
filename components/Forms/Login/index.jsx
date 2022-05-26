import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as Yup from "yup";

import DefaultBTN from "components/Button";
import { setNotification } from "helpers/utils";
import { TextInput } from "components/Fields";
import { useAuth } from "contexts/auth";

const LoginForm = () => {
  const { login } = useAuth();
  const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("should be a valid email")
      .required("email is required"),
    password: Yup.string().required("password is required"),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await login(values.email, values.password);

      if (response) {
        setNotification()
          .onSuccess({ message: "Succesfully connected" })
          .onClose(() => {
            resetForm();
            setSubmitting(false);
            router.push("/admin");
          });
      }
    } catch (error) {
      setNotification()
        .onError({ message: "Wrong credentials" })
        .onClose(() => {
          resetForm();
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
              label="Email"
              name="email"
              type="text"
              placeholder="Please enter your email"
            />
          </div>
          <div className="mb-2 w-100">
            <TextInput
              label="Password"
              name="password"
              type="password"
              placeholder="Please enter your password"
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
              "Login"
            )}
          </DefaultBTN>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
