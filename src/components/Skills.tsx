
import { Card } from "@/components/ui/card";

const Skills = () => {
  const languages = [
    { name: "Java", icon: "/lovable-uploads/b79f62c2-257b-462a-a767-9645f70811e8.png" },
    { name: "C", icon: "/lovable-uploads/dc02845d-c76e-41ac-af33-6415e6ad0e0f.png" },
    { name: "C++", icon: "/lovable-uploads/5b8fc484-6832-407f-ace4-78fb7f32becc.png" },
    { name: "R", icon: "/lovable-uploads/f4db687f-fa1a-4a1a-99f7-bb9e5f8c08e0.png" },
    { name: "Python", icon: "/lovable-uploads/62572a5a-da64-4a4f-a5f6-289dd3199695.png" }
  ];

  const tools = [
    { name: "Power BI", icon: "/lovable-uploads/f1024025-e3b7-451c-929e-55361565e08c.png" },
    { name: "Ms-Excel", icon: "/lovable-uploads/79f5ca70-aa0e-49aa-9059-70548d201ef7.png" },
    { name: "Tableau", icon: "/lovable-uploads/e838fd84-3836-4ce0-8f7b-bacff2c3bbae.png" },
    { name: "MySQL", icon: "/lovable-uploads/b79f62c2-257b-462a-a767-9645f70811e8.png" },
    { name: "Hadoop", icon: "/lovable-uploads/dc02845d-c76e-41ac-af33-6415e6ad0e0f.png" },
    { name: "Hbase", icon: "/lovable-uploads/5b8fc484-6832-407f-ace4-78fb7f32becc.png" },
    { name: "Figma", icon: "/lovable-uploads/f4db687f-fa1a-4a1a-99f7-bb9e5f8c08e0.png" },
    { name: "Visual Studio", icon: "/lovable-uploads/62572a5a-da64-4a4f-a5f6-289dd3199695.png" },
    { name: "Android Studio", icon: "/lovable-uploads/f1024025-e3b7-451c-929e-55361565e08c.png" },
    { name: "Eclipse", icon: "/lovable-uploads/79f5ca70-aa0e-49aa-9059-70548d201ef7.png" }
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
