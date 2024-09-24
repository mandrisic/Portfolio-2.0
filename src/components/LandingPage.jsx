import React from 'react'
import './css/LandingPage.css';
import play from '../assets/img/play.png';
import legs from '../assets/img/legs.png';
import flower from '../assets/img/flower.png';
import page from '../assets/img/page.png';
import instax1 from '../assets/img/me-polaroid.png';
import ladybug from '../assets/img/ladybug.png';
import starblue from '../assets/img/starblue.png';

const LandingPage = () => {
  return (
    <div className='container'>
        <div className="landing-page">
            {/* Title */}
            <div className="intro">
                <h1 className='title-h1'>Mirna Andrišić</h1>
                <h2 className='subtitle-h2'>Frontend developer</h2>
            </div>

            {/* Description */}
            <div className="description">
            <p>I'm a passionate frontend developer with a degree in <span className='desc'>Information Technology and Publishing</span> from the University of Osijek. My love for web development grew during my studies, and I'm now looking for <span className='desc'>opportunities to work</span> in the IT world. This portfolio showcases <span className='desc'>my skills and projects</span> as I continue to grow in the field.</p>
            </div>
        </div>
        
        <img src={play} loading="lazy" alt="record" className='record absolute' />
        <img src={legs} loading="lazy" alt="legs" className='legs absolute' />
        <div className="box a"><p>hello world</p></div>
        <div className="box b"><p>this is my portfolio</p></div>
        <img src={flower} loading="lazy" alt="pressed flower" className='flower absolute' />

        <img src={page} loading="lazy" alt="a torn up letter" className='page absolute' />
        <img src={instax1} loading="lazy" alt="profile" className='instax1 absolute' />
        <div className="name"><p>Mirna</p></div>
        <img src={ladybug} loading="lazy" alt="ladybug" className='ladybug absolute' />
        <img src={starblue} loading="lazy" alt="star" className='starblue absolute' />
    </div>
  )
}

export default LandingPage
