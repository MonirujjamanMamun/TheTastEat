import Image from 'next/image';
import React from 'react';
import Button from '../Button/Button';

const TopHeader = () => {
  const color = { backgroundColor: 'var(--secondary-color)' };
  return (
    <div class="container w-container" style={color}>
      <div class="header-top-wrap">
        <div class="header-button-wrap">
          <Button title={'Call - 123 456 789'} />
        </div>
        <a
          href="index.html"
          aria-current="page"
          class="brand w-nav-brand w--current"
        >
          <Image
            src="https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/6246d7f2c2b5677de6d04e5f_tasteat-brand-logo.svg"
            loading="lazy"
            alt="Restaurantate Logo"
            width={300}
            height={300}
          />
        </a>
        <div class="header-reserve-button">
          <a href="book-a-table" class="button header-reserve-button w-button">
            Reservation
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
