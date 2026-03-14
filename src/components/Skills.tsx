
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Sparkles } from "lucide-react";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const offensiveSecurity = [
    { name: "Kali Linux", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Kali-dragon-icon.svg" },
    { name: "Metasploit", icon: "https://www.kali.org/tools/metasploit-framework/images/metasploit-framework-logo.svg" },
    { name: "Burp Suite", icon: "https://cdn.prod.website-files.com/65a20c289e58e38e78020b5a/65ead9eecfbd5ff3e24a2e3d_PortSwigger-Logo-Black.svg" },
    { name: "Nmap", icon: "https://nmap.org/images/sitelogo-nmap.svg" },
    { name: "Wireshark", icon: "https://upload.wikimedia.org/wikipedia/commons/d/df/Wireshark_icon.svg" },
    { name: "John the Ripper", icon: "https://www.openwall.com/john/Openwall_logo.png" },
    { name: "Hydra", icon: "https://www.kali.org/tools/hydra/images/hydra-logo.svg" },
    { name: "Aircrack-ng", icon: "https://www.kali.org/tools/aircrack-ng/images/aircrack-ng-logo.svg" },
  ];

  const defensiveSecurity = [
    { name: "Splunk", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Splunk-Logo.jpg" },
    { name: "Snort", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Snort_ids_logo.png" },
    { name: "OpenVAS", icon: "https://www.kali.org/tools/openvas-scanner/images/openvas-scanner-logo.svg" },
    { name: "Nessus", icon: "https://upload.wikimedia.org/wikipedia/commons/4/48/Nessus-Professional-FullColor-RGB.svg" },
    { name: "pfSense", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b9/PfSense_logo.png" },
  ];

  const programmingScripting = [
    { name: "Python", icon: "/lovable-uploads/9136a116-7e13-48ef-ad1d-12156b5b1677.png" },
    { name: "Bash", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg" },
    { name: "PowerShell", icon: "https://upload.wikimedia.org/wikipedia/commons/a/af/PowerShell_Core_6.0_icon.png" },
    { name: "C", icon: "/lovable-uploads/724947c7-5867-4f5b-836c-307d83d9212f.png" },
    { name: "SQL", icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" },
  ];

  const networking = [
    { name: "TCP/IP", icon: "https://cdn-icons-png.flaticon.com/512/1239/1239682.png" },
    { name: "DNS", icon: "https://cdn-icons-png.flaticon.com/512/8297/8297437.png" },
    { name: "VPN", icon: "https://cdn-icons-png.flaticon.com/512/6195/6195699.png" },
    { name: "Firewall", icon: "https://cdn-icons-png.flaticon.com/512/2716/2716612.png" },
    { name: "Linux", icon: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg" },
  ];

  const handleMouseEnter = (skillName: string) => {
    setHoveredSkill(skillName);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  const SkillCard = ({ name, icon }: { name: string; icon: string }) => {
    const isHovered = hoveredSkill === name;

    return (
      <Card 
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
          <span className={`text-sm text-center transition-all duration-300 ${isHovered ? 'text-white font-medium' : 'text-gray-300'}`}>
            {name}
          </span>
          {isHovered && (
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 w-3/4 animate-pulse"></div>
          )}
        </div>
      </Card>
    );
  };

  const sections = [
    { title: "🗡️ Offensive Security", skills: offensiveSecurity },
    { title: "🛡️ Defensive Security", skills: defensiveSecurity },
    { title: "💻 Programming & Scripting", skills: programmingScripting },
    { title: "🌐 Networking & OS", skills: networking },
  ];

  return (
    <section className="py-20 w-full">
      <div className="w-full px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Cyber Security Skills
        </h2>
        <div className="space-y-8 max-w-7xl mx-auto">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">{section.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {section.skills.map((skill) => (
                  <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
