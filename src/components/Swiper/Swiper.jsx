import { useState, useEffect } from 'react';
import './Swiper.css'; 
import Tours from '../Tours/Tours';
import { api } from '../../api';
import left from "../../assets/leftswiper.svg";
import right from "../../assets/rightswiper.svg";

const categories = ['popular', 'featured', 'most-visited', 'europe', 'asia'];

const Swiper = () => {
  const [discovery, setDiscovery] = useState([]);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const { data } = await api.get(`tours/${activeCategory}?page=${currentPage}`);
        setDiscovery(data);
      } catch (error) {
        console.error('Error fetching tours:', error);
      }
    };
    fetchTours();
  }, [activeCategory, currentPage]);

  const handlePrevClick = () => {
    setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const handleNextClick = () => {
    setCurrentPage(prevPage => prevPage + 1);
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
              onClick={() => {
                setActiveCategory(category);
                setCurrentPage(1); // Reset to first page when category changes
              }}
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
      <Tours tours={discovery} count={3} />
    </div>
  );
};

export default Swiper;
