import Seo from "components/Seo";
import HeroCover from "components/HeroCover";
import LoadingScreen from "components/LoadingScreen";
import AdminCards from "containers/adminPage/AdminCards";
import { _WEBSITE_TITLE } from "helpers/constants";
import { setNotification } from "helpers/utils";
import { useEffect, useState } from "react";
import { useAuth } from "contexts/auth";
import api from "services/api";

const _PAGE_TITLE = `Admin`;

const Admin = () => {
  const { isAuthenticated } = useAuth();
  const [data, setData] = useState();

  useEffect(() => {
    const getClientData = async () => {
      try {
        const contactMessages = await api.get("api/contact-messages");
        const enquiryMessages = await api.get("api/enquiry-messages");
        const hotelsList = await api.get("api/hotels");

        if (contactMessages && enquiryMessages && hotelsList) {
          setData({
            contactMessages: contactMessages.data,
            enquiryMessages: enquiryMessages.data,
            hotelsList: hotelsList.data,
          });
        }
      } catch (error) {
        setNotification()
          .onError("Something went wrong")
          .onClose(() => console.error(error));
      }
    };
    getClientData();
  }, []);

  return (
    <>
      <Seo
        pageTitle={_PAGE_TITLE}
        pageDesc={`${_WEBSITE_TITLE} - Admin Dashboard`}
      />
      <HeroCover
        pageTitle={_PAGE_TITLE}
        subheading={`Welcome back`}
        heading={`Admin`}
      />
      <div className="container py-5">
        {!isAuthenticated ? <LoadingScreen /> : <AdminCards data={data} />}
      </div>
    </>
  );
};

export default Admin;
