import Animation from '@/components/animation';
import Skills from '@/components/skills';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';

const About = () => {
  return (
    <Animation>
      <div className="mx-auto flex flex-col min-h-screen w-full mt-32 text-center">
        <div>
          <h1 className="font-black text-4xl md:text-6xl uppercase text-gray-700 py-2 md:pt-16">
            Something about me
          </h1>
          <h3 className="text-gray-500 text-2xl md:text-4xl h-10 md:h-16">
            who am I ~ what can I do
          </h3>

          {/* text abut */}
          <div className="md:p-6 my-4 max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 mx-auto">
            <div className="md:text-right text-2xl font-bold mb-4 text-gray-700">
              <p>
                Hi. I am David, nice to meet you. Please take a look around.
              </p>

              <div className="inline-flex w-6/12 justify-around mx-auto p-2">
                <Link href={'#'} className="cursor-pointer">
                  <FaLinkedinIn
                    color="#0087d1"
                    className="md:w-8 md:h-8 mt-2"
                  />
                </Link>
                <Link href={'#'} className="cursor-pointer">
                  <FaGithub color="#3b434a" className="md:w-8 md:h-8 mt-2" />
                </Link>
                <Link href={'#'} className="cursor-pointer">
                  <FaMailBulk color="#ff5866" className="md:w-8 md:h-8 mt-2" />
                </Link>
              </div>
            </div>
            <div className="text-base md:text-lg text-justify text-gray-600">
              <p>
                I am passionate about creating great software that improves the
                lives of those around me. Lover of new technologies I like to be
                always updated and constantly learning.
              </p>
              <p>
                I am looking for a work team to join to contribute and develop
                my knowledge!!
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full text-center bg-[#fff]">
          <Skills />
        </div>
      </div>
    </Animation>
  );
};

export default About;
