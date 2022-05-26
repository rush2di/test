import axios from "axios";
import { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

import { API_BASE_URL } from "helpers/constants";
import { setNotification } from "helpers/utils";
import { useRouter } from "next/router";

const SearchBar = ({ closeSearch }) => {
  const { push } = useRouter();
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const getHotels = async () => {
      const res = await axios.get(API_BASE_URL + "api/hotels");

      if (!res) {
        return setNotification().onError("Please check your network").onClose();
      } else {
        const hotelsData = res.data.data.map((hotel) => ({
          id: hotel.id,
          name: hotel.attributes.Name,
        }));
        setHotels(hotelsData);
      }
    };

    getHotels();
  }, []);

  const handleOnSelect = (item) => {
    closeSearch();
    push(`/booking/hotel/${item.id}`);
  };

  return (
    <div className="nav__block">
      <div className="d-flex flex-column w-100">
        <hr className="bg-label mb-1 px-1-50" />
        <div className="w-100 p-1 pt-2">
          <ReactSearchAutocomplete items={hotels} onSelect={handleOnSelect} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
