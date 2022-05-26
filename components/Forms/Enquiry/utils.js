export const transformValues = (values) => {
  return {
    Name: values.name,
    Email: values.email,
    Checkin: values.checkin,
    Checkout: values.checkout,
    Phone: values.phone,
    Guests: values.guests,
  };
};
