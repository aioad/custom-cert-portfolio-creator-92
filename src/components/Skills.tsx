
import { Card } from "@/components/ui/card";

const Skills = () => {
  const languages = [
    { name: "Java", icon: "/lovable-uploads/e2f3be99-0f53-44a9-be45-42e2e4f6f46a.png" },
    { name: "C", icon: "/lovable-uploads/98f22f69-dd69-447e-8c87-44e137190248.png" },
    { name: "C++", icon: "/lovable-uploads/96cec89d-2666-4f67-b6e8-c9732e40c172.png" },
    { name: "R", icon: "/lovable-uploads/fb795a3f-7edd-4a66-8bab-cf44b4c9d24e.png" },
    { name: "Python", icon: "/lovable-uploads/c4d47e4d-c57f-4d6a-9cb2-df74d35de94d.png" }
  ];

  const tools = [
    { name: "Power BI", icon: "/lovable-uploads/e2f3be99-0f53-44a9-be45-42e2e4f6f46a.png" },
    { name: "Ms-Excel", icon: "/lovable-uploads/98f22f69-dd69-447e-8c87-44e137190248.png" },
    { name: "Tableau", icon: "/lovable-uploads/96cec89d-2666-4f67-b6e8-c9732e40c172.png" },
    { name: "MySQL", icon: "/lovable-uploads/fb795a3f-7edd-4a66-8bab-cf44b4c9d24e.png" },
    { name: "Hadoop", icon: "/lovable-uploads/c4d47e4d-c57f-4d6a-9cb2-df74d35de94d.png" },
    { name: "Hbase", icon: "/lovable-uploads/e2f3be99-0f53-44a9-be45-42e2e4f6f46a.png" },
    { name: "Figma", icon: "/lovable-uploads/98f22f69-dd69-447e-8c87-44e137190248.png" },
    { name: "Visual Studio", icon: "/lovable-uploads/96cec89d-2666-4f67-b6e8-c9732e40c172.png" },
    { name: "Android Studio", icon: "/lovable-uploads/fb795a3f-7edd-4a66-8bab-cf44b4c9d24e.png" },
    { name: "Eclipse", icon: "/lovable-uploads/c4d47e4d-c57f-4d6a-9cb2-df74d35de94d.png" }
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
                <Card key={lang.name} className="p-4 bg-[#2A2F3C] border-purple-500/30 text-center flex flex-col items-center gap-2">
                  <img src={lang.icon} alt={lang.name} className="w-10 h-10 object-contain" />
                  <span className="text-gray-300">{lang.name}</span>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Tools & Platforms</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {tools.map((tool) => (
                <Card key={tool.name} className="p-4 bg-[#2A2F3C] border-purple-500/30 text-center flex flex-col items-center gap-2">
                  <img src={tool.icon} alt={tool.name} className="w-10 h-10 object-contain" />
                  <span className="text-gray-300">{tool.name}</span>
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
