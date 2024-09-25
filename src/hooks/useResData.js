import { useEffect, useState } from "react";

const useResData = (apiUrl) => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();

      function checkJsonData(jsonData) {
        console.log("jsonData",jsonData);
        
        const cardItem = jsonData?.data?.cards.find((cardItem) => {
          // Check if the restaurant data is present
          return cardItem?.card?.card?.gridElements?.infoWithStyle?.restaurants !== undefined;
        });
      
        // If cardItem is found, return the restaurant data, otherwise return undefined
        return cardItem?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      }
      const resData = checkJsonData(json);
      console.log("resData",resData);
      setAllRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.error(error);
    }
  }
  return [allRestaurants,filteredRestaurants]
};
export default useResData;
