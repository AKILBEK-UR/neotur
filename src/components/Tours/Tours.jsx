/* eslint-disable react/prop-types */
import "./Tours.css";
import { Link } from "react-router-dom";

const Tours = ({ tours, count }) => {
  const displayedTours = tours.filter((_, index) => index < count);

  return (
    <div className="slider__tours">
      {displayedTours && displayedTours.length > 0 ? (
        displayedTours.map((tour) => (
          <Link
            key={tour.id}
            className="slider__tours-container"
            to={`/detail/${tour.id}`}
            style={{ backgroundImage: `url(${tour.imageUrl})` }}
          >
            <div>
              <h4 className="image-overlay">{tour.name}</h4>
            </div>
          </Link>
        ))
      ) : (
        <p>No tours available.</p>
      )}
    </div>
  );
};

export default Tours;
