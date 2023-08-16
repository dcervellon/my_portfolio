import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const EdgeSocial = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        {/* Linkedin */}
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-500 bg-[#0079FF]">
          <a
            href="https://www.linkedin.com/in/david-cervellon/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-around items-center w-full text-gray-300"
          >
            Linkedin <FaLinkedin size={27} color='#fff'/>
          </a>
        </li>

        {/* GitHub */}
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#3C4048]">
          <a
            href="https://github.com/edavid72"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-around items-center w-full text-gray-300"
          >
            GitHub <FaGithub size={27} color='#fff'/>
          </a>
        </li>

        {/* Personal Email */}
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#FF6969]">
          <a
            href="mailto:david.cervellon72@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-around items-center w-full text-gray-300"
          >
            Email <HiOutlineMail size={27} color='#fff'/>
          </a>
        </li>

        {/* Personal Resume */}
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#DD58D6]">
          <a
            href={
              'https://docs.google.com/document/d/1Yv9xozySBDjWtGt1XQ7JanUekdXrcVp4pfIlGHNLit8/edit?usp=share_link'
            }
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-around items-center w-full text-gray-300"
          >
            Resume <BsFillPersonLinesFill size={27} color='#fff'/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default EdgeSocial;