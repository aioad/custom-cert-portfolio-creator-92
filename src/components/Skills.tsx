import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Sparkles } from "lucide-react";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const languages = [
    { name: "C", icon: "/lovable-uploads/724947c7-5867-4f5b-836c-307d83d9212f.png" },
    { name: "C++", icon: "/lovable-uploads/b85a8eba-0af7-448d-b0e2-bf369bf74251.png" },
    { name: "HTML", icon: "/lovable-uploads/d3c2c7b2-10da-4adf-ae7a-7b7b47857e91.png" },
    { name: "Python", icon: "/lovable-uploads/9136a116-7e13-48ef-ad1d-12156b5b1677.png" },
    { name: "CSS", icon: "/lovable-uploads/c001d546-5b7d-46ce-a205-79990981a136.png" }
  ];

  const tools = [
    { name: "Power BI", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/630px-New_Power_BI_Logo.svg.png" },
    { name: "Ms-Excel", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/640px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png" },
    { name: "Tableau", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Tableau_Logo.png/640px-Tableau_Logo.png" },
    { name: "MySQL", icon: "https://www.mysql.com/common/logos/logo-mysql-170x115.png" },
    { name: "Hadoop", icon: "https://hadoop.apache.org/hadoop-logo.jpg" },
    { name: "Hbase", icon: "https://hbase.apache.org/images/hbase_logo_with_orca_large.png" },
    { name: "Figma", icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
    { name: "Visual Studio", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/640px-Visual_Studio_Code_1.35_icon.svg.png" },
    { name: "Android Studio", icon: "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png" },
    { name: "Eclipse", icon: "https://www.eclipse.org/downloads/assets/public/images/logo-eclipse.png" }
  ];

  const handleMouseEnter = (skillName: string) => {
    setHoveredSkill(skillName);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  const SkillCard = ({ name, icon, type }: { name: string; icon: string; type: string }) => {
    const isHovered = hoveredSkill === name;

    return (
      <Card 
        key={name} 
        className={`p-4 bg-[#2A2F3C] border-purple-500/30 hover:border-purple-500 transition-all duration-300 relative overflow-hidden ${isHovered ? 'shadow-lg shadow-purple-500/30 scale-105' : ''}`}
        onMouseEnter={() => handleMouseEnter(name)}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>
            <div className="absolute -top-4 -right-4">
              <Sparkles className="w-10 h-10 text-purple-400 animate-pulse" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-purple-600/5 via-pink-500/5 to-purple-400/5 rounded-full animate-pulse"></div>
          </div>
        )}
        <div className="flex flex-col items-center gap-2 relative z-10">
          <div className={`w-16 h-16 flex items-center justify-center transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}>
            <img src={icon} alt={name} className="w-full h-full object-contain" />
          </div>
          <span className={`transition-all duration-300 ${isHovered ? 'text-white font-medium' : 'text-gray-300'}`}>
            {name}
          </span>
          {isHovered && (
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 w-3/4 animate-pulse"></div>
          )}
        </div>
      </Card>
    );
  };

  return (
    <section className="py-20 w-full">
      <div className="w-full px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="space-y-8 max-w-7xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Languages</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {languages.map((lang) => (
                <SkillCard key={lang.name} name={lang.name} icon={lang.icon} type="language" />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Tools & Platforms</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {tools.map((tool) => (
                <SkillCard key={tool.name} name={tool.name} icon={tool.icon} type="tool" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
