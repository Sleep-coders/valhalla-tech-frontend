import React, { useCallback, useEffect, useState, useRef } from "react";
import "./styles/store.categoryFilter.starRating.scss";

function StoreCategoryFilterStarRating({ value, onChange }) {
  const [ratingVal, setRating] = useState(value);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    onChange({ value: ratingVal });
  }, [ratingVal, onChange]);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || ratingVal) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(ratingVal)}
          >
            <i className="fa fa-star"></i>
          </button>
        );
      })}
    </div>
  );
}

export default StoreCategoryFilterStarRating;