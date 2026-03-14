import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projectsData = [
    {
      title: "NetHawk - AI-Powered Network Security System",
      image: "/lovable-uploads/nethawk-dashboard.png",
      points: [
        "Real-time Network Monitoring with live packet analysis.",
        "AI-Powered Threat Detection using machine learning algorithms.",
        "Automated IP Blocking with intelligent response systems."
      ],
      githubLink: "https://github.com/aioad/NetHawk.git",
      technologies: ["Python", "Machine Learning", "Network Security", "AI"]
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

  return (
    <section className="py-20 w-full">
      <div className="w-full px-6">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="font-mono text-xs text-cyber-text-muted uppercase tracking-[0.2em]">// projects</span>
        </div>
        <h2 className="text-4xl font-mono font-bold mb-12 text-center cyber-gradient-text">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projectsData.map((project, index) => {
            const isHovered = hoveredProject === project.title;
            return (
              <Card
                key={index}
                className={`cyber-card rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 ${
                  isHovered ? 'shadow-[0_0_25px_hsl(170,80%,40%,0.15)] border-cyber-border-hover scale-[1.02]' : ''
                }`}
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="w-full h-48 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg to-transparent opacity-60" />
                </div>
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-lg font-mono font-semibold mb-3 text-cyber-text-heading">
                    {project.title}
                  </h3>
                  <ul className="list-disc pl-5 mb-4 text-cyber-text-muted text-sm space-y-1">
                    {project.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-cyber-accent-dim/30 text-cyber-accent text-xs font-mono rounded border border-cyber-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-cyber-text-muted hover:text-cyber-accent transition-colors font-mono text-sm"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Repository
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
