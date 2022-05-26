import axios from "axios";

import Seo from "components/Seo";
import Search from "components/Search";
import HeroCover from "components/HeroCover";
import BookingCards from "containers/bookingPage/BookingCards";
import { API_BASE_URL, _WEBSITE_TITLE } from "helpers/constants";
import { useRouter } from "next/router";
import { filterHotels } from "helpers/utils";
import { useEffect, useState } from "react";

const _PAGE_TITLE = "Booking";

const Booking = ({ data }) => {
  const [isSearch, setIsSearch] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.query.c) {
      const filtered = filterHotels(data, router.query.c);
      if (!filtered.length) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }
      setIsSearch(true);
    }
  }, []);

  return (
    <>
      <Seo
        pageTitle={_PAGE_TITLE}
        pageDesc={`Explore the world with ${_WEBSITE_TITLE}. Big savings on homes, hotels, flights, car rentals, taxis and attractions – build your perfect trip on any budget.`}
      />
      <HeroCover
        pageTitle={_PAGE_TITLE}
        subheading={`The ultimate luxury`}
        heading={`Booking`}
      />
      <div className="container py-5">
        {isSearch ? (
          noResults ? (
            <p className="py-5 txt-label txt-center">No results were Found</p>
          ) : (
            <BookingCards data={filterHotels(data, router.query.c)} />
          )
        ) : (
          <BookingCards data={data} />
        )}
      </div>
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

export default Booking;
