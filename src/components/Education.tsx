import { Card, CardContent } from "@/components/ui/card";
import { School, BookOpenText } from "lucide-react";

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
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <Card className="bg-[#2A2F3C]/90 border-purple-500/30 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpenText className="w-6 h-6 text-purple-400" />
                  <h3 className="text-2xl font-bold text-purple-300">Technical Training</h3>
                </div>
                
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/b1a80735-8174-4426-b1e3-aa6682c053f5.png"
                    alt="DSA Training Certificate"
                    className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => window.open("/lovable-uploads/b1a80735-8174-4426-b1e3-aa6682c053f5.png", "_blank")}
                  />
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-purple-300">SPRUCE (powered by Hitbullseye)</h4>
                  <p className="text-white/90">Data Structures and Algorithms Training</p>
                  <p className="text-gray-400">June 2024 - July 2024</p>
                  <p className="text-purple-400 font-medium">84 Hours Training</p>
                  
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Studied fundamental and advanced concepts of data structures, including arrays, linked lists, stacks, queues, trees, graphs, and hash tables.</li>
                    <li>Learned algorithm design and analysis, focusing on sorting, searching, dynamic programming, and graph algorithms.</li>
                    <li>Applied theoretical knowledge in practical scenarios through hands-on projects in Java.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:w-2/3">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="relative">
              <div className="absolute h-full w-0.5 bg-purple-500/30 left-4 md:left-1/2 transform md:-translate-x-1/2 top-0"></div>
              
              {educationData.map((edu, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row md:items-center mb-16 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-9 h-9 rounded-full bg-[#2A2F3C] border-2 border-purple-500 z-10 shadow-lg shadow-purple-500/20">
                    <School className="w-5 h-5 text-purple-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  
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
        </div>
      </div>
    </section>
  );
};

export default Education;
