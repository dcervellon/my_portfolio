// import { useGetData } from '@/hooks/useGetData';
// import { ProjectsProps } from '@/types';
import Image from 'next/image';
import React from 'react';
import { BsGlobe2 } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import Link from 'next/link';
import { dataWorks } from '@/data/dataWorks';


const Project = async () => {
  // const { data }: ProjectsProps = await useGetData('/works?populate=image');

  return (
    <div>
      {dataWorks.map((project, index) => {
        return (
          <div
            key={project.id}
            className="my-20"
          >
            <div className="md:w-8/12 mx-auto text-start md:text-3xl my-4">
              <h2 className="text-[#0087d1] font-black">
                <span>{index + 1}. </span>
                {project.attributes.title}:
                <span className="text-gray-400 font-extralight md:text-2xl">
                  {project.attributes.description}
                </span>
              </h2>

              <div className="flex w-6/12 space-x-4 mt-2 items-center py-1">
                <Link
                  href={project.attributes.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithubSquare
                    size={25}
                    color="#7F8487"
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
                    color="#7F8487"
                    className="cursor-pointer"
                  />
                </Link>
                <div className="flex text-base space-x-1 text-gray-200">
                  <p className="bg-[#7f8487] rounded-md px-2">React JS</p>
                  <p className="bg-[#7f8487] rounded-md px-2">Tailwind CSS</p>
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
