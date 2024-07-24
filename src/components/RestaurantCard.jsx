/* eslint-disable react/prop-types */

const RestaurantCard = ({ cardData }) => {
  return (
    <div className="w-full flex justify-between items-center gap-8 flex-wrap">
      {cardData.map((data) => {
        return (
          <div key={data.info.id} className="border border-red-400 w-[20%]">
            <div>{data.info.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantCard;
