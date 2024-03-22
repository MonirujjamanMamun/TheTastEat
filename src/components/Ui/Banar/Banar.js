import Image from 'next/image';
import React from 'react';
import hero from '@/assets/heroImg/hero-image-2.svg';
import hero1 from '@/assets/heroImg/hero-image-1.jpg';
import Button from '../Button/Button';

const Banar = () => {
  const myStyle = {
    opacity: 0,
    WebkitTransform:
      'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
    MozTransform:
      'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
    MsTransform:
      'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
    transform:
      'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
  };
  return (
    <div class="hero-section">
      <div class="container w-container">
        <div class="hero-wrap">
          <div class="w-layout-grid hero-grid">
            <div
              id="w-node-b48d4e08-4d7a-06f6-556a-a2f308bcd935-4f741cb4"
              data-w-id="b48d4e08-4d7a-06f6-556a-a2f308bcd935"
              //   style={{ opacity: 0 }}
              class="hero-content-wrap"
            >
              <h1 class="hero-title">
                Welcome to
                <br />
                Restaurant
              </h1>
              <p class="hero-content">
                The people, food and the prime locations make the perfect place
                good friends &amp; family to come together and have great time.
              </p>
              <Button title={'View Menu'} />
            </div>
            <div
              id="w-node-_72000a08-ac76-1687-0627-60bf5a4c26f7-4f741cb4"
              class="hero-image-wrap"
            >
              <div class="hero-image-area">
                <Image
                  src={hero1}
                  loading="lazy"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 84vw, (max-width: 991px) 69vw, (max-width: 1279px) 43vw, (max-width: 1439px) 89vw, 1201px"
                  alt="Hero Image"
                  class="hero-image"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </div>
              <Image
                src={hero}
                loading="lazy"
                style={{ myStyle, width: '100%', height: 'auto' }}
                data-w-id="0bd1b8b7-af1d-e23d-7e84-584bfdba9ec6"
                alt=""
                class="hero-wheel-pattern"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banar;
