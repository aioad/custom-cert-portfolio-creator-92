
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  
  const projectsData = [
    {
      title: "Amazon Prime Video Dashboard",
      image: "/lovable-uploads/1c911df6-335f-493c-b2b1-2a8fddf877a6.png",
      points: [
        "Visualized 9,000+ titles using Radial Bars, Donut Charts, and Bar Graphs.",
        "Displayed global content trends by genre, rating, country, and content type.",
        "Found 80.82% were movies, 24.7% were drama, and 39% from the U.S."
      ],
      githubLink: "https://github.com/meghathakur28/PrimeVideo_Dhasboard",
      technologies: ["Tableau", "Excel", "Data Visualization", "Data Analysis"]
    },
    {
      title: "Sudoku Solver Visualizer",
      image: "/lovable-uploads/7053e5f5-d14c-4926-8333-f93a8d0a570c.png",
      points: [
        "Developed interactive GUI with Java Swing to enhance user solving experience.",
        "Optimized algorithm solves 9x9 puzzles in under 0.1 seconds efficiently.",
        "Achieved 100% solution accuracy, reduced solving time by 90%, improved usability."
      ],
      githubLink: "https://github.com/meghathakur28/Project-Sudoku-Solver-Visualiser-",
      technologies: ["Java", "Java Swing"]
    },
    {
      title: "SuperStore Sales Dashboard",
      image: "/lovable-uploads/92c7d245-7eea-4d86-8812-68c549b68516.png",
      points: [
        "Implemented sales trends, profit margins, and region-wise performance visualizations.",
        "Enabled dynamic filtering and drill-downs to enhance data exploration and clarity.",
        "Delivered 12% profit drop insights, 8% product gains, and 40% faster reporting."
      ],
      githubLink: "https://github.com/meghathakur28/Superstore-report-on-PowerBI",
      technologies: ["Power BI", "Data Visualization", "Data Analysis"]
    }
  ];

  const handleMouseEnter = (projectTitle: string) => {
    setHoveredProject(projectTitle);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <section className="py-20 w-full">
      <div className="w-full px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projectsData.map((project, index) => {
            const isHovered = hoveredProject === project.title;
            
            return (
              <Card 
                key={index} 
                className={`bg-[#2A2F3C] border-purple-500/30 overflow-hidden h-full flex flex-col hover:border-purple-500 transition-all duration-300 relative ${isHovered ? 'shadow-lg shadow-purple-500/30 scale-102' : ''}`}
                onMouseEnter={() => handleMouseEnter(project.title)}
                onMouseLeave={handleMouseLeave}
              >
                {isHovered && (
                  <div className="absolute inset-0 pointer-events-none z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>
                    <div className="absolute -top-4 -right-4">
                      <Sparkles className="w-10 h-10 text-purple-400 animate-pulse" />
                    </div>
                  </div>
                )}
                <div className="w-full h-48 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`}
                  />
                  {isHovered && (
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C]/70 to-transparent"></div>
                  )}
                </div>
                <CardContent className="p-6 flex flex-col h-full relative z-20">
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isHovered ? 'text-purple-300' : 'text-purple-300/90'}`}>
                    {project.title}
                    {isHovered && (
                      <div className="h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 w-3/4 mt-1 animate-pulse"></div>
                    )}
                  </h3>
                  <ul className="list-disc pl-5 mb-4 text-gray-300 text-sm space-y-1">
                    {project.points.map((point, i) => (
                      <li key={i} className={`transition-colors duration-300 ${isHovered ? 'text-gray-200' : 'text-gray-300'}`}>{point}</li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className={`px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded transition-all duration-300 ${isHovered ? 'bg-purple-500/30 text-purple-200' : ''}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`inline-flex items-center transition-colors duration-300 ${isHovered ? 'text-purple-200' : 'text-purple-300'} hover:text-purple-400`}
                    >
                      <Github className={`h-4 w-4 mr-2 ${isHovered ? 'animate-pulse' : ''}`} />
                      GitHub Repository
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
