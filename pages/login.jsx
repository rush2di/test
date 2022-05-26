import Seo from "components/Seo";
import HeroCover from "components/HeroCover";
import { LoginForm } from "components/Forms";
import { _WEBSITE_TITLE } from "helpers/constants";

const _PAGE_TITLE = `Login`;

const Login = () => {
  return (
    <>
      <Seo pageTitle={_PAGE_TITLE} pageDesc={`${_WEBSITE_TITLE} login page`} />
      <HeroCover
        pageTitle={_PAGE_TITLE}
        subheading={`The ultimate luxury`}
        heading={`Login`}
      />
      <div className="container my-5">
        <div className="row">
          <div className="col-6 col-offset-3 col-offset-sm-1 col-sm-10 col-xsm-12 col-offset-xsm-0">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
