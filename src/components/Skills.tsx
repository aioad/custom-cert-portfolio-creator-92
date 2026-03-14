import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Shield } from "lucide-react";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const offensiveSecurity = [
    { name: "Kali Linux", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Kali-dragon-icon.svg" },
    { name: "Metasploit", icon: "https://www.kali.org/tools/metasploit-framework/images/metasploit-framework-logo.svg" },
    { name: "Burp Suite", icon: "/logos/burpsuite.png" },
    { name: "Nmap", icon: "https://nmap.org/images/sitelogo-nmap.svg" },
    { name: "Wireshark", icon: "https://upload.wikimedia.org/wikipedia/commons/d/df/Wireshark_icon.svg" },
    { name: "John the Ripper", icon: "/logos/john-the-ripper.png" },
    { name: "Hydra", icon: "https://www.kali.org/tools/hydra/images/hydra-logo.svg" },
    { name: "Aircrack-ng", icon: "https://www.kali.org/tools/aircrack-ng/images/aircrack-ng-logo.svg" },
  ];

  const defensiveSecurity = [
    { name: "Splunk", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Splunk-Logo.jpg" },
    { name: "Snort", icon: "/logos/snort.png" },
    { name: "OpenVAS", icon: "/logos/openvas.png" },
    { name: "Nessus", icon: "/logos/nessus.png" },
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

  const SkillCard = ({ name, icon }: { name: string; icon: string }) => {
    const isHovered = hoveredSkill === name;

    return (
      <Card
        className={`p-4 cyber-card rounded-lg transition-all duration-300 cursor-default ${
          isHovered ? 'shadow-[0_0_20px_hsl(170,80%,40%,0.2)] border-cyber-border-hover scale-105' : ''
        }`}
        onMouseEnter={() => setHoveredSkill(name)}
        onMouseLeave={() => setHoveredSkill(null)}
      >
        <div className="flex flex-col items-center gap-3 relative z-10">
          <div className={`w-14 h-14 flex items-center justify-center transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}>
            <img src={icon} alt={name} className="w-full h-full object-contain" />
          </div>
          <span className={`text-xs font-mono text-center tracking-wide transition-all duration-300 ${
            isHovered ? 'text-cyber-accent' : 'text-cyber-text-muted'
          }`}>
            {name}
          </span>
        </div>
      </Card>
    );
  };

  const sections = [
    { title: "Offensive Security", icon: "🗡️", skills: offensiveSecurity },
    { title: "Defensive Security", icon: "🛡️", skills: defensiveSecurity },
    { title: "Programming & Scripting", icon: "💻", skills: programmingScripting },
    { title: "Networking & OS", icon: "🌐", skills: networking },
  ];

  return (
    <section className="py-20 w-full">
      <div className="w-full px-6">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Shield className="w-5 h-5 text-cyber-accent" />
          <span className="font-mono text-xs text-cyber-text-muted uppercase tracking-[0.2em]">// skill_set</span>
        </div>
        <h2 className="text-4xl font-mono font-bold mb-12 text-center cyber-gradient-text">
          Cyber Security Skills
        </h2>
        <div className="space-y-10 max-w-7xl mx-auto">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-mono font-semibold mb-4 cyber-glow-text flex items-center gap-2">
                <span>{section.icon}</span>
                {section.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
