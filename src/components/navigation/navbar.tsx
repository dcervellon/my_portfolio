'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';
import Home from '../../app/page';

const social = [
  { id: 10, url: 'https://github.com/edavid72', color: '#F9F5F6' },
  { id: 20, url: 'https://www.linkedin.com/in/dcervellon/', color: '#007bb3' },
  { id: 30, url: 'https://twitter.com/Davesr72', color: '#00a6f0' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setIsNavbarHidden(
        currentScrollPos > 0 && currentScrollPos > prevScrollPos
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 bg-[#343A40] transition-all duration-300 z-10 ${
        isNavbarHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo section */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-xl">
              <Image width={45} height={45} src={'/logo.png'} alt="ss" />
            </Link>
          </div>

          {/* Navigation section */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className="text-[#F9F5F6] hover:text-opacity-75 px-3 py-2 rounded-md text-xl font-medium"
                  onClick={handleMenuClick}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-[#F9F5F6] hover:text-opacity-75 px-3 py-2 rounded-md text-xl font-medium"
                  onClick={handleMenuClick}
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className="text-[#F9F5F6] hover:text-opacity-75 px-3 py-2 rounded-md text-xl font-medium"
                  onClick={handleMenuClick}
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  className="text-[#F9F5F6] hover:text-opacity-75 px-3 py-2 rounded-md text-xl font-medium"
                  onClick={handleMenuClick}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Social networks section */}
          <div className="hidden sm:block sm:mr-6">
            {/* Add your social network icons here */}
            <ul className="flex">
              {social.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="mx-10 hover:translate-y-[-4px] transition-transform duration-300"
                  >
                    <SocialIcon
                      url={item.url}
                      bgColor={item.color}
                      style={{ width: 40, height: 40 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Hamburger menu */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 text-center">
          <Link
            href="/"
            className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            onClick={handleMenuClick}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            onClick={handleMenuClick}
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            onClick={handleMenuClick}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            onClick={handleMenuClick}
          >
            Contact
          </Link>
        </div>

        <div className="pt-2 pb-6">
          <ul className="flex justify-around">
            {social.map((item) => {
              return (
                <li
                  key={item.id}
                  className="mx-10 hover:translate-y-[-4px] transition-transform duration-300"
                >
                  <SocialIcon
                    url={item.url}
                    bgColor={item.color}
                    style={{ width: 30, height: 30 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
