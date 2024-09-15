import React from 'react';
import receipt from '../assets/img/file.png';
import './css/BioPage.css';

const BioPage = () => {
  return (
    <div className='bio-page'>
      <div className="left-receipt">
      <img src={receipt} alt="" />
      <div className="text-overlay">
        <p>Education</p>
        <p>Work experience</p>
        <p>Technologies</p>
        <p>Personality</p>
      </div>
      </div>
      <div className="right-content">
        {/* Title */}
      <h3 className='subtitle-h3'>Short bio</h3>
      {/* Education, past work in short */}
      <h3 className='subtitle-h3'>Education & past work</h3>
      {/* Technologies */}
      <h3 className='subtitle-h3'>Technologies</h3>
      <ul>
        <li>Javascript, React, HTML, CSS</li>
        <li></li>
      </ul>
      </div>
    </div>
  );
}

export default BioPage
