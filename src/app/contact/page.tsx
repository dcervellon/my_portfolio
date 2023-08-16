import Animation from '@/components/animation';
import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { SocialIcon } from 'react-social-icons';

const Contact = () => {
  const social = [
    {
      id: 1,
      name: 'Linkedin',
      network: 'linkedin',
      url: 'https://www.linkedin.com/in/dcervellon/',
    },
    {
      id: 2,
      name: 'Whatsapp',
      network: 'whatsapp',
      url: 'https://msng.link/o?50487522805=wa',
    },
    {
      id: 3,
      name: 'Telegram',
      network: 'telegram',
      url: 'https://msng.link/o?@dcervellon=tg',
    },
    {
      id: 4,
      name: 'Facebook',
      network: 'facebook',
      url: 'https://msng.link/o?https://www.facebook.com/david.serpal=fm',
    },
  ];

  return (
    <Animation>
      <div className="mx-auto w-full mt-32 text-center flex flex-col min-h-screen">
        <div className="md:p-6 my-4 max-w-[1000px] w-full px-4 mx-auto">
          <h1 className="font-black text-4xl md:text-6xl uppercase text-gray-700 py-2 md:pt-16">
            Get In Touch
          </h1>

          <div className="grid grid-cols-2 w-6/12 mx-auto">
            {social.map((icon) => {
              return (
                <div
                  key={icon.id}
                  className="flex items-center text-center justify-center space-x-4 py-1"
                >
                  <SocialIcon
                    network={icon.network}
                    url={icon.url}
                    style={{ width: 35, height: 35 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                  <p className="hidden md:block text-gray-700">{icon.name}</p>
                </div>
              );
            })}
          </div>

          {/* text abut */}
          <div className="md:p-6 my-4 max-w-[1000px] w-full px-4 mx-auto">
            <form
              method="POST"
              action="https://getform.io/f/1780fd1a-9d24-402e-b543-4cce899ca2c8"
              className="flex flex-col max-w-[700px] mx-auto"
            >
              <div className="pb-8">
                <p className="text-[#3b434a] py-2 text-md lg:text-2xl">
                  Submit the form below or shoot me an email -
                  <span className="text-[#0087d1] font-bold">
                    david.cervellon72@gmail.com
                  </span>
                </p>
              </div>
              <input
                className="bg-[#e7e9ef] p-1 rounded-md"
                type="text"
                placeholder="Name"
                name="name"
              />
              <input
                className="my-4 p-1 bg-[#e7e9ef] rounded-md"
                type="email"
                placeholder="Email"
                name="email"
              />
              <textarea
                className="bg-[#e7e9ef] p-2 rounded-md"
                name="message"
                rows={4}
                placeholder="Message"
              ></textarea>
              <button className="bg-[#3b434a] text-[#e7e9ef] hover:text-white hover:font-semibold transition-colors duration-300 py-2 justify-center my-4 w-28 mx-auto flex items-center rounded-md">
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </Animation>
  );
};

export default Contact;
