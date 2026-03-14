import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const Training = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const trainingData = [
    {
      id: "dsa-training",
      title: "SPRUCE (powered by Hitbullseye)",
      period: "June 2024 – July 2024",
      image: "/lovable-uploads/b1a80735-8174-4426-b1e3-aa6682c053f5.png",
      points: [
        "Studied fundamental and advanced concepts of data structures",
        "Learned algorithm design and analysis techniques",
        "Applied theoretical knowledge in practical scenarios through Java projects"
      ],
      imageType: "certificate"
    },
    {
      id: "codeforces-training",
      title: "Codeforces Competitive Programming",
      period: "January 2025 – February 2025",
      image: "https://codeforces.org/s/0/favicon-96x96.png",
      points: [
        "Mastered competitive programming techniques and problem-solving strategies",
        "Participated in coding contests and algorithmic challenges",
        "Enhanced proficiency in time and space complexity optimization",
        "Developed skills in pattern recognition for complex programming problems"
      ],
      imageType: "logo"
    }
  ];

  return (
    <div className="w-full space-y-4">
      {trainingData.map((training) => {
        const isHovered = hoveredCard === training.id;
        return (
          <Card
            key={training.id}
            className={`cyber-card rounded-lg transition-all duration-300 ${
              isHovered ? 'shadow-[0_0_20px_hsl(170,80%,40%,0.15)] border-cyber-border-hover' : ''
            }`}
            onMouseEnter={() => setHoveredCard(training.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardContent className="p-5">
              {training.imageType === "certificate" ? (
                <div className="w-full mb-4 flex justify-center">
                  <img
                    src={training.image}
                    alt={`${training.title} Certificate`}
                    className="max-w-full rounded-lg object-contain border border-cyber-border"
                    style={{ maxHeight: "200px", width: "auto" }}
                  />
                </div>
              ) : (
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img
                      src={training.image}
                      alt={`${training.title} Logo`}
                      className="w-12 h-12 rounded-md border border-cyber-border object-contain bg-cyber-bg-elevated"
                    />
                  </div>
                  <div>
                    <p className="text-cyber-text font-mono font-semibold text-sm">{training.title}</p>
                    <p className="text-cyber-accent text-xs font-mono">{training.period}</p>
                  </div>
                </div>
              )}
              <div>
                {training.imageType === "certificate" && (
                  <>
                    <p className="text-cyber-text font-mono font-semibold text-sm">{training.title}</p>
                    <p className="text-cyber-accent text-xs font-mono mb-2">{training.period}</p>
                  </>
                )}
                <ul className="list-disc list-inside ml-2 leading-relaxed text-sm text-cyber-text-muted space-y-1">
                  {training.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default Training;
