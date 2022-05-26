import Seo from "components/Seo";
import HeroCover from "components/HeroCover";
import { _WEBSITE_TITLE } from "helpers/constants";
import AdminEditor from "containers/adminPage/AdminEditor";
import api from "services/api";

const HotelEdit = ({ data }) => {
  const _PAGE_TITLE = `${data.attributes.Name} config`;

  return (
    <>
      <Seo
        pageTitle={_PAGE_TITLE}
        pageDesc={`${_WEBSITE_TITLE} - Admin Dashboard`}
      />
      <HeroCover
        pageTitle={"Editor"}
        subheading={`Hotel editor`}
        heading={_PAGE_TITLE}
        isAdminSub
      />
      <div className="container py-5">
        <AdminEditor data={data} />
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  let props;
  const { id } = context.query;
  const res = await api.get(`api/hotels/${id}`);
  if (res) props = res.data;
  console.log(props);
  return {
    props,
  };
}

export default HotelEdit;
