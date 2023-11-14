import { dataSkills } from '@/data/dataSkills';
// import { useGetData } from '@/hooks/useGetData';
// import { SkillsProps } from '@/types';
import Image from 'next/image';

const Skills = async () => {
  // const { data }: SkillsProps = await useGetData('/skills?populate=image');

  return (
    <div className="container mx-auto">
      <h2 className="bg-[#3b434a] opacity-40 text-center text-xl md:text-3xl p-2 text-gray-100 font-semibold">
        Technologies I use
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-5 w-10/12 mx-auto mt-4 py-12">
        {dataSkills.map((skill) => {
          return (
            <div key={skill.id} className="m-4 flex justify-center">
              <Image
                width={skill.attributes.image.data.attributes.width}
                height={skill.attributes.image.data.attributes.height}
                src={skill.attributes.image.data.attributes.url}
                alt={skill.attributes.image.data.attributes.name}
                className="w-16 md:w-18 h-16 md:h-18 hover:scale-110 duration-300 my-4"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
