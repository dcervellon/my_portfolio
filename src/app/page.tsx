'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTypewriter } from 'react-simple-typewriter';
import Animation from '@/components/animation';

export default function Home() {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My Name's David",
      '<ILoveToCode />',
      'Family Man',
      '<F*&$!%^Geek />',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <Animation>
      <div className="mx-auto flex flex-col min-h-screen w-full pt-32 text-center shadow-xl">
        <div>
          <h1 className="font-black text-4xl md:text-6xl uppercase text-gray-700 py-2">
            A Developer
          </h1>
          <h3 className="text-gray-500 text-2xl md:text-4xl h-10 md:h-16">
            {text}
          </h3>
          <p className="text-gray-600 font-extralight md:text-2xl">
            I am a front-end developer specializing in creating exceptional
            digital experiences.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            width={40}
            height={40}
            src={'/images/code.svg'}
            alt="ddd"
            className="h-[400px] w-[400px] p-6"
          />
        </div>
        {/*  */}
        <div className="flex space-x-6 justify-center pb-6">
          <Link
            href={
              'https://docs.google.com/document/d/1Yv9xozySBDjWtGt1XQ7JanUekdXrcVp4pfIlGHNLit8/edit?usp=share_link'
            }
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-gray-50 hover:text-gray-300 transition-colors duration-300 font-bold px-4 py-1 rounded-md md:w-36 text-lg md:text-xl"
          >
            Resume
          </Link>
          <Link
            href={'/contact'}
            className="bg-gray-700 text-gray-50 hover:text-gray-300 transition-colors duration-300 font-bold px-4 py-1 rounded-md md:w-36 text-lg md:text-xl"
          >
            Contact
          </Link>
        </div>
      </div>
    </Animation>
  );
}
