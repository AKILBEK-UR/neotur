import "./Slider.css";

export default function Slider(){

    return (
    <div className="slider">
        <div className="slider__header">
            <h1>Discover</h1>
            <div className="slider_buttons">
                <button><img src="src/assets/leftswiper.svg" /></button>
                <button><img src="src/assets/rightswiper.svg"/></button>
            </div>
        </div>
        <div className="slider__list">
            <ul>
                <li>Popular</li>
                <li>Featured</li>
                <li>Most Visted</li>
                <li>Europe</li>
                <li>Asia</li>
            </ul>
        </div>
        <div className="slider__tours">
            <div className="slider__tours-container">
                <img src="public/image/mountfuji.png"/>
                <div className="image-overlay"> <h2>Mount Fuji</h2></div>
            </div>
            <div className="slider__tours-container">
                <img src="public/image/northernmountain.png"/>
                <div className="image-overlay"> <h2>Northern Mountain</h2></div>
            </div>
            <div className="slider__tours-container">
                <img src="public/image/racek'shouse.png"/>
                <div className="image-overlay"> <h2> Racek's House</h2></div>
            </div>
        </div>
    </div>);
}