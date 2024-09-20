import React, {useState} from 'react';
import receipt from '../assets/img/file.png';
import board from '../assets/img/1280x900-wcyVBR.png';
import triangle from '../assets/img/triangle.png';
import badge from '../assets/img/badge.png';
import data from './data';
import cv from '../assets/CV-MIRNA-ANDRISIC.pdf';
import './css/BioPage.css';

const BioPage = () => {
  const [activeCategory, setActiveCategory] = useState('education'); // Default kategorija

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const { title, headerImage, otherImages, text } = data[activeCategory] || {}; // Dohvati naslov i stavke za aktivnu kategoriju

  return (
    <div className='bio-page'>
    <img className='triangle' src={triangle} alt="triangle hook" />
      <img className='board' src={board} alt="cork board" />
      <div className="left-receipt">
        <img className='receipt' src={receipt} alt="" />
        <div className="text-overlay">
          <p className={activeCategory === 'education' ? 'active' : ''} onClick={() => handleCategoryChange('education')}>Education</p>
          <p className={activeCategory === 'experience' ? 'active' : ''} onClick={() => handleCategoryChange('experience')}>Work experience</p>
          <p className={activeCategory === 'technologies' ? 'active' : ''} onClick={() => handleCategoryChange('technologies')}>Technologies</p>
          <p className={activeCategory === 'hobbies' ? 'active' : ''} onClick={() => handleCategoryChange('hobbies')}>Hobbies</p>
        </div>
        <p className='hope'>See the full CV: </p>
        <p className='hope line'><a href={cv}>Click me</a></p>
        <img src={badge} alt="badge" className='badge' />
      </div>

      <div className="right-content">
        <div className='header-image'>
            {headerImage && <img src={headerImage} alt={`${title} header`} className={`header ${title.toLowerCase()}`} />}
        </div>
        <div className='other-images'>
          {otherImages && otherImages.map((image, index) => (
            <img key={index} src={image} alt={`${title} content ${index}`} className={`other other-${title.toLowerCase()}-${index}`} />
          ))}
        </div>
        <div className="sections">
          {data[activeCategory]?.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className={`notepad notepad-${sectionIndex}`}>
              <ul className={`items-list items-list-${title.toLowerCase()}-${sectionIndex}`}>
                {section.content.map((item, index) => (
                  <li key={index} className={`line-${title.toLowerCase()} line-${title.toLowerCase()}-${sectionIndex}-${index}`}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BioPage
