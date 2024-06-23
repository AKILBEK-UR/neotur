import "./Detail.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import goBack from "../../assets/goback.svg";
import location from "../../assets/location.svg";
import logo from "../../assets/logo.png";
import Modal from "../../components/Modal/Modal";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { api } from "../../api";
import Submit from "../../components/Submit/Submit";
export default function Detail() {
    const { id } = useParams();
    const [tour, setTour] = useState(null);
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [comments, setComments] = useState("");
    const [count, setCount] = useState(1);

    const handleSubmit = () => {
        <Submit 
            phoneNumber = {phoneNumber}
            comments = {comments}
            count = {count}
            id = {tour.id}
        />
    }

    const handlePhoneNumberChange = (value) => {
        if (value && value.length > 12) {
            setPhoneNumber(value);
        } else {
            setPhoneNumber(value);
        }
    };

    useEffect(() => {
        const fetchTour = async () => {
          try {
            const { data } = await api.get(`tours/${id}`);
            setTour(data);
          } catch (error) {
            console.error('Error fetching tour:', error);
          }
        };
        fetchTour();
      }, [id]);

    const handleBookClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const increment = () => {
        setCount(prevCount => (prevCount < 6 ? prevCount + 1 : prevCount));
    };

    const decrement = () => {
        setCount(prevCount => (prevCount > 1 ? prevCount - 1 : prevCount));
    };

    if (!tour) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="detail">
                <div className="detail-header" style={{ backgroundImage: `url(${tour.image})` }}>
                    <button onClick={() => navigate(-1)} className="goback">
                        <img src={goBack} alt="Go Back" />
                        <p>Go Back</p>
                    </button>
                </div>
                <div className="detail-container">
                    <h1>{tour.title}</h1>
                    <p className="location" >
                        <img src={location} alt="Location" /> {tour.name }, {tour.country}
                    </p>
                    <h3>Description</h3>
                    <p style={{ marginBottom: "2rem" }}>
                        {tour.description}
                    </p>
                    <h3>Reviews</h3>
                    <div className="reviews">
                        <img src={logo} alt="Logo" style={{ width: "2rem" }} />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim eget amet viverra eget fames rhoncus. Eget enim venenatis enim porta egestas malesuada et. Consequat mauris lacus euismod montes.
                        </p>
                    </div>
                    <button onClick={handleBookClick} className="book">
                        <h3>Book Now</h3>
                    </button>
                </div>
            </div>

            <Modal show={showModal} onClose={handleCloseModal}>
                <h1>Info</h1>
                <p className="modal_title">
                    To submit an application for a tour reservation, you need to fill in your information and select the number of people for the reservation
                </p>
                <form>
                    <label className="modal_input">
                        Phone number
                        <PhoneInput
                            international
                            defaultCountry="KG"
                            onChange={handlePhoneNumberChange}
                            value={phoneNumber}
                        />
                    </label>
                    <label className="modal_input">
                        Commentaries to trip
                        <input
                            type="text"
                            placeholder="Write your wishes to trip..."
                            onChange={(e) => setComments(e.target.value)}
                        />
                    </label>
                </form>
                <label className="modal_input">
                    Number of participants
                    <div className="participants">
                        <button type="button" onClick={decrement}>
                            -
                        </button>
                        <span>{count}</span>
                        <button type="button" onClick={increment}>
                            +
                        </button>
                    </div>
                </label>
                <button type="submit" className="submit-btn" onClick={handleSubmit} >
                    Submit
                </button>
            </Modal>
        </>
    );
}
