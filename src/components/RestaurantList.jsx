/* eslint-disable react/prop-types */
import RestaurantCard from "./RestaurantCard.jsx";

export const RestaurantList = ({ restaurants }) => {
  return (
    <div className="max-container border border-red-400">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} cardData={restaurants} />
      ))}
    </div>
  );
};
