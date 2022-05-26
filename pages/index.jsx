import axios from "axios";
import HeroCover from "components/HeroCover";
import Search from "components/Search";
import Seo from "components/Seo";
import Roomslider from "components/Slider";
import CounterContainer from "containers/homePage/CounterContainer";
import CoverContainer from "containers/homePage/CoverContainer";
import FeaturesContainer from "containers/homePage/FeaturesContainer";
import FeedbackContainer from "containers/homePage/FeedbackContainer";
import IntroContainer from "containers/homePage/IntroContainer";
import { API_BASE_URL, _WEBSITE_TITLE } from "helpers/constants";

const _PAGE_TITLE = "Home";

const Home = ({ data }) => {
  return (
    <>
      <Seo
        pageTitle={_PAGE_TITLE}
        pageDesc={`${_WEBSITE_TITLE}, Choose From a Wide Range of Properties Which ${_WEBSITE_TITLE} Offers. 
        Search Now! Find What You Need At ${_WEBSITE_TITLE}, The Biggest Travel Site In The World. Hotels. Motels.`}
      />
      <HeroCover
        subheading={`The ultimate luxury exprience`}
        heading={`The prefrect\nplaces for you`}
        isHome
      />
      <Search />
      <IntroContainer />
      <Roomslider data={data} />
      <CoverContainer />
      <FeaturesContainer />
      <CounterContainer />
      <FeedbackContainer />
    </>
  );
};

export async function getServerSideProps(context) {
  let props = { data: null };
  try {
    const response = await axios.get(API_BASE_URL + "api/hotels");
    if (response) return (props = response.data);
  } catch (err) {
    console.log({ err });
  } finally {
    return { props };
  }
}

export default Home;
