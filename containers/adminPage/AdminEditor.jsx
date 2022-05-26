import { useRouter } from "next/router";
import { AdminForm } from "components/Forms";
import { _DEFAULT_VALIDATION_SCHEMA } from "components/Forms/Admin/constants";
import { transformValues } from "components/Forms/Admin/utils";
import { amenitiesToArr, setNotification } from "helpers/utils";
import api from "services/api";

const EditorForm = ({ data }) => {
  const router = useRouter();
  const { Amenities, Name, Location, Description, Stars, ImageSrc, Price } =
    data.attributes;

  const initialValues = {
    amenities: amenitiesToArr(Amenities),
    name: Name,
    location: Location,
    description: Description,
    stars: Stars,
    image: ImageSrc,
    price: Price,
  };

  const validationSchema = _DEFAULT_VALIDATION_SCHEMA;

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const body = { data: { ...transformValues(values) } };
      const response = await api.put(`/api/hotels/${router.query.id}`, body);

      if (response) {
        setNotification()
          .onSuccess({ message: "Success, hotel info updated" })
          .onClose(() => {
            setSubmitting(false);
            resetForm();
            router.reload();
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

  return (
    <div className="row">
      <div className="col-6 col-offset-3 col-offset-sm-1 col-sm-10 col-xsm-12 col-offset-xsm-0">
        <AdminForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default EditorForm;
