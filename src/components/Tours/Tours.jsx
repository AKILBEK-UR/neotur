/* eslint-disable react/prop-types */
import "./Tours.css";
import { Link } from "react-router-dom";
const Tours = ({tours, count}) => {
    const displayedTours = tours.slice(0, count);
    return (
        <div className="slider__tours">
      {displayedTours && tours.length > 0
        ? displayedTours.map((tour) => (
            <Link
              key={tour.id}
              className="slider__tours-container"
              to={`/detail/${tour.id}`}
              style={{ backgroundImage: `url(${tour.imageUrl})` }}
            >
              <div >
                <h4 className="image-overlay">{tour.name}</h4>
              </div>
            </Link>
          ))
        : ""}
    </div>
    );
};
export default Tours;