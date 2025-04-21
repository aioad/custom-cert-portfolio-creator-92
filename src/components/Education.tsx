
import { Card, CardContent } from "@/components/ui/card";
import { School } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      period: "Since August 2022",
      location: "Phagwara, Punjab",
      grade: "CGPA: 8.16",
      image: "/lovable-uploads/ca3db0a8-2bb6-440a-b8a5-fac83fbedd41.png"
    },
    {
      institution: "Little Angels Sr. Sec. School",
      degree: "Intermediate",
      period: "April 2021 - March 2022",
      location: "Barsar, Himachal Pradesh",
      grade: "Percentage: 88%",
      image: "/lovable-uploads/ebca5828-e574-49c7-9730-6b8f7ed0d397.png"
    },
    {
      institution: "Little Angels Sr. Sec. School",
      degree: "Matriculation",
      period: "April 2019 - March 2020",
      location: "Barsar, Himachal Pradesh",
      grade: "Percentage: 91.4%",
      image: "/lovable-uploads/ebca5828-e574-49c7-9730-6b8f7ed0d397.png"
    }
  ];

  return (
    <section className="py-12 bg-[#1A1F2C]/90 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="flex flex-col gap-8 items-center">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className="w-full max-w-3xl bg-[#2A2F3C]/90 border-purple-500/30 hover:border-purple-500 transition-all duration-300 shadow-md animate-fade-in"
            >
              <CardContent className="flex items-center gap-6 p-4">
                <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 border-purple-500/40 bg-black">
                  <img
                    src={edu.image}
                    alt={edu.institution}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-1">
                    <School className="w-5 h-5 text-purple-400" />
                    <span className="text-lg font-semibold text-purple-300">{edu.institution}</span>
                  </div>
                  <div className="text-white/90 font-medium">{edu.degree}</div>
                  <div className="text-gray-400 text-sm">{edu.period}</div>
                  <div className="mt-1 flex flex-wrap gap-4">
                    <span className="text-xs bg-[#1A1F2C] px-2 py-1 rounded text-purple-300">{edu.location}</span>
                    <span className="text-xs font-semibold text-purple-400">{edu.grade}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
