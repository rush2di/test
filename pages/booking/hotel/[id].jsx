import axios from "axios";

import Seo from "components/Seo";
import Search from "components/Search";
import HeroCover from "components/HeroCover";
import BookingCards from "containers/bookingPage/BookingCards";
import { API_BASE_URL, _WEBSITE_TITLE } from "helpers/constants";
import BookingDetails from "containers/bookingPage/BookingDetails";

const _PAGE_TITLE = "Booking";

const Booking = ({ data }) => {
  return (
    <>
      <Seo
        pageTitle={_PAGE_TITLE}
        pageDesc={`${_WEBSITE_TITLE}, hotel ${data.attributes.Name}. ${data.attributes.Description}`}
      />
      <HeroCover
        pageTitle={_PAGE_TITLE}
        subheading={`The ultimate luxury`}
        heading={`Booking`}
      />
      <div className="container py-5">
        <BookingDetails data={data} />
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const hotelID = context.query.id;
  let props = { data: null };
  try {
    const response = await axios.get(API_BASE_URL + "api/hotels/" + hotelID);
    if (response) return (props = response.data);
  } catch (err) {
    console.log({ err });
  } finally {
    return { props };
  }
}

export default Booking;
