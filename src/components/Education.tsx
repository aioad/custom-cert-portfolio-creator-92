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
    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyber-accent to-cyber-glow border-2 border-cyber-bg shadow-[0_0_10px_hsl(170,80%,40%,0.4)] flex items-center justify-center">
      <School className="w-3 h-3 text-cyber-bg" />
    </div>
    {idx < educationData.length - 1 && (
      <div className="w-0.5 h-24 bg-gradient-to-b from-cyber-accent/60 to-cyber-accent/10 mt-0.5" />
    )}
  </div>
);

const Education = () => (
  <div className="w-full">
    <div className="relative flex flex-col items-center w-full">
      {educationData.map((edu, idx) => (
        <div key={edu.degree + idx} className="flex w-full mb-14 last:mb-0 items-center group">
          <div className="flex flex-col items-center mx-3">
            <TimelineDot idx={idx} />
          </div>
          <div className="flex-1 ml-6 p-6 cyber-card rounded-xl group-hover:border-cyber-border-hover group-hover:shadow-[0_0_20px_hsl(170,80%,40%,0.1)] transition-all duration-300">
            <div className="flex flex-row items-center gap-5">
              <img
                src={edu.image}
                alt={edu.institution}
                className="w-24 h-24 rounded-xl border border-cyber-border object-cover"
              />
              <div>
                <div className="text-lg font-mono font-bold text-cyber-text">{edu.institution}</div>
                <div className="text-xs font-mono text-cyber-text-muted">{edu.location}</div>
              </div>
            </div>
            <div className="pl-28 mt-4">
              <div className="font-mono font-semibold text-cyber-text text-sm">{edu.degree}</div>
              <div className="flex gap-3 mt-2">
                <span className="text-xs font-mono text-cyber-accent bg-cyber-accent-dim/30 px-3 py-1 rounded border border-cyber-border">
                  {edu.period}
                </span>
                <span className="text-xs font-mono font-bold text-cyber-warning bg-cyber-warning/10 px-3 py-1 rounded border border-cyber-warning/20">
                  {edu.grade}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Education;
