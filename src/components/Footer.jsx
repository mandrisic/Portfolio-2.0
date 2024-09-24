import React from 'react';
import polaroid from '../assets/img/me2-polaroid.svg';
import card from '../assets/img/card.png';
import sticker from '../assets/img/sticker.png';
import torn from '../assets/img/torn.png';
import wing from '../assets/img/wing.png';
import space from '../assets/img/space.png';
import plant from '../assets/img/lsls.png';
import sky from '../assets/img/sky.png';
import bear from '../assets/img/bear.png';
import people from '../assets/img/6213e3ecab746d531cb1276f2a1e5697.jpg';
import './css/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <h2>Contact Me</h2>
      <p>If you liked my portfolio, feel free to reach out!</p>
      <div className="footer-contacts">
        <p>Email: <a href="mailto:mirnandrisic@gmail.com">mirnandrisic@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/mandrisic" target="_blank" rel="noopener noreferrer">github.com/mandrisic</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/mirna-andrisic/" target="_blank" rel="noopener noreferrer">/in/mirna-andrisic/</a></p>
      </div>
      <img className='polaroid absolute' loading="lazy" src={polaroid} alt="my polaroid" />
      <img className='card absolute' loading="lazy" src={card} alt="card torn" />
      <img className='sticker absolute' loading="lazy" src={sticker} alt="betty sticker" />
      <img className='torn absolute' loading="lazy" src={torn} alt="torn paper" />
      <img className='wing absolute' loading="lazy" src={wing} alt="butterfly wing" />

      <img className='people absolute' loading="lazy" src={people} alt="people" />
      <img className='space absolute' loading="lazy" src={space} alt="spaceship" />
      <img className='plant absolute' loading="lazy" src={plant} alt="plant" />
      <img className='sky absolute' loading="lazy" src={sky} alt="night sky" />
      <img className='bear absolute' loading="lazy" src={bear} alt="bear" />
    </div>
  );
};

export default Footer
