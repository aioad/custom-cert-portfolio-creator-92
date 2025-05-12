
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Sparkles } from "lucide-react";
import { useState } from "react";

const Certificates = () => {
  const [hoveredCertificate, setHoveredCertificate] = useState<string | null>(null);

  const certificatesData = [
    {
      title: "Myntra HackerRamp",
      organization: "Myntra",
      date: "July 2024",
      description: "Our team was in top 30 among 9000+ participants in national level hackathon which was organised by myntra.",
      image: "/lovable-uploads/d4326dad-35de-4337-8f26-df17d7a36101.png"
    },
    {
      title: "Problem-Solving Certificate",
      organization: "HackerRank",
      date: "October 18, 2024",
      description: "Certification for completing problem-solving challenges and demonstrating strong algorithmic skills.",
      image: "/lovable-uploads/d22eb2b4-5c88-4758-abe9-aa674bc00cd3.png"
    },
    {
      title: "Social Network Certificate",
      organization: "NPTEL",
      date: "November 2024",
      description: "Certification in Social Network Analysis and implementation.",
      image: "/lovable-uploads/c557d5e8-3174-480f-836f-fd9ce92194ea.png"
    },
    {
      title: "DBMS Certificate",
      organization: "MongoDB",
      date: "July 10, 2024",
      description: "Certification in Database Management Systems using MongoDB.",
      image: "/lovable-uploads/c652a96c-06bb-494b-9347-df034190f508.png"
    },
    {
      title: "Generative AI",
      organization: "Coursera (Google Cloud)",
      date: "January 26, 2024",
      description: "Certification in Generative AI authorized by Google Cloud.",
      image: "/lovable-uploads/338d655f-90a0-4927-bacb-84cff8e75395.png"
    }
  ];

  const handleMouseEnter = (certificateTitle: string) => {
    setHoveredCertificate(certificateTitle);
  };

  const handleMouseLeave = () => {
    setHoveredCertificate(null);
  };

  return (
    <section className="py-20 bg-[#1A1F2C]/50 w-full">
      <div className="w-full px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Certificates
        </h2>
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="relative"
          >
            <CarouselContent>
              {certificatesData.map((cert, index) => {
                const isHovered = hoveredCertificate === cert.title;
                
                return (
                  <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3">
                    <Card 
                      className={`h-full bg-[#2A2F3C] border-purple-500/30 hover:border-purple-500 transition-all duration-300 relative overflow-hidden ${isHovered ? 'shadow-lg shadow-purple-500/30 scale-102' : ''}`}
                      onMouseEnter={() => handleMouseEnter(cert.title)}
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
                      <CardContent className="p-6 flex flex-col h-full relative z-10">
                        <div className="mb-4 w-full">
                          <img 
                            src={cert.image} 
                            alt={cert.title}
                            className={`w-full h-48 object-contain rounded-lg mb-4 transition-all duration-300 ${isHovered ? 'scale-105' : ''}`}
                          />
                        </div>
                        <div className="flex items-center mb-4">
                          <Award className={`h-6 w-6 mr-3 transition-colors duration-300 ${isHovered ? 'text-purple-300 animate-pulse' : 'text-purple-400'}`} />
                          <h3 className={`text-lg font-bold transition-colors duration-300 ${isHovered ? 'text-purple-200' : 'text-purple-300'}`}>
                            {cert.title}
                          </h3>
                        </div>
                        <div className="text-gray-300 text-sm mb-2">
                          <span className="font-medium">{cert.organization}</span>
                          <span className="mx-1">•</span>
                          <span>{cert.date}</span>
                        </div>
                        <p className={`text-sm transition-colors duration-300 ${isHovered ? 'text-gray-300' : 'text-gray-400'}`}>
                          {cert.description}
                        </p>
                        
                        {isHovered && (
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 w-3/4 animate-pulse"></div>
                        )}
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-purple-500/10 border-purple-500/30 text-purple-300 hover:bg-purple-500/20" />
            <CarouselNext className="right-0 bg-purple-500/10 border-purple-500/30 text-purple-300 hover:bg-purple-500/20" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
