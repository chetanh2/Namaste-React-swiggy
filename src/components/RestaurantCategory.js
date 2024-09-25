import React, { useEffect, useState } from "react";
import "./resCategory.css";
import RestaurantItemList from "./RestaurantItemList";

const RestaurantCategory = (props) => {
  const { data } = props;
  console.log("data......", data);
  const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    console.log("Clicked");
    setShowItem(!showItem);
  };

  return (
    <div className="flex flex-col">
      <div onClick={() => handleClick()}>     
        <button className="font-bold p-4 border-b-2 shadow-lg  w-full text-left my-2">
          <div className="">
            {data?.title} ({data?.itemCards.length})
          </div>
        </button>
      </div>
      {/* Accordion Body */}
      {showItem && <RestaurantItemList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
