/* eslint-disable react/prop-types */
import "./Tours.css";
import { Link } from "react-router-dom";
const Tours = ({tours}) => {
    return (
        <div className="slider__tours">
      {tours && tours.length > 0
        ? tours.map((tour) => (
            <Link
              key={tour.id}
              className="slider__tours-container"
              to={`/detail/${tour.id}`}
              style={{ backgroundImage: `url(${tour.image})` }}
            >
              <div >
                <h4 className="image-overlay">{tour.title}</h4>
              </div>
            </Link>
          ))
        : ""}
    </div>
    );
};
export default Tours;