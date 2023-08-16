import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#343A40]">
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-4">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-gray-200 sm:justify-start">
            <h5>DCervellon</h5>
          </div>

          <p className="mt-2 text-center text-sm text-gray-200 font-black lg:mt-0 lg:text-right">
            Copyright &copy; 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
