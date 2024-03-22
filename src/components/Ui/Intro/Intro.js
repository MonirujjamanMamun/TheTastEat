import Image from 'next/image';
import React from 'react';

const Intro = () => {
  return (
    <div class="detail-section">
      <div class="container w-container">
        <div class="detail-wrap">
          <div class="w-layout-grid detail-grid">
            <div
              id="w-node-_86fe92c3-ed97-4eaf-6481-889df25e59d8-4f741cb4"
              data-w-id="86fe92c3-ed97-4eaf-6481-889df25e59d8"
              class="detail-item"
            >
              <div class="detail-icon-wrap">
                <Image
                  src="https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/6229b772cb568e7b96d20e2d_detail-icon-1.svg"
                  loading="lazy"
                  alt="Detail Icon"
                  width={40}
                  height={40}
                />
              </div>
              <div class="detail-content-wrap">
                <h2 class="detail-title">Locate Us</h2>
                <p class="detail-content">
                  Riverside 25, San Diego, California
                </p>
              </div>
            </div>
            <div
              id="w-node-_4fbb8a73-438a-c884-afcc-2d6d79c8bcec-4f741cb4"
              data-w-id="4fbb8a73-438a-c884-afcc-2d6d79c8bcec"
              class="detail-item"
            >
              <div class="detail-icon-wrap">
                <Image
                  src="https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/6229b8c45ca27b60baad8342_detail-icon-2.svg"
                  loading="lazy"
                  alt="Detail Icon"
                  width={40}
                  height={40}
                />
              </div>
              <div class="detail-content-wrap">
                <h2 class="detail-title">Open Hours</h2>
                <p class="detail-content">Mon To Fri 9:00 AM - 9:00 PM</p>
              </div>
            </div>
            <div
              id="w-node-e5836cd8-8a25-5095-06e0-3c1b00e6bf4b-4f741cb4"
              data-w-id="e5836cd8-8a25-5095-06e0-3c1b00e6bf4b"
              class="detail-item"
            >
              <div class="detail-icon-wrap">
                <Image
                  src="https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/6229b8cd53997e91fce1dc76_detail-icon-3.svg"
                  loading="lazy"
                  alt="Detail Icon"
                  width={40}
                  height={40}
                />
              </div>
              <div class="detail-content-wrap">
                <h2 class="detail-title">Reservation</h2>
                <a href="mailto:restaurantate@gmail.com" class="detail-link">
                  restaurantate@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
