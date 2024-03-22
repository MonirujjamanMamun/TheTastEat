import React from 'react';
import Button from '../Button/Button';

const PopularDish = () => {
  return (
    <div class="popular-dish-section">
      <div class="container w-container">
        <div class="popular-dish-wrap">
          <div class="section-title-wrap">
            <div class="section-subtitle-wrap">
              <p class="section-subtitle">menu</p>
            </div>
            <h3 class="section-title">
              Popular Dishes
              <br />
            </h3>
            <p>
              There is a game between the waiters in restaurant to see who
              serves the food to <br />
              each table fastest. That led to attempting the Guinness Record.
            </p>
          </div>
          <div class="w-layout-grid popular-dish-grid">
            <div
              id="w-node-_38ef16f9-c3ba-aff4-a936-e047b7f76304-4f741cb4"
              data-w-id="38ef16f9-c3ba-aff4-a936-e047b7f76304"
              class="popular-dish-item"
            >
              <img
                src="https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/623025ffd50003eed995ae8a_popular-dish-image-1.jpg"
                loading="lazy"
                alt="Popular Dish Image"
                class="popular-dish-image"
              />
              <div class="popular-dish-contents">
                <div class="popular-dish-price-wrap">
                  <h4 class="popular-dish-name">Chicken Manjoori</h4>
                  <h4 class="popular-dish-price">$15</h4>
                </div>
                <p>
                  Dish relished by all age groups as a starter dish at parties.
                </p>
              </div>
            </div>
            <div
              id="w-node-a6ecbbfa-3b91-eab5-ce7a-6d448378f966-4f741cb4"
              data-w-id="a6ecbbfa-3b91-eab5-ce7a-6d448378f966"
              class="popular-dish-item"
            >
              <img
                src="https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/6230292eb2625583334dddc5_popular-dish-image-2.jpg"
                loading="lazy"
                alt="Popular Dish Image"
                class="popular-dish-image"
              />
              <div class="popular-dish-contents">
                <div class="popular-dish-price-wrap">
                  <h4 class="popular-dish-name">Hotdog</h4>
                  <h4 class="popular-dish-price">$10</h4>
                </div>
                <p>
                  Grilled sausage served in the slit of a partially sliced bun.
                </p>
              </div>
            </div>
            <div
              id="w-node-eb5fcad3-756f-5c5f-3d1d-54acf3083825-4f741cb4"
              data-w-id="eb5fcad3-756f-5c5f-3d1d-54acf3083825"
              class="popular-dish-item"
            >
              <img
                src="https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/623029364048612617d09a1c_popular-dish-image-3.jpg"
                loading="lazy"
                alt="Popular Dish Image"
                class="popular-dish-image"
              />
              <div class="popular-dish-contents">
                <div class="popular-dish-price-wrap">
                  <h4 class="popular-dish-name">Fresh Salmon</h4>
                  <h4 class="popular-dish-price">$5</h4>
                </div>
                <p>
                  Beat the health blues with our Super Immune Blue Juice Recipe.
                </p>
              </div>
            </div>
            <div
              id="w-node-_370f18b5-f88d-65d9-abef-c5a5001f39ad-4f741cb4"
              data-w-id="370f18b5-f88d-65d9-abef-c5a5001f39ad"
              class="popular-dish-item"
            >
              <img
                src="https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/62302941d500036acc95c1df_popular-dish-image-4.jpg"
                loading="lazy"
                alt="Popular Dish Image"
                class="popular-dish-image"
              />
              <div class="popular-dish-contents">
                <div class="popular-dish-price-wrap">
                  <h4 class="popular-dish-name">Veg Burger</h4>
                  <h4 class="popular-dish-price">$10</h4>
                </div>
                <p>Burgers may be made from ingredients like beans.</p>
              </div>
            </div>
          </div>
          <div
            data-w-id="49a822e8-3d9d-53fa-7262-c4fc47a60c35"
            class="dish-button-wrap"
          >
            <Button title={'See all dishes'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDish;
