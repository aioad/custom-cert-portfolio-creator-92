
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const Certificates = () => {
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

  return (
    <section className="py-20 bg-[#1A1F2C]/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Certificates
        </h2>
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="relative"
          >
            <CarouselContent>
              {certificatesData.map((cert, index) => (
                <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3">
                  <Card className="h-full bg-[#2A2F3C] border-purple-500/30 hover:border-purple-500 transition-all duration-300">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4 w-full">
                        <img 
                          src={cert.image} 
                          alt={cert.title}
                          className="w-full h-48 object-contain rounded-lg mb-4"
                        />
                      </div>
                      <div className="flex items-center mb-4">
                        <Award className="h-6 w-6 mr-3 text-purple-400" />
                        <h3 className="text-lg font-bold text-purple-300">{cert.title}</h3>
                      </div>
                      <div className="text-gray-300 text-sm mb-2">
                        <span className="font-medium">{cert.organization}</span>
                        <span className="mx-1">•</span>
                        <span>{cert.date}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{cert.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
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
