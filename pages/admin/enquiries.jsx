import axios from "axios";

import Seo from "components/Seo";
import HeroCover from "components/HeroCover";
import AdminList from "containers/adminPage/AdminList";
import { API_BASE_URL, _WEBSITE_TITLE } from "helpers/constants";
import Mailbox from "components/Mailbox";
import AdminEnquiryBox from "containers/adminPage/AdminEnquiryBox";

const _PAGE_TITLE = `Enquiries`;

const Enquiries = ({ data }) => {
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
        <AdminEnquiryBox title={_PAGE_TITLE} data={data} />
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  let props = { data: null };
  try {
    const response = await axios.get(API_BASE_URL + "api/enquiry-messages");
    if (response) return (props = response.data);
  } catch (err) {
    console.log({ err });
  } finally {
    return { props };
  }
}

export default Enquiries;
