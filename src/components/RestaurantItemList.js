import React from "react";
import { ITEM_IMG_CDN_URL } from "../core/constants/Constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantItemList = (props) => {
  const { items } = props;
  console.log("itemssss", items);

  const dispatch = useDispatch()
  const handleAddItem = (item) => {
    console.log("itemmmss",item);
    
    // Dispatch an action jsd
    dispatch(addItem(item))  
  };
  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 m-2 border-b-2 border-gray-200"
          key={item?.card?.info?.id}
        >
          <div className="mb-4">
            {item?.card?.info?.isBestseller ? (
              <span className="text-orange-500 font-bold">"BESTSELLER"</span>
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-between items-center">
            <div className="ml-4 w-9/12">
              <span className="font-bold">{item?.card?.info?.name}</span>
              <div className="my-2">- ₹ {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</div>
              <p className="text-xs my-6">{item?.card?.info?.description}</p>
            </div>
            <div className="3/12">
              <div className="absolute">
                <button
                  onClick={()=> handleAddItem(item)}
                  className="p-2 bg-white shadow-lg text-green-400 mx-5 rounded-lg"
                >
                  Add +
                </button>
              </div>
              <img
                className="menu-item-img"
                src={ITEM_IMG_CDN_URL + item?.card?.info?.imageId}
                alt={item?.card?.info?.name}
              />
            </div>
          </div>
          {/* <p className="text-xs my-6">{item?.card?.info?.description}</p> */}
        </div>
      ))}
    </div>
  );
};

export default RestaurantItemList;
