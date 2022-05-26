import LoadingScreen from "components/LoadingScreen";
import { AdminCard } from "components/Cards";
import { _AdminCardProps } from "components/Cards/Admin/constants";
import { parseNotificationsCount } from "/helpers/utils";

const CardsContainer = ({ data }) => {
  return !data ? (
    <LoadingScreen />
  ) : (
    <div className="row">
      <div className="col-4 col-lg-6 col-sm-12">
        <AdminCard
          type={_AdminCardProps.type.list.key}
          title="Edit hoteDls list"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."
        />
      </div>
      <div className="col-4 col-lg-6 col-sm-12">
        <AdminCard
          type={_AdminCardProps.type.enquiries.key}
          title="Check enquiries submitions"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."
          notificationCount={parseNotificationsCount(data.enquiryMessages)}
        />
      </div>
      <div className="col-4 col-lg-6 col-sm-12">
        <AdminCard
          type={_AdminCardProps.type.contact.key}
          title="Check contact messages"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."
          notificationCount={parseNotificationsCount(data.contactMessages)}
        />
      </div>
    </div>
  );
};

export default CardsContainer;
