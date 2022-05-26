import { BookingCard } from "components/Cards";
import { transformAmenitiesData, amenitiesToArr } from "helpers/utils";
import { v4 as uuidv4 } from "uuid";

const BookingCards = ({ data }) => {
  return (
    <ul className="row">
      {data.map((item) => {
        return (
          <li key={uuidv4()} className="col-4">
            <BookingCard
              id={item.id}
              amenities={transformAmenitiesData(amenitiesToArr(item.attributes.Amenities))}
              imgSrc={item.attributes.ImageSrc}
              title={item.attributes.Name}
              text={item.attributes.Description}
              price={item.attributes.Price}
              hasLink
            />
          </li>
        );
      })}
    </ul>
  );
};

export default BookingCards;
