import { useState } from 'react';
import './Swiper.css'; 
import Featured from "../../mock.json";
import Tours from '../Tours/Tours';
const categories = ['Popular', 'Featured', 'Most Visited',  'Europe', 'Asia'];

const SwiperComponent = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handlePrevClick = () => {
    const currentIndex = categories.indexOf(activeCategory);
    const newIndex = (currentIndex - 1 + categories.length) % categories.length;
    setActiveCategory(categories[newIndex]);
  };

  const handleNextClick = () => {
    const currentIndex = categories.indexOf(activeCategory);
    const newIndex = (currentIndex + 1) % categories.length;
    setActiveCategory(categories[newIndex]);
  };

  return (
    <div className="swiper-container">
    <h1 className='discover'>Discover</h1>
      <div className="categories">
        <div className='categories__lists'>
        {categories.map((category, index) => (
          <button 
            key={index} 
            className={category === activeCategory ? 'active' : ''} 
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))} 
        </div>
        <div>
            <button onClick={handlePrevClick}><img src='src/assets/leftswiper.svg'/></button>
            <button onClick={handleNextClick}><img src='src/assets/rightswiper.svg'/></button>
        </div>
      </div>
        
        <Tours
         tours = {Featured}
         displayCount={6}
        />
        
      <div className="category-content">
        
      </div>
    </div>
  );
};

export default SwiperComponent;
