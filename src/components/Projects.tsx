
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projectsData = [
    {
      title: "Amazon Prime Video Dashboard",
      description: "Designed and developed an interactive Tableau dashboard to analyze and visualize data from the Amazon Prime Video dataset.",
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
      description: "Engineered a backtracking algorithm to efficiently solve Sudoku puzzles, ensuring optimal performance and accuracy across a wide range of puzzle difficulties.",
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
      description: "Designed and developed an interactive dashboard to analyze and visualize data from the SuperStore dataset.",
      points: [
        "Visualized 9,000+ titles using Radial Bars, Donut Charts, and Bar Graphs.",
        "Displayed global content trends by genre, rating, country, and content type.",
        "Found 80.82% were movies, 24.7% were drama, and 39% from the U.S."
      ],
      githubLink: "https://github.com/meghathakur28/Superstore-report-on-PowerBI",
      technologies: ["Power BI", "Data Visualization", "Data Analysis"]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card key={index} className="bg-[#2A2F3C] border-purple-500/30 overflow-hidden h-full flex flex-col hover:border-purple-500 transition-all duration-300">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-3 text-purple-300">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <ul className="list-disc pl-5 mb-4 text-gray-300 text-sm space-y-1">
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-300 hover:text-purple-400 transition-colors"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub Repository
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
