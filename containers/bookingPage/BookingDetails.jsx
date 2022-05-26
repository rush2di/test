import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

import DefaultBTN from "components/Button";
import Amenities from "components/Amenities";
import HotelCover from "components/HotelCover";
import ModalWrapper from "components/ModalWrapper";
import {
  amenitiesToArr,
  setNotification,
  transformAmenitiesData,
} from "helpers/utils";
import { EnquiryForm } from "components/Forms";
import { transformValues } from "components/Forms/Enquiry/utils";
import api from "services/api";

const BookingDetails = ({ data }) => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const { query } = useRouter();

  const handleOpen = () => setIsModelOpen(true);
  const handleClose = () => setIsModelOpen(false);

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const body = { data: { ...transformValues(values), hotelID: query.id } };
      const response = await api.post("/api/enquiry-messages", body);

      if (response) {
        setNotification()
          .onSuccess({ message: "Your enquiry was sent succesfully" })
          .onClose(() => {
            handleClose();
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

  const amenitiesArr = amenitiesToArr(data.attributes.Amenities);

  return (
    <div className="row">
      <div className="col-6 col-lg-12">
        <HotelCover
          title={data.attributes.Name}
          price={data.attributes.Price}
          imageSrc={data.attributes.ImageSrc}
        />
      </div>
      <div className="col-6 col-lg-8 col-md-12">
        <div className="h-100 d-flex flex-column align-start justify-end pb-3-75">
          <div className="mb-1 w-100">
            <Amenities {...transformAmenitiesData(amenitiesArr)} includeText />
          </div>
          <div className="my-0-50">
            {data.attributes.Description.split(`\n`).map((line) => {
              return (
                <p key={uuidv4()} className="txt txt-wrap mb-1">
                  {line}
                </p>
              );
            })}
          </div>
          <DefaultBTN onClick={handleOpen}>Send booking request</DefaultBTN>
          <ModalWrapper isOpen={isModelOpen} handleClick={handleClose}>
            <EnquiryForm onSubmit={onSubmit} />
          </ModalWrapper>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
