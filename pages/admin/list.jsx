import axios from "axios";

import Seo from "components/Seo";
import HeroCover from "components/HeroCover";
import AdminList from "containers/adminPage/AdminList";
import { API_BASE_URL, _WEBSITE_TITLE } from "helpers/constants";

const _PAGE_TITLE = `Hotels`;

const HotelsList = ({ data }) => {
  return (
    <>
      <Seo
        pageTitle={_PAGE_TITLE}
        pageDesc={`${_WEBSITE_TITLE} - Admin Dashboard`}
      />
      <HeroCover
        pageTitle={_PAGE_TITLE}
        subheading={`Hotels settings`}
        heading={`Admin`}
        isAdminSub
      />
      <div className="container py-5">
        <AdminList data={data} />
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  let props = null;
  try {
    const response = await axios.get(API_BASE_URL + "api/hotels");
    if (response) return (props = response.data);
  } catch (err) {
    console.log({ err });
  } finally {
    return { props };
  }
}

export default HotelsList;
