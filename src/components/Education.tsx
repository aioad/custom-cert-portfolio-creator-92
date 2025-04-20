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
      institution: "SPRUCE (powered by Hitbullseye)",
      degree: "Data Structures and Algorithms Training",
      period: "June 2024 - July 2024",
      location: "Lovely Professional University",
      grade: "84 Hours Training",
      image: "/lovable-uploads/b1a80735-8174-4426-b1e3-aa6682c053f5.png",
      description: [
        "Studied fundamental and advanced concepts of data structures, including arrays, linked lists, stacks, queues, trees, graphs, and hash tables.",
        "Learned algorithm design and analysis, focusing on sorting, searching, dynamic programming, and graph algorithms.",
        "Applied theoretical knowledge in practical scenarios through hands-on projects in Java."
      ]
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

  const bgImages = [
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  ];

  return (
    <section className="py-20 bg-[#1A1F2C]/90 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-3 h-full">
          {bgImages.map((img, i) => (
            <div key={i} className="bg-cover bg-center" style={{ backgroundImage: `url(${img})` }} />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
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
              className={`relative flex flex-col md:flex-row md:items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-9 h-9 rounded-full bg-[#2A2F3C] border-2 border-purple-500 z-10 shadow-lg shadow-purple-500/20">
                <School className="w-5 h-5 text-purple-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              
              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}>
                <Card className="bg-[#2A2F3C]/90 border-purple-500/30 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10">
                  <CardContent className="p-6">
                    <div className="mb-4 w-full h-32 overflow-hidden rounded-lg">
                      <img 
                        src={edu.image} 
                        alt={edu.institution}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-purple-300 mb-2">{edu.institution}</h3>
                    <p className="text-white/90 font-medium mb-1">{edu.degree}</p>
                    <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
                    {edu.description && (
                      <ul className="list-disc list-inside text-sm text-gray-400 mb-3 space-y-1">
                        {edu.description.map((desc, i) => (
                          <li key={i} className="leading-tight">{desc}</li>
                        ))}
                      </ul>
                    )}
                    <div className="flex justify-between items-center mt-3 pt-3 border-t border-purple-500/20">
                      <span className="text-sm text-gray-400">{edu.location}</span>
                      <span className="text-sm font-medium text-purple-400">{edu.grade}</span>
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
