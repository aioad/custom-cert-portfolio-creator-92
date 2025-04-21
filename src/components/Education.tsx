
import { Card, CardContent } from "@/components/ui/card";
import { School } from "lucide-react";

const educationData = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech - CSE",
    period: "Aug 2022 - Present",
    location: "Phagwara, Punjab",
    grade: "CGPA: 8.16",
    image: "/lovable-uploads/ca3db0a8-2bb6-440a-b8a5-fac83fbedd41.png"
  },
  {
    institution: "Little Angels Sr. Sec. School",
    degree: "Intermediate",
    period: "2021 - 2022",
    location: "Barsar, Himachal Pradesh",
    grade: "88%",
    image: "/lovable-uploads/ebca5828-e574-49c7-9730-6b8f7ed0d397.png"
  },
  {
    institution: "Little Angels Sr. Sec. School",
    degree: "Matriculation",
    period: "2019 - 2020",
    location: "Barsar, Himachal Pradesh",
    grade: "91.4%",
    image: "/lovable-uploads/ebca5828-e574-49c7-9730-6b8f7ed0d397.png"
  }
];

const Education = () => (
  <section id="education" className="py-12 bg-[#1A1F2C]/90 relative overflow-hidden">
    <div className="container mx-auto px-4 relative z-10">
      <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Education
      </h2>
      <div className="flex flex-col sm:flex-row gap-6 items-center justify-center max-w-4xl mx-auto">
        {educationData.map((edu, index) => (
          <Card
            key={index}
            className="bg-[#2A2F3C]/90 border-purple-500/30 hover:border-purple-500 flex-1 min-w-[240px] max-w-xs shadow-md"
          >
            <CardContent className="flex flex-col items-center p-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-purple-500/40 bg-black mb-2">
                <img
                  src={edu.image}
                  alt={edu.institution}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-2 my-2">
                <School className="w-5 h-5 text-purple-400" />
                <span className="font-semibold text-purple-300 text-base text-center">{edu.institution}</span>
              </div>
              <div className="text-white/90 text-sm mb-1 text-center">{edu.degree}</div>
              <div className="text-gray-400 text-xs">{edu.period}</div>
              <div className="flex flex-wrap gap-2 justify-center items-center mt-2">
                <span className="text-xs bg-[#1A1F2C] px-2 py-1 rounded text-purple-300">{edu.location}</span>
                <span className="text-xs font-semibold text-purple-400">{edu.grade}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
