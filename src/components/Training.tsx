
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Sparkles } from "lucide-react";

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

  const handleMouseEnter = (cardId: string) => {
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="w-full space-y-4">
      {trainingData.map((training) => {
        const isHovered = hoveredCard === training.id;
        
        return (
          <Card 
            key={training.id}
            className={`bg-[#2A2F3C]/90 border-purple-500/40 hover:border-purple-500 transition-all duration-300 shadow-md relative overflow-hidden ${isHovered ? 'shadow-lg shadow-purple-500/30 scale-102' : ''}`}
            onMouseEnter={() => handleMouseEnter(training.id)}
            onMouseLeave={handleMouseLeave}
          >
            {isHovered && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>
                <div className="absolute -top-4 -right-4">
                  <Sparkles className="w-10 h-10 text-purple-400 animate-pulse" />
                </div>
              </div>
            )}
            <CardContent className="p-5 relative z-10">
              {training.imageType === "certificate" ? (
                <div className="w-full mb-4 flex justify-center">
                  <img
                    src={training.image}
                    alt={`${training.title} Certificate`}
                    className={`max-w-full rounded-lg shadow-lg object-contain border-2 transition-all duration-300 ${isHovered ? 'border-purple-400 shadow-purple-500/30' : 'border-purple-500 bg-black'}`}
                    style={{ maxHeight: "200px", width: "auto", display: "block" }}
                  />
                </div>
              ) : (
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img
                      src={training.image}
                      alt={`${training.title} Logo`}
                      className={`w-12 h-12 rounded-md transition-all duration-300 ${isHovered ? 'border-2 border-purple-400/70' : 'border border-purple-500/50'}`}
                      style={{ objectFit: "contain", background: "#1b1e2e" }}
                    />
                  </div>
                  <div className="space-y-2">
                    <p className={`transition-colors duration-300 ${isHovered ? 'text-white' : 'text-white/90'} font-semibold`}>
                      {training.title}
                    </p>
                    <p className="text-purple-400">{training.period}</p>
                  </div>
                </div>
              )}
              <div className={`space-y-2 ${training.imageType === "certificate" ? '' : ''}`}>
                {training.imageType === "certificate" && (
                  <>
                    <p className={`transition-colors duration-300 ${isHovered ? 'text-white' : 'text-white/90'} font-semibold`}>
                      {training.title}
                    </p>
                    <p className="text-purple-400">{training.period}</p>
                  </>
                )}
                <ul className="list-disc list-inside ml-2 leading-relaxed text-sm">
                  {training.points.map((point, index) => (
                    <li 
                      key={index}
                      className={`transition-colors duration-300 ${isHovered ? 'text-gray-200' : 'text-gray-300'}`}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              {isHovered && (
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 w-1/2 animate-pulse"></div>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default Training;
