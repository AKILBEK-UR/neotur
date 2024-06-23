import { useState, useEffect } from 'react';
import './Swiper.css'; 
import Tours from '../Tours/Tours';
import { api } from '../../api';
import left from "../../assets/leftswiper.svg";
import right from "../../assets/rightswiper.svg"

const categories = ['popular', 'featured', 'most-visited', 'europe', 'asia'];



const Swiper = () => {
  const [discovery, setDiscovery] = useState([]);

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const { data } = await api.get(`tours/${activeCategory}?page=1&size=3`);
        setDiscovery(data);
      } catch (error) {
        console.error('Error fetching tours:', error);
      }
    };
    fetchTours();
  }, [activeCategory]);

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
    <div className="swiper-container" id='togo'>
      <h1 className="discover">Discover</h1>
      <div className="categories">
        <div className="categories__lists">
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
          <button onClick={handlePrevClick}><img src={left} alt="Previous" /></button>
          <button onClick={handleNextClick}><img src={right} alt="Next" /></button>
        </div>
      </div>

      <Tours 
      tours={discovery}
      count = {3} />
    </div>
  );
};

export default Swiper;
