import * as Yup from "yup";
import { DEFAULT_LOCATIONS } from "helpers/constants";

export const _DEFAULT_VALUES = {
  image: "",
  name: "",
  location: "",
  description: "",
  stars: 4,
  amenities: "",
};

export const _DEFAULT_VALIDATION_SCHEMA = Yup.object({
  image: Yup.string().url("Not a valid URL").required("Image link is required"),
  name: Yup.string()
    .max(150, "Must not exceed 150 characters")
    .required("Required"),
  location: Yup.string()
    .required("Required")
    .oneOf([...DEFAULT_LOCATIONS], "You must select a location"),
  description: Yup.string()
    .max(1500, "Must be 1500 characters or less")
    .required("Required"),
  stars: Yup.number()
    .required()
    .min(1, "Must be more than 1 star")
    .max(5, "Must not exceed 5 stars")
    .positive(),
  price: Yup.number().required().min(10, "Must be more than 1 star").positive(),
  amenities: Yup.mixed().required("chose the right amenities"),
});
