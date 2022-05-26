import { EnquiryRow, MailboxHead } from "components/Mailbox";
import { parseNotificationsCount } from "helpers/utils";
import React from "react";

const AdminEnquiryBox = ({ title, data }) => {
  return (
    <div className="w-100 card--bordered elevation-sm-1">
      <MailboxHead
        title={title}
        unreadCount={parseNotificationsCount({ data })}
      />
      <ul>
        {data.map((item) => {
          return (
            <li key={`item${item.id + item.attributes.createdAt}`}>
              <EnquiryRow
                id={item.id}
                name={item.attributes.Name}
                email={item.attributes.Email}
                phone={item.attributes.Phone}
                checkin={item.attributes.Checkin}
                checkout={item.attributes.Checkout}
                guests={item.attributes.Guests}
                date={item.attributes.createdAt}
                isOpened={item.attributes.Opened}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AdminEnquiryBox;
