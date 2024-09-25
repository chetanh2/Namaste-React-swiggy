import { useContext } from "react";
import { IMG_CDN_URL } from "../core/constants/Constants";
import UserContext from "../utils/UserContext";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = (props) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    sla,
    costForTwo,
    avgRatingString,
  } = props

  const {loggedInUser} = useContext(UserContext)
  // console.log("avgRatingString",costForTwo);
  // const modifiedAvgRatingString = avgRatingString = "--"
  // const modifiedAvgRatingString = avgRatingString === "--" ? "--" : 2;

  return (
    <>
      <div className="card">
        <h4 className="mb-2">{loggedInUser}</h4>

        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{areaName}</h5>
        <span>
          <h4
            style={
              avgRatingString < 4
                ? { backgroundColor: "var(--light-red)" }
                : avgRatingString === "--"
                ? { backgroundColor: "white", color: "black" }
                : { color: "white" }
            }
          > 
            <i className="fa-solid fa-star"></i>
            {avgRatingString}
          </h4>
          <h4>•</h4>
          <h4>{sla?.lastMileTravelString ?? "2.0 km"}</h4>
          <h4>•</h4>
          <h4>{costForTwo ?? "₹200 for two"}</h4>
        </span>
      </div>
    </>
  );
};

export default RestaurantCard;
