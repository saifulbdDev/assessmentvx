/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import banner1 from '../../images/banner1-4.jpg';
import banner2 from '../../images/banner1-5.jpg';
import banner3 from '../../images/banner1-6.jpg';
import BulletsNav from './BulletsNav/BulletsNav';
import './index.css';
import InfoBlurb from './InfoBlurb/InfoBlurb';

function Header(props) {
  const [activeBullet, setActiveBullet] = useState(0);
  const imageGallery = [
    {
      preTitle: 'The Ultimate',
      title: 'The Ultimate',
      description: '',
      image: banner1,
      left: '',
    },
    {
      preTitle: 'The Ultimate',
      title: 'The Ultimate',
      description: '',
      image: banner2,
      left: '',
    },
    {
      preTitle: 'The Ultimate',
      title: 'The Ultimate',
      description: '',
      image: banner3,
      left: '',
    },
  ];
  const defaultObject = { title: '', description: '', image: '' };
  const initialObject = imageGallery.length
    ? imageGallery[0].image
    : 'https://res.cloudinary.com/jkeohan/image/upload/v1560709227/mars-landing_eh42f9.jpg';
  const [isHamburgerActive, setHamburgerActive] = useState(false);

  const handleClick = (id) => {
    setActiveBullet(id);
  };

  const lazyLoadBackgroundImages = () => {
    return imageGallery.map((d, i) => {
      return (
        <div
          key={i}
          style={{ background: `url(${d.image})`, display: 'none' }}
        ></div>
      );
    });
  };

  const style = {
    backgroundImage: imageGallery.length
      ? `url(${imageGallery[activeBullet].image}`
      : `url(${defaultObject.image})`,

    transition: `background-image .5s ease-in-out`,
  };
  const bannerstyle = {
    width: props.bannerstyle.width,
    height: props.bannerstyle.height,
  };

  return (
    <section className="banner-section">
      <div className="banner-section-full">
        <div className="banner" style={bannerstyle}>
          <div className="banner-slide" style={style}>
            {lazyLoadBackgroundImages()}

            {imageGallery.length ? (
              <InfoBlurb activeBullet={imageGallery[activeBullet]} />
            ) : (
              <InfoBlurb activeBullet={initialObject[activeBullet]} />
            )}

            <BulletsNav
              activeBullet={activeBullet}
              imageGallery={imageGallery}
              onClick={handleClick}
            />
          </div>
          <div class="overlay overlay-dark opacity-6"></div>
        </div>
      </div>
    </section>
  );
}

export default Header;
