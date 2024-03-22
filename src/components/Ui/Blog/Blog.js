import Image from 'next/image';
import React from 'react';
import blog from '@/assets/blog/blog-thumbnail-image-1.jpg';
import blog2 from '@/assets/blog/blog-thumbnail-image-2.jpg';

const Blog = () => {
  return (
    <div class="blog-section home-blog-section">
      <div class="container w-container">
        <div class="blog-wrap">
          <div class="section-title-wrap">
            <div class="section-subtitle-wrap">
              <p class="section-subtitle">Blog</p>
            </div>
            <h3 class="section-title">
              Be First Who Read News
              <br />
            </h3>
            <p>
              Explore the latest stories about our dishes, offers, <br />
              events and future plans here.
              <br />
            </p>
          </div>
          <div class="blog-collection-list w-dyn-list">
            <div role="list" class="w-dyn-items w-row">
              <div
                role="listitem"
                class="blog-collection-item w-dyn-item w-col w-col-6"
              >
                <div
                  data-w-id="e3626584-eedf-7bc8-3281-85dc513f6e1a"
                  class="blog-item"
                >
                  <div class="blog-image-wrap">
                    <Image
                      alt="Blog Listing Image"
                      loading="lazy"
                      src={blog}
                      sizes="(max-width: 479px) 85vw, (max-width: 767px) 88vw, (max-width: 991px) 45vw, (max-width: 1279px) 46vw, (max-width: 1439px) 44vw, (max-width: 1919px) 46vw, 620px"
                      class="blog-listing-image"
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                    />
                    <div style={{ opacity: 0 }} class="blog-overlay-wrap">
                      <div class="blog-item-overlay-wrap">
                        <a
                          href="post/the-legend-of-us-cuisine-the-story-of-hungry-people"
                          class="button w-button"
                        >
                          View More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="blog-content-wrap">
                    <div class="blog-meta-wrap">
                      <a
                        href="category/delicious"
                        class="blog-category-link w-inline-block"
                      >
                        <p class="blog-category">Delicious</p>
                      </a>
                      <div class="blog-date-wrap">
                        <p class="blog-date">March 19, 2022</p>
                      </div>
                    </div>
                    <a
                      href="post/the-legend-of-us-cuisine-the-story-of-hungry-people"
                      class="blog-title"
                    >
                      The Legend of US Cuisine: The Story of Hungry People
                    </a>
                    <p>
                      Capitalize on low-hanging fruit to identify a ballpark
                      value added matrix economically and the creative activity
                      to beta test override the food quality.
                    </p>
                  </div>
                </div>
              </div>
              <div
                role="listitem"
                class="blog-collection-item w-dyn-item w-col w-col-6"
              >
                <div
                  data-w-id="e3626584-eedf-7bc8-3281-85dc513f6e1a"
                  class="blog-item"
                >
                  <div class="blog-image-wrap">
                    <Image
                      alt="Blog Listing Image"
                      loading="lazy"
                      src={blog2}
                      class="blog-listing-image"
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                    />
                    <div style={{ opacity: 0 }} class="blog-overlay-wrap">
                      <div class="blog-item-overlay-wrap">
                        <a
                          href="post/the-most-popular-delicious-food-of-mediterranean-cuisine"
                          class="button w-button"
                        >
                          View More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="blog-content-wrap">
                    <div class="blog-meta-wrap">
                      <a
                        href="category/cooking"
                        class="blog-category-link w-inline-block"
                      >
                        <p class="blog-category">Cooking</p>
                      </a>
                      <div class="blog-date-wrap">
                        <p class="blog-date">March 19, 2022</p>
                      </div>
                    </div>
                    <a
                      href="post/the-most-popular-delicious-food-of-mediterranean-cuisine"
                      class="blog-title"
                    >
                      The Most Popular Delicious Food of Mediterranean Cuisine
                    </a>
                    <p>
                      Strategies on low-hanging fruit to identify a ballpark
                      value added matrix economically and the creative activity
                      to beta test override the food quality.
                    </p>
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

export default Blog;
