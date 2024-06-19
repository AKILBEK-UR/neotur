import "./Tours.css";
// eslint-disable-next-line react/prop-types
const Tours = ({ tours, displayCount }) => {

    // eslint-disable-next-line react/prop-types
    const displayedTours = tours.slice(0, displayCount);

    return (
        <div className="slider">
            <div className="slider__tours">
                {displayedTours.map((tour) => (
                    <div className="slider__tours-container" key={tour.id}>
                        <img src={tour.image} alt={tour.name} />
                        <div className="image-overlay">
                            <h2>{tour.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Tours;