import "./MainPage.css"
import Slider from "../../components/Slider/Slider";
export default function MainPage(){


    return (<div className="Mainpage">
    
        <div className="gradient">
            <div className="gradient__title">
                <h1 className="gradient__title_h1">Winter Vacation Trips</h1>
                <h3 className="gradient__title_h3">Enjoy your winter vacations with warmth and amazing sightseeing on the mountains. Enjoy the best experience with us!</h3>
                <button className="gradient__title_button"> 
                    Lets Go!
                    <img src="src/assets/Arrow1.svg"/> 
                </button>
            </div>
            <img src="src/assets/gradient.svg" alt="hero img"/>
        </div>

        <Slider/>
    </div>);
}