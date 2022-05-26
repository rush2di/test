import { AddHotelCard, BookingCard } from "components/Cards";
import { setNotification } from "helpers/utils";
import { useRouter } from "next/router";
import { useState } from "react";
import api from "services/api";
import AdminModal from "./AdminModal";

const AdminList = ({ data }) => {
  const router = useRouter();
  const [isModelOpen, setModelOpen] = useState(false);

  const handleClose = (e) => {
    e.stopPropagation();
    setModelOpen(false);
  };

  const handleOpen = (e) => {
    e.stopPropagation();
    setModelOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await api.delete(`api/hotels/${id}`);
      if (response) {
        setNotification()
          .onSuccess("Succesfully deleted entry")
          .onClose(() => router.reload());
      }
    } catch (err) {
      setNotification()
        .onSuccess("Something went wrong")
        .onClose(() => console.error(err));
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-4">
          <AddHotelCard
            text={`Click to add a new listing`}
            onClick={handleOpen}
          />
        </div>
        {data.map((item) => {
          const { attributes, id } = item;
          return (
            <div className="col-4">
              <BookingCard
                id={id}
                title={attributes.Name}
                price={attributes.Price}
                imgSrc={attributes.ImageSrc}
                text={attributes.Description}
                handleDelete={handleDelete}
              />
            </div>
          );
        })}
      </div>
      <AdminModal isModelOpen={isModelOpen} handleClose={handleClose} />
    </>
  );
};

export default AdminList;
