import React, { useContext, useState } from "react";
import useResData from "../hooks/useResData";
import { FOODFIRE_API_URL } from "../core/constants/Constants";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import CardShimmer from "./CardShimmer";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [allRestaurants, FilterRes] = useResData(FOODFIRE_API_URL);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchText, setSearchText] = useState("");

  const {setUserName,loggedInUser} = useContext(UserContext)

  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      // const filteredData = restaurants.filter((restaurant) =>
      //   restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
      // );
      const filteredData = restaurants.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );

      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchText}"`
        );
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  return (
    <div className="body-container">
      <div className="search-container ">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            // when user will enter the data, it automatically called searchData function so it work same as when you click on Search button
            searchData(e.target.value, allRestaurants);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // user click on button searchData function is called
            searchData(searchText, allRestaurants);
          }}
        >
          Search
        </button>
      </div>
        <div className="my-4">
          <label className="ml-6">UserName : </label>
          <input
            type="text"
            className="border border-gray-400 w-64 p-3 rounded-full"
            placeholder="Change User..."
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value)
            }}
          />
        </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {allRestaurants?.length === 0 && FilterRes?.length === 0 ? (
        <CardShimmer />
      ) : (
        <div className="restaurant-list">
          {(filteredRestaurants === null ? FilterRes : filteredRestaurants).map(
            (restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant?.info?.id}
                  key={restaurant?.info?.id}
                >
                  <RestaurantCard {...restaurant?.info} />
                </Link>
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default Body;
