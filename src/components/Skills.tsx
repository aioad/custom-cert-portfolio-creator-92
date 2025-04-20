
import { Card } from "@/components/ui/card";

const Skills = () => {
  const languages = ["Java", "C", "C++", "R", "Python"];
  const tools = [
    "Power BI",
    "Ms-Excel",
    "Tableau",
    "MySQL",
    "Hadoop",
    "Hbase",
    "Figma",
    "Visual Studio",
    "Android Studio",
    "Eclipse",
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Languages</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {languages.map((lang) => (
                <Card key={lang} className="p-4 bg-[#2A2F3C] border-purple-500/30 text-center">
                  <span className="text-gray-300">{lang}</span>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Tools & Platforms</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {tools.map((tool) => (
                <Card key={tool} className="p-4 bg-[#2A2F3C] border-purple-500/30 text-center">
                  <span className="text-gray-300">{tool}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
