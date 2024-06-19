import "./Recomended.css"
import { NavLink } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export default function Recomended({rec,displayCount}){
    // eslint-disable-next-line react/prop-types
    const displayedTours = rec.slice(0, displayCount);
    return(<>
        <div className="recomended-container">
            <h1>Recomended</h1>
            <NavLink to="/detail">
            <div className="recomends__tours">
                {displayedTours.map((tour) => (
                    <div className="recomends__tours-container" key={tour.id}>
                        <img src={tour.image} alt={tour.name} />
                        <div className="image-overlay">
                            <h2>{tour.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
            </NavLink>
        </div>
    </>);
}