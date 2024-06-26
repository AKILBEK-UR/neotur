import "./MainPage.css";
import Recomended from "../../components/Recomended/Recomended";
import Swiper from "../../components/Swiper/Swiper";
import mainlogo from "../../assets/gradient.svg";
import arrow from "../../assets/Arrow1.svg";
import { useRef } from "react";

export default function MainPage() {
  const swiperRef = useRef(null);

  const handleAclick = (e) => {
    e.preventDefault();
    swiperRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="Mainpage">
      <div className="gradient">
        <div className="gradient__title">
          <h1 className="gradient__title_h1">Winter Vacation Trips</h1>
          <h3 className="gradient__title_h3">
            Enjoy your winter vacations with warmth and amazing sightseeing on
            the mountains. Enjoy the best experience with us!
          </h3>
          <a className="gradient__title_a" href="#togo" onClick={handleAclick}>
            Lets Go!
            <img src={arrow} alt="Arrow" />
          </a>
        </div>
        <img src={mainlogo} alt="Main Logo" />
      </div>

      <div id="togo" ref={swiperRef}>
        <Swiper />
      </div>
      <Recomended />
    </div>
  );
}
