/* eslint-disable react/prop-types */
import React, { useMemo } from "react";
import "./Tours.css";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

const Tours = ({ tours, count }) => {
  const displayedTours = useMemo(() => tours.filter((_, index) => index < count), [tours, count]);

  return (
    <div className="slider__tours">
      {displayedTours && displayedTours.length > 0 ? (
        displayedTours.map((tour) => (
          <LazyLoad key={tour.id} height={200} offset={100}>
            <Link
              className="slider__tours-container"
              to={`/detail/${tour.id}`}
              style={{ backgroundImage: `url(${tour.imageUrl})` }}
            >
              <div>
                <h4 className="image-overlay">{tour.name}</h4>
              </div>
            </Link>
          </LazyLoad>
        ))
      ) : (
        <p>No tours available.</p>
      )}
    </div>
  );
};

export default React.memo(Tours);

