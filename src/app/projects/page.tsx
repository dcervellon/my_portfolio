import Animation from '@/components/animation';
import Project from '@/components/project';

const Projects = () => {
  return (
    <Animation>
      <div className="mx-auto flex flex-col min-h-screen w-full pt-32 text-center">
        <div>
          <h1 className="font-black text-4xl md:text-6xl uppercase text-gray-700 py-2 md:pt-16">
            some of my projects
          </h1>
          <h3 className="text-gray-500 text-2xl md:text-4xl h-10 md:h-16">
            Ugly ~ Pretty
          </h3>
          <h3 className="text-gray-500 text-2xl md:text-4xl h-10 md:h-16">
            Amazing ~ Simple
          </h3>

          {/* text abut */}
          <div className="md:p-6 my-1 max-w-[1000px] w-full px-4 mx-auto">
            <Project />
          </div>
        </div>
      </div>
    </Animation>
  );
};

export default Projects;
