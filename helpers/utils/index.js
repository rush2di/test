import { DEFAULT_AMENITIES } from "helpers/constants";
import { toast } from "react-toastify";

const joinClassNames = (classNamesArray) => {
  return classNamesArray.join(" ");
};

const setNotification = (options) => {
  if (!options) {
    return {
      onSuccess: ({ message = "Success" }) => ({
        onClose: (callback) => {
          const options = {
            message,
            theme: "dark",
            type: "success",
            onClose: callback,
          };
          return setNotification(options);
        },
      }),
      onError: ({ message = "Error" }) => ({
        onClose: (callback) => {
          const options = {
            message,
            type: "error",
            theme: "dark",
            onClose: callback,
          };
          return setNotification(options);
        },
      }),
    };
  }

  const { message, ...rest } = options;

  return toast(message, rest);
};

const parseNotificationsCount = (data) => {
  let counter = 0;
  data.data.forEach((item) => {
    if (item.attributes.Opened === false) counter++;
  });

  return counter > 0 ? counter : false;
};

const amenitiesToArr = (str) => {
  const _SEPARATOR = ", ";

  return str.includes(_SEPARATOR)
    ? str.split(_SEPARATOR).map((item) => item)
    : [str];
};

const camelToSpace = (str) => {
  var result = str.replace(/([A-Z])/g, " $1").toLowerCase();
  return result.trim().toLowerCase();
};

const transformAmenitiesData = (dataArr) => {
  const transformedVals = {};
  const keys = Object.keys(DEFAULT_AMENITIES);

  keys.forEach((key) => {
    const keyMatcher = camelToSpace(key);

    if (dataArr.includes(keyMatcher)) {
      transformedVals[key] = true;
    } else {
      transformedVals[key] = false;
    }
  });

  return transformedVals;
};

const filterHotels = (data, searchedTerm) => {
  return data.filter((item) => item.attributes.Location === searchedTerm);
};

export {
  joinClassNames,
  setNotification,
  parseNotificationsCount,
  transformAmenitiesData,
  amenitiesToArr,
  filterHotels,
};
