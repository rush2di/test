import Seo from "components/Seo";
import HeroCover from "components/HeroCover";
import { _WEBSITE_TITLE } from "helpers/constants";
import api from "services/api";
import { useEffect } from "react";
import { setNotification } from "helpers/utils";

const EnquiryRead = ({ data }) => {
  const _PAGE_TITLE = `Enquiry Read`;

  useEffect(() => {
    const markAsRead = async () => {
      const body = { data: { Opened: true } };
      const res = await api.put(`api/enquiry-messages/${data.id}`, body);
      if (!res) setNotification().onError("please check you network").onClose();
    };

    markAsRead();
  }, []);

  return (
    <>
      <Seo
        pageTitle={_PAGE_TITLE}
        pageDesc={`${_WEBSITE_TITLE} - Admin Dashboard`}
      />
      <HeroCover
        pageTitle={"Contact Message"}
        subheading={`Mailbox inbox`}
        heading={_PAGE_TITLE}
        isAdminSub
      />
      <div className="container py-5">
        <div className="row">
          <div className="col-6 col-lg-10 col-offset-3 col-offset-lg-1 col-offset-sm-0 col-sm-12">
            <div className="card card--bordered elevation-sm-1 py-1">
              <div className="card__content">
                <div className="d-flex align-center justify-start">
                  <span className="txt-h6 mr-1">Name:</span>
                  <span className="txt-label">{data.attributes.Name}</span>
                </div>
                <hr className="bg-label my-1-50"/>
                <div className="d-flex align-center justify-start">
                  <span className="txt-h6 mr-1">Email:</span>
                  <span className="txt-label">{data.attributes.Email}</span>
                </div>
                <hr className="bg-label my-1-50"/>
                <div className="d-flex align-center justify-start">
                  <span className="txt-h6 mr-1">Phone Number:</span>
                  <span className="txt-label">{data.attributes.Phone}</span>
                </div>
                <hr className="bg-label my-1-50"/>
                <div className="d-flex align-center justify-start">
                  <span className="txt-h6 mr-1">Guests:</span>
                  <span className="txt-label">{data.attributes.Guests} guests</span>
                </div>
                <hr className="bg-label my-1-50"/>
                <div className="d-flex flex-column align-start justify-start mb-1">
                  <span className="txt-h6 mb-1">Check-in and Check-out date:</span>
                  <span className="txt-label">{data.attributes.Checkin} to {data.attributes.Checkout}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  let props;
  const { id } = context.query;
  const res = await api.get(`api/enquiry-messages/${id}`);
  if (res) props = res.data;
  console.log(props);
  return {
    props,
  };
}

export default EnquiryRead;
