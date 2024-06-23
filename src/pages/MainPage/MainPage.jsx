import "./MainPage.css"
import Recomended from "../../components/Recomended/Recomended";
import Swiper from "../../components/Swiper/Swiper";

export default function MainPage(){

    return (<div className="Mainpage">
    
        <div className="gradient">
            <div className="gradient__title">
                <h1 className="gradient__title_h1">Winter Vacation Trips</h1>
                <h3 className="gradient__title_h3">Enjoy your winter vacations with warmth and amazing sightseeing on the mountains. Enjoy the best experience with us!</h3>
                <a className="gradient__title_a" href="#togo"> 
                    Lets Go!
                    <img src="src/assets/Arrow1.svg"/> 
                </a>
            </div>
            <img src="src/assets/gradient.svg" alt="hero img"/>
        </div>

        
        <Swiper />
        <Recomended/>
    </div>);
}