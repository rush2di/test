import MailboxHead from "components/Mailbox/Head";
import MailboxRow from "components/Mailbox/Row";
import { parseNotificationsCount } from "helpers/utils";

const AdminMailbox = ({ title, data }) => {
  return (
    <div className="w-100 card--bordered elevation-sm-1">
      <MailboxHead
        title={title}
        unreadCount={parseNotificationsCount({ data })}
      />
      <ul>
        {data.map((item) => {
          return (
            <li key={`item${item.attributes.createdAt}`}>
              <MailboxRow
                id={item.id}
                name={item.attributes.Name}
                date={item.attributes.createdAt}
                message={item.attributes.Message}
                isOpened={item.attributes.Opened}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AdminMailbox;
