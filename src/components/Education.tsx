
import { School } from "lucide-react";

const educationData = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech - CSE",
    period: "Aug 2022 - Present",
    location: "Phagwara, Punjab",
    grade: "CGPA: 8.16",
    image: "/lovable-uploads/ca3db0a8-2bb6-440a-b8a5-fac83fbedd41.png",
  },
  {
    institution: "Little Angels Sr. Sec. School",
    degree: "Intermediate",
    period: "2021 - 2022",
    location: "Barsar, Himachal Pradesh",
    grade: "88%",
    image: "/lovable-uploads/ebca5828-e574-49c7-9730-6b8f7ed0d397.png",
  },
  {
    institution: "Little Angels Sr. Sec. School",
    degree: "Matriculation",
    period: "2019 - 2020",
    location: "Barsar, Himachal Pradesh",
    grade: "91.4%",
    image: "/lovable-uploads/ebca5828-e574-49c7-9730-6b8f7ed0d397.png",
  },
];

const TimelineDot = ({ idx }: { idx: number }) => (
  <div className="relative flex flex-col items-center z-10">
    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-purple-700 border-2 border-purple-950 shadow-lg flex items-center justify-center animate-pulse">
      <School className="w-3 h-3 text-white" />
    </div>
    {idx < educationData.length - 1 && (
      <div className="w-1 h-16 bg-gradient-to-b from-purple-500/80 to-pink-500/40 mt-0.5" />
    )}
  </div>
);

const Education = () => (
  <section id="education" className="py-16 bg-gradient-to-br from-[#181b22]/80 via-[#2A2F3C]/70 to-[#23082a]/90 overflow-hidden">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-purple-700 bg-clip-text text-transparent tracking-wide">
        Education
      </h2>
      <div className="flex justify-center">
        <div className="relative flex flex-col items-center max-w-2xl w-full">
          {educationData.map((edu, idx) => (
            <div key={edu.degree + idx} className="flex w-full mb-10 last:mb-0 items-center group">
              <div className="flex flex-col items-center mx-2">
                <TimelineDot idx={idx} />
              </div>
              <div className="flex-1 ml-6 p-5 bg-[#1A1F2C]/80 border border-purple-500/20 rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300 backdrop-blur-md hover:border-purple-500/70">
                <div className="flex flex-row items-center gap-3">
                  <img
                    src={edu.image}
                    alt={edu.institution}
                    className="w-16 h-16 rounded-xl border-2 border-purple-500/40 object-cover shadow-md"
                  />
                  <div>
                    <div className="text-lg font-bold text-purple-200">{edu.institution}</div>
                    <div className="text-sm text-gray-400">{edu.location}</div>
                  </div>
                </div>
                <div className="pl-20 mt-2">
                  <div className="font-semibold text-white/90 text-base">{edu.degree}</div>
                  <div className="flex gap-2 mt-1">
                    <span className="text-xs text-purple-200 bg-purple-800/40 px-2 py-1 rounded">{edu.period}</span>
                    <span className="text-xs font-bold text-pink-400 bg-pink-800/30 px-2 py-1 rounded">{edu.grade}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education;

