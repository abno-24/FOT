/* eslint-disable react/prop-types */
import RestaurantCard from "./RestaurantCard.jsx";

export const RestaurantList = ({ restaurants }) => {
  return (
    <div className="max-container my-20">
      <RestaurantCard cardData={restaurants} />
    </div>
  );
};
