import React from "react";
import { shimmer_card_unit } from "../core/constants/Constants";

const CardShimmer = () => {
  return (
    <div>
      <div className="shimmer-container">
        {Array(shimmer_card_unit)
          .fill("")
          .map((element, index) => {
            return (
              <>
                <div key={index.toString() + 1} className="shimmer-card">
                  <div className="shimmer-img stroke animate"></div>
                  <div className="shimmer-title stroke animate"></div>
                  <div className="shimmer-tags stroke animate"></div>
                  <div className="shimmer-details">
                    <div className="shimmer-details-rating stroke animate"></div>
                    <div className="shimmer-details-rating stroke animate"></div>
                    <div className="shimmer-details-rating stroke animate"></div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default CardShimmer;


// Array Creation and Mapping:

// {Array(shimmer_card_unit).fill("")} creates an array with a length of shimmer_card_unit, filled with empty strings. This array serves as the basis for rendering the shimmer cards.
// .map((element, index) => { ... }) iterates over this array, and for each iteration, a shimmer card is created. The index is used to provide a unique key for each element.