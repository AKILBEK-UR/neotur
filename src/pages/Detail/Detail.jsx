import "./Detail.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import example from "../../mock.json";
import goBack from "../../assets/goback.svg"
import location from "../../assets/location.svg"
import logo from "../../assets/logo.png"
import Modal from "../../components/Modal/Modal";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function Detail(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [comments, setComments] = useState("");

    const handleBookClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const [count, setCount] = useState(1);

  const increment = () => {
    setCount(prevCount => {
      if (prevCount < 6) {
        return prevCount + 1;
      }
      return prevCount;
    });
  };

  const decrement = () => {
    setCount(prevCount => {
      if (prevCount > 1) {
        return prevCount - 1;
      }
      return prevCount;
    });
  };




    const tours = example.find((tour) => tour.id === parseInt(id))
    return (<>
        <div className="detail">
            <div className="detail-header" style={{backgroundImage:`url(${tours.image})`}}>
                <button onClick={() => navigate(-1)} className="goback">
                    <img src={goBack}/>
                    <p>Go Back</p>
                </button>
            </div>
            <div className="detail-container">
                <h1>{tours.title}</h1>
                <p style={{marginBottom:"2rem"}}><img src ={location}/> {tours.location} </p>
                <h3>Description</h3>
                <p style={{marginBottom:"2rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim eget amet viverra eget fames rhoncus. Eget enim venenatis enim porta egestas malesuada et. Consequat mauris lacus euismod montes.</p>                    
                <h3>Reviews</h3>
                <div className="reviews">
                    <img src={logo} style={{width: "2rem"}}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim eget amet viverra eget fames rhoncus. Eget enim venenatis enim porta egestas malesuada et. Consequat mauris lacus euismod montes.</p>
                </div>
                <bottom onClick={handleBookClick} className="book" > <h3>Book Now</h3></bottom>
            </div>
        </div>

        <Modal show={showModal} onClose={handleCloseModal}>
            <h1>Info</h1>
            <p className="modal_title">To submit an application for a tour reservation, you need to fill in your information and select the number of people for the reservation</p>
            <form>
                <label className="modal_input">
                    Phone number
                    <PhoneInput
                        international
                        defaultCountry="KG"
                        value={phoneNumber}
                        onChange={(value) => setPhoneNumber(value)}
                    />
                </label>
                <label className="modal_input">
                    Commentaries to trip
                    <input
                        type="text"
                        placeholder="Write your wishes to trip..."
                        onChange={(comments) => setComments(comments)}
                    />
                </label>   
            </form>
            <label className="modal_input">
                Number of participants
                <div className="participants">
                    <button
                        type="button"
                        onClick={decrement}
                    >
                        -
                    </button>
                    <span>{count}</span>
                    <button
                        type="button"
                        onClick={increment}
                    >
                        +
                    </button>        
                </div>
            <button onClick={handleBookClick} type="submit" className="submit-btn">Submit</button>
            </label>
        </Modal>
    </>);
}