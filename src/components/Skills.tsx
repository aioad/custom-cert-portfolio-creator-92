
import { Card } from "@/components/ui/card";

const Skills = () => {
  const languages = [
    { name: "C", icon: "/lovable-uploads/724947c7-5867-4f5b-836c-307d83d9212f.png" },
    { name: "C++", icon: "/lovable-uploads/b85a8eba-0af7-448d-b0e2-bf369bf74251.png" },
    { name: "Java", icon: "/lovable-uploads/ff22e2b5-6baa-4fe9-816a-294bc0c7f4ee.png" },
    { name: "Python", icon: "/lovable-uploads/9136a116-7e13-48ef-ad1d-12156b5b1677.png" },
    { name: "R", icon: "/lovable-uploads/f55585da-383e-49d0-a413-60364a9f96fd.png" }
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
    { name: "Eclipse", icon: "https://www.eclipse.org/artwork/images/eclipse_foundation_logo.jpg" }
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
                <Card key={lang.name} className="p-4 bg-[#2A2F3C] border-purple-500/30 hover:border-purple-500 transition-all duration-300">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <img src={lang.icon} alt={lang.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-gray-300">{lang.name}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Tools & Platforms</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {tools.map((tool) => (
                <Card key={tool.name} className="p-4 bg-[#2A2F3C] border-purple-500/30 hover:border-purple-500 transition-all duration-300">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-gray-300">{tool.name}</span>
                  </div>
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
