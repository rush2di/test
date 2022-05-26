import { setNotification } from "helpers/utils";
import api from "services/api";

export const transformValues = (values) => {
  return {
    Amenities: values.amenities.join(", "),
    Description: values.description,
    ImageSrc: values.image,
    Location: values.location,
    Name: values.name,
    Price: values.price,
    Stars: values.stars,
  };
};

export const handleSubmit = async (values, { setSubmitting, resetForm }) => {
  try {
    const body = { data: { ...transformValues(values) } };
    const response = await api.post("/api/hotels", body);

    if (response) {
      setNotification()
        .onSuccess({ message: "Success, added to hotels" })
        .onClose(() => {
          setSubmitting(false);
          resetForm();
        });
    }
  } catch (error) {
    setNotification()
      .onError({ message: "Error, something went wrong" })
      .onClose(() => {
        setSubmitting(false);
      });
  }
};
