import { ContactForm } from "components/Forms";
import HeroCover from "components/HeroCover";
import Seo from "components/Seo";

import { _WEBSITE_TITLE } from "helpers/constants";

const _PAGE_TITLE = "Contact";

const Contact = () => {
  return (
    <>
      <Seo
        pageTitle={_PAGE_TITLE}
        pageDesc={`Have a costume wish or feedback for us? contact ${_WEBSITE_TITLE}`}
      />
      <HeroCover
        pageTitle={_PAGE_TITLE}
        subheading={`Let us know your feedback`}
        heading={`Contact`}
      />
      <div className="container my-5">
        <div className="row">
          <div className="col-6 col-offset-3 col-offset-sm-1 col-sm-10 col-xsm-12 col-offset-xsm-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
