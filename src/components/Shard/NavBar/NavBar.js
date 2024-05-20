'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavBar = () => {
  const color = { backgroundColor: 'var(--secondary-color)' };
  const pathname = usePathname();
  const active = { color: 'var(--primary-color)' };
  const routes = [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/about',
      name: 'About Us',
    },
    {
      path: '/our-menu',
      name: 'Our Menu',
    },
    {
      path: '/blog',
      name: 'Blog',
    },
    {
      path: '/contact',
      name: 'Contact Us',
    },
  ];
  return (
    <div>
      <div
        style={color}
        className="flex justify-between ps-10 pr-10 border-t-[1px] border-t-gray-400 border-b-[1px] border-b-gray-400 py-5"
      >
        <div className="flex gap-11">
          {routes.map((item) => (
            <Link
              className={`text-white ${
                pathname === 'item.path' ? active : null
              }`}
              key={item.path}
              href={item.path}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div>
          <div className="header-social-wrap">
            <a
              data-w-id="22609e74-5499-02c5-6b00-17fa1e7c15ff"
              href="https://www.instagram.com"
              target="_blank"
              className="header-social-icon w-inline-block"
            >
              <img
                src="https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/622879561ac344751081f7f3_social-white-icon-1.svg"
                loading="lazy"
                alt="Header Social Icon"
              />
            </a>
            <a
              data-w-id="22609e74-5499-02c5-6b00-17fa1e7c1601"
              href="https://www.facebook.com"
              target="_blank"
              className="header-social-icon w-inline-block"
            >
              <img
                src="https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/622879a1180929e7b5a73221_social-white-icon-2.svg"
                loading="lazy"
                alt="Header Social Icon"
              />
            </a>
            <a
              data-w-id="22609e74-5499-02c5-6b00-17fa1e7c1603"
              href="https://twitter.com/"
              target="_blank"
              className="header-social-icon w-inline-block"
            >
              <img
                src="https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/655afe9f73021a4d4bc26a34_social-white-icon-3.svg"
                loading="lazy"
                alt="Header Social Icon"
              />
            </a>
            <a
              data-w-id="22609e74-5499-02c5-6b00-17fa1e7c1605"
              href="https://www.pinterest.com"
              target="_blank"
              className="header-social-icon w-inline-block"
            >
              <img
                src="https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/622879b72fd62b54a7fe9322_social-white-icon-4.svg"
                loading="lazy"
                alt="Header Social Icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
