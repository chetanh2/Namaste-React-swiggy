import React, { useEffect, useState } from "react";
import { MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY } from "../core/constants/Constants";

const useResMenuData = (FOODFIRE_MENU_API_URL, resId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const response = await fetch(FOODFIRE_MENU_API_URL + resId);
    const json = await response.json();

    // Set restaurant data
    console.log("json", json);
    const restaurantData = json?.data?.cards
      ?.map((cardsData) => cardsData.card)
      ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card.info;

    console.log("restaurantData", restaurantData);
    setRestaurant(restaurantData);

    // Set menu item data
    // const menuItemsData = json?.data?.cards
    //   .find((x) => x.groupedCard)
    //   ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)?.filter((x) => x["@type"] === MENU_ITEM_TYPE_KEY)?.map((x)=> x.itemCards)?.flat().map((x)=> x.card?.info) || [];
    // console.log("menuItemsData", menuItemsData);

    const menuItemsData = json?.data?.cards.find((x)=> x.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x)=> x.card.card)?.filter((x)=> x["@type"] === MENU_ITEM_TYPE_KEY)?.map((x)=> x.itemCards)?.flat().map((x)=> x.card?.info) || [];

    // const uniqueMenuItems = []
    // menuItemsData.forEach((item)=>{
    //     if(!uniqueMenuItems.find((x)=> x.id === item.id)){
    //         uniqueMenuItems.push(item)
    //     }
    // })

    // Filter duplicates based on the 'id' property using self and filter
    const uniqueMenuItems = menuItemsData.filter((item, index, self) =>
      index === self.findIndex((i)=> i.id === item.id)
    );

    const categories = json?.data?.cards.find((x)=> x.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x)=> x.card.card)?.filter((x)=> x["@type"] === MENU_ITEM_TYPE_KEY)
    setAllCategories(categories)
    console.log("categories>>>",categories);
    
    setMenuItems(uniqueMenuItems)
    // console.log("menuItemsData", menuItemsData,uniqueMenuItems);

  }
  return [restaurant, menuItems,allCategories];
};

export default useResMenuData;
