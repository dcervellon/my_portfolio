export interface SkillsProps {
  data: [
    {
      id: number;
      attributes: {
        name_tech: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        url: string;
        image: {
          data: {
            id: number;
            attributes: {
              name: string;
              width: number;
              height: number;
              hash: string;
              ext: string;
              size: number;
              url: string;
              provider: string;
              createdAt: string;
              updatedAt: string;
            };
          };
        };
      };
    }
  ];
}

export interface ProjectsProps {
  data: [
    {
      id: 1;
      attributes: {
        title: string;
        description: string;
        url: string;
        links: {
          github: string;
          vercel: string;
        };
        technologies: {
          technologies: string[];
        };
        image: {
          data: {
            id: number;
            attributes: {
              name: string;
              width: number;
              height: number;
              formats: {
                large: {
                  url: string;
                };
                small: {
                  url: string;
                };
                medium: {
                  url: string;
                };
                thumbnail: {
                  url: string;
                };
              };
              url: string;
            };
          };
        };
      };
    }
  ];
}
