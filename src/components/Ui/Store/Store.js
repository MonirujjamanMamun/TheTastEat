import Image from 'next/image';
import React from 'react';
import aboutStore from '@/assets/store/about-story-image.jpg';
import sign from '@/assets/store/sign.svg';
const Store = () => {
  return (
    <div class="story-section">
      <div class="container w-container">
        <div class="story-wrap">
          <div class="w-layout-grid story-grid">
            <div
              id="w-node-_051b6ec3-0d4a-7307-6d5f-ff37de86108c-4f741cb4"
              class="story-image-wrap"
            >
              <Image
                class="story-image"
                src={aboutStore}
                alt="About Story Image"
                sizes="(max-width: 479px) 92vw, (max-width: 702px) 91vw, (max-width: 1439px) 639px, (max-width: 1919px) 96vw, 1320px"
                data-w-id="795f6308-5b85-be01-0ac1-b9a3790b5a4d"
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
            <div
              id="w-node-_8a6d4009-53b7-a9bc-537e-b77d5bfa9d02-4f741cb4"
              class="story-content-wrap"
            >
              <h3 class="story-year">The Delicious Story</h3>
              <p>
                The people, food and the prime locations make the perfect place
                for the friends &amp; family to come together and have great
                time.{' '}
              </p>
              <div class="story-year-item-wrap">
                <div
                  id="w-node-_1367edd0-9a67-df47-cdd3-271e38195afc-4f741cb4"
                  data-w-id="1367edd0-9a67-df47-cdd3-271e38195afc"
                  class="story-year-item"
                >
                  <h3 class="story-year">2018</h3>
                  <p class="story-year-content">
                    Plan for this restaurant to deliver healthy food.
                  </p>
                </div>
                <div
                  id="w-node-_3bf15cb5-f692-4cdf-4b76-75bdee0edcec-4f741cb4"
                  data-w-id="3bf15cb5-f692-4cdf-4b76-75bdee0edcec"
                  class="story-year-item"
                >
                  <h3 class="story-year">2022</h3>
                  <p class="story-year-content">
                    Happily in the fourth year by fulfill the motto.
                  </p>
                </div>
              </div>
              <div
                data-w-id="7090885c-f09a-46bf-db28-bcbfe39fd384"
                class="about-us-sign-wrap"
              >
                <p>JOSEFINE</p>
                <Image
                  loading="lazy"
                  src={sign}
                  alt="Josefin Sign"
                  class="sign-image"
                  style={{
                    width: '25%',
                    height: 'auto',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
