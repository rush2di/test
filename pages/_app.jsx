import { ToastContainer } from "react-toastify";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import Layout from "components/Layout";
import { AuthProvider, ProtectRoute } from "contexts/auth";

import "../globals.css";
import "../styles/style.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-toastify/dist/ReactToastify.min.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

library.add(fas, far, fab);

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <ProtectRoute>
          <ToastContainer />
          <Component {...pageProps} />
        </ProtectRoute>
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
