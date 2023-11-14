import { useGetData } from '@/hooks/useGetData';
import { ProjectsProps } from '@/types';
import Image from 'next/image';
import React from 'react';
import { BsGlobe2 } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import Link from 'next/link';

const Project = async () => {
  const { data }: ProjectsProps = await useGetData('/works?populate=image');

  return (
    <div>
      {data.map((project, index) => {
        return (
          <div key={project.id} className="my-20">
            <div className="md:w-12/12 mx-auto text-start md:text-3xl my-4">
              <h2 className="text-[#0087d1] font-black">
                <span>{index + 1}. </span>
                {project.attributes.title}:
                <span className="text-gray-400 font-extralight md:text-2xl">
                  {project.attributes.description}
                </span>
              </h2>

              <div className="flex w-12/12 space-x-4 mt-2 items-center py-1">
                <Link
                  href={project.attributes.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithubSquare
                    size={25}
                    color="#3b434a"
                    className="cursor-pointer"
                  />
                </Link>

                <Link
                  href={project.attributes.links.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGlobe2
                    size={25}
                    color="#3b434a"
                    className="cursor-pointer"
                  />
                </Link>
                <div className="flex text-xs md:text-lg space-x-2">
                  {project.attributes.technologies.techs.map((t, index) => {
                    return (
                      <p
                        key={index}
                        className="bg-gray-300 rounded-md px-1 text-gray-700"
                      >
                        {t}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>

            <Image
              width={1000}
              height={1000}
              src={project.attributes.image.data.attributes.url}
              alt={project.attributes.title}
              className="rounded-md my-2 border-4ya"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Project;
