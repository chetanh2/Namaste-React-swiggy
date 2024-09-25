import React from "react";
import { useParams } from "react-router-dom";
import useResMenuData from "../hooks/useResMenuData";
import {
  FOODFIRE_MENU_API_URL,
  IMG_CDN_URL,
} from "../core/constants/Constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, menuItems, allCategories] = useResMenuData(
    FOODFIRE_MENU_API_URL,
    resId
  );

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <p>User Offline</p>;
  }
  console.log("allCategories", allCategories);

  return (
    <div className="w-9/12">
      <div className="restaurant-menu">
        <div className="restaurant-summary">
          <img
            className="restaurant-img"
            src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
            alt={restaurant?.name}
          />
          <div className="restaurant-summary-details">
            <h2 className="restaurant-title">{restaurant?.name}</h2>
            <p className="restaurant-tags">
              {restaurant?.cuisines?.join(", ")}
            </p>
            <div className="restaurant-details">
              <div
                className="restaurant-rating"
                style={
                  restaurant?.avgRating < 4
                    ? { backgroundColor: "var(--light-red)" }
                    : restaurant?.avgRating === "--"
                    ? { backgroundColor: "white", color: "black" }
                    : { color: "white" }
                }
              >
                <i className="fa-solid fa-star"></i>
                <span>{restaurant?.avgRating}</span>
              </div>
              <div className="restaurant-rating-slash">|</div>
              <div>{restaurant?.sla?.slaString}</div>
              <div className="restaurant-rating-slash">|</div>
              <div>{restaurant?.costForTwoMessage}</div>
            </div>
          </div>
        </div>
        {/* Categories accordion */}
        {allCategories.map((category) => (
          <RestaurantCategory key={category.title} data={category} />
        ))}
        {/* <div className="restaurant-menu-content">
          <div className="menu-items-container">
            <div className="menu-title-wrap">
              <h3 className="menu-title">Recommended</h3>
              <p className="menu-count">{menuItems.length} ITEMS</p>
            </div>
            <div className="menu-items-list">
              {menuItems.map((item) => (
                <div className="menu-item" key={item?.id}>
                  <div className="menu-item-details">
                    <h3 className="item-title">{item?.name}</h3>
                    <p className="item-cost">
                      {item?.price > 0
                        ? new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                          }).format(item?.price / 100)
                        : " "}
                    </p>
                    <p className="item-desc">{item?.description}</p>
                  </div>
                  <div className="menu-img-wrapper">
                    {item?.imageId && (
                      <img
                        className="menu-item-img"
                        src={ITEM_IMG_CDN_URL + item?.imageId}
                        alt={item?.name}
                      />
                    )}
                    <button className="add-btn"> ADD +</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
