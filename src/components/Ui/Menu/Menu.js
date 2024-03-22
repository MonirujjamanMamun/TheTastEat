import React from 'react';
import Image from 'next/image';
import homeMenu from '@/assets/menu/home-menu.jpg';
import menuItem from '@/assets/menu/menu-item-image-1.jpg';
import menuItem2 from '@/assets/menu/menu-item-image-2.jpg';
import menuItem3 from '@/assets/menu/menu-item-image-3.jpg';
import menuItem4 from '@/assets/menu/menu-item-image-4.jpg';
import menuItem5 from '@/assets/menu/menu-item-image-5.jpg';
import menuItem6 from '@/assets/menu/menu-item-image-6.jpg';
import menuItem7 from '@/assets/menu/menu-item-image-7.jpg';
import menuItem8 from '@/assets/menu/menu-item-image-8.jpg';
import menuItem9 from '@/assets/menu/menu-item-image-9.jpg';
import menuItem10 from '@/assets/menu/menu-item-image-10.jpg';
import Button from '../Button/Button';

const Menu = () => {
  return (
    <div class="home-menu-section">
      <div class="container w-container">
        <div class="home-menu-wrap">
          <div class="w-layout-grid home-menu-grid">
            <div
              id="w-node-_24726b39-7b9b-2008-1640-fb789da5e01c-4f741cb4"
              class="home-menu-title-wrap"
            >
              <div class="home-menu-title-area">
                <div
                  data-w-id="85dff4fc-3ce1-7999-c2de-93209af7ba80"
                  class="section-title-wrap section-title-left"
                >
                  <div class="section-subtitle-wrap">
                    <p class="section-subtitle">Menu</p>
                  </div>
                  <h3 class="section-title">Try Our Special dishes</h3>
                  <p>
                    Every time you perfectly dine with us, it should happy for
                    great inspired food in an environment designed with
                    individual touches unique to the local area.
                  </p>
                </div>
                <Image
                  src={homeMenu}
                  loading="lazy"
                  data-w-id="0d36dfd8-7024-49d3-e47f-4073f57eaab7"
                  alt="Home Menu Image"
                  class="home-menu-image"
                  width={400}
                  height={550}
                />
                <div
                  data-w-id="953b3aad-27d9-dce8-5afe-b6bf8379d246"
                  class="home-menu-button-wrap"
                >
                  <Button title={'See all dishes'} />
                </div>
              </div>
            </div>
            <div
              id="w-node-_1a75c10f-5993-0712-7f2b-5311dec305ac-4f741cb4"
              class="home-menu-item"
            >
              <div class="menu-item-wrap">
                <div class="menu-title-wrap">
                  <h4>Starters</h4>
                </div>
                <div class="menu-item">
                  <div class="menu-name-wrap">
                    <Image
                      src={menuItem}
                      loading="lazy"
                      alt="Menu Item Image"
                      class="menu-item-image"
                      width={84}
                      height={84}
                    />
                    <div class="menu-item-detail">
                      <h4 class="menu-item-name">Raw Scallops from Erquy</h4>
                      <p class="menu-description">
                        Shuck the scallop to that used for oysters
                      </p>
                    </div>
                  </div>
                  <div class="menu-dot-line"></div>
                  <div class="menu-item-price-wrap">
                    <h4 class="menu-item-price">$40</h4>
                  </div>
                </div>
                <div class="menu-item">
                  <div class="menu-name-wrap">
                    <Image
                      src={menuItem2}
                      loading="lazy"
                      alt="Menu Item Image"
                      class="menu-item-image"
                      width={84}
                      height={84}
                    />
                    <div class="menu-item-detail">
                      <h4 class="menu-item-name">Spring Roll</h4>
                      <p class="menu-description">
                        Add oil to a hot pan spring onion whites
                      </p>
                    </div>
                  </div>
                  <div class="menu-dot-line"></div>
                  <div class="menu-item-price-wrap">
                    <h4 class="menu-item-price">$20</h4>
                  </div>
                </div>
                <div class="menu-item">
                  <div class="menu-name-wrap">
                    <Image
                      src={menuItem3}
                      loading="lazy"
                      alt="Menu Item Image"
                      class="menu-item-image"
                      width={84}
                      height={84}
                    />
                    <div class="menu-item-detail">
                      <h4 class="menu-item-name">French Onion Soup</h4>
                      <p class="menu-description">
                        Wheat flour, apple cider vinegar, bread
                      </p>
                    </div>
                  </div>
                  <div class="menu-dot-line"></div>
                  <div class="menu-item-price-wrap">
                    <h4 class="menu-item-price">$25</h4>
                  </div>
                </div>
                <div class="menu-item">
                  <div class="menu-name-wrap">
                    <Image
                      src={menuItem4}
                      loading="lazy"
                      alt="Menu Item Image"
                      class="menu-item-image"
                      width={84}
                      height={84}
                    />
                    <div class="menu-item-detail">
                      <h4 class="menu-item-name">Tomato Bruschetta</h4>
                      <p class="menu-description">
                        Bread, olive oil, garlic, black pepper
                      </p>
                    </div>
                  </div>
                  <div class="menu-dot-line"></div>
                  <div class="menu-item-price-wrap">
                    <h4 class="menu-item-price">$30</h4>
                  </div>
                </div>
              </div>
              <div class="menu-item-wrap">
                <div class="menu-title-wrap">
                  <h4>Main Dish</h4>
                </div>
                <div class="menu-item">
                  <div class="menu-name-wrap">
                    <Image
                      src={menuItem5}
                      loading="lazy"
                      alt="Menu Item Image"
                      class="menu-item-image"
                      width={84}
                      height={84}
                    />
                    <div class="menu-item-detail">
                      <h4 class="menu-item-name">
                        Grilled Salmon with Dill Sauce
                      </h4>
                      <p class="menu-description">
                        Brown sugar, salmon fillet, Dijon mustard
                      </p>
                    </div>
                  </div>
                  <div class="menu-dot-line"></div>
                  <div class="menu-item-price-wrap">
                    <h4 class="menu-item-price">$40</h4>
                  </div>
                </div>
                <div class="menu-item">
                  <div class="menu-name-wrap">
                    <Image
                      src={menuItem6}
                      loading="lazy"
                      alt="Menu Item Image"
                      class="menu-item-image"
                      width={84}
                      height={84}
                    />
                    <div class="menu-item-detail">
                      <h4 class="menu-item-name">Roast Beef with Vegetable</h4>
                      <p class="menu-description">
                        Green beans, rib eye, olive oil, beef
                      </p>
                    </div>
                  </div>
                  <div class="menu-dot-line"></div>
                  <div class="menu-item-price-wrap">
                    <h4 class="menu-item-price">$20</h4>
                  </div>
                </div>
                <div class="menu-item">
                  <div class="menu-name-wrap">
                    <Image
                      src={menuItem7}
                      loading="lazy"
                      alt="Menu Item Image"
                      class="menu-item-image"
                      width={84}
                      height={84}
                    />
                    <div class="menu-item-detail">
                      <h4 class="menu-item-name">
                        Marrkesh Vegetetarian Curruy
                      </h4>
                      <p class="menu-description">
                        Sweet potato, eggplant, garbanzo bean
                      </p>
                    </div>
                  </div>
                  <div class="menu-dot-line"></div>
                  <div class="menu-item-price-wrap">
                    <h4 class="menu-item-price">$25</h4>
                  </div>
                </div>
                <div class="menu-item">
                  <div class="menu-name-wrap">
                    <Image
                      src={menuItem8}
                      loading="lazy"
                      alt="Menu Item Image"
                      class="menu-item-image"
                      width={84}
                      height={84}
                    />
                    <div class="menu-item-detail">
                      <h4 class="menu-item-name">Spicy Vegan Potato Curry</h4>
                      <p class="menu-description">
                        Coconut milk, beans, potatoes, curry powder
                      </p>
                    </div>
                  </div>
                  <div class="menu-dot-line"></div>
                  <div class="menu-item-price-wrap">
                    <h4 class="menu-item-price">$35</h4>
                  </div>
                </div>
              </div>
              <div class="menu-item-wrap">
                <div class="menu-title-wrap">
                  <h4>Dessert</h4>
                </div>
                <div class="menu-item">
                  <div class="menu-name-wrap">
                    <Image
                      src={menuItem9}
                      loading="lazy"
                      alt="Menu Item Image"
                      class="menu-item-image"
                      width={84}
                      height={84}
                    />
                    <div class="menu-item-detail">
                      <h4 class="menu-item-name">Apple Pie with Cream</h4>
                      <p class="menu-description">
                        Whipping cream, egg white, cinnamon
                      </p>
                    </div>
                  </div>
                  <div class="menu-dot-line"></div>
                  <div class="menu-item-price-wrap">
                    <h4 class="menu-item-price">$15</h4>
                  </div>
                </div>
                <div class="menu-item">
                  <div class="menu-name-wrap">
                    <Image
                      src={menuItem10}
                      loading="lazy"
                      alt="Menu Item Image"
                      class="menu-item-image"
                      width={84}
                      height={84}
                    />
                    <div class="menu-item-detail">
                      <h4 class="menu-item-name">Lemon Meringue Pie</h4>
                      <p class="menu-description">
                        Frozen pie crust, meringue, lemon
                      </p>
                    </div>
                  </div>
                  <div class="menu-dot-line"></div>
                  <div class="menu-item-price-wrap">
                    <h4 class="menu-item-price">$30</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
