
import { Card, CardContent } from "@/components/ui/card";
import { School } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      period: "Since August 2022",
      location: "Phagwara, Punjab",
      grade: "CGPA: 8.16"
    },
    {
      institution: "Little Angels Sr. Sec. School",
      degree: "Intermediate",
      period: "April 2021 - March 2022",
      location: "Barsar, Himachal Pradesh",
      grade: "Percentage: 88%"
    },
    {
      institution: "Little Angels Sr. Sec. School",
      degree: "Matriculation",
      period: "April 2019 - March 2020",
      location: "Barsar, Himachal Pradesh",
      grade: "Percentage: 91.4%"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute h-full w-0.5 bg-purple-500/30 left-4 md:left-1/2 transform md:-translate-x-1/2 top-0"></div>
          
          {/* Education items */}
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col md:flex-row md:items-center mb-10 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-9 h-9 rounded-full bg-[#2A2F3C] border-2 border-purple-500 z-10">
                <School className="w-5 h-5 text-purple-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              
              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}>
                <Card className="bg-[#2A2F3C] border-purple-500/30 hover:border-purple-500 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-purple-300">{edu.institution}</h3>
                    <p className="text-white mt-1">{edu.degree}</p>
                    <p className="text-gray-300 text-sm mt-2">{edu.period}</p>
                    <div className="flex justify-between mt-2 text-sm text-gray-300">
                      <span>{edu.location}</span>
                      <span className="font-medium">{edu.grade}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
