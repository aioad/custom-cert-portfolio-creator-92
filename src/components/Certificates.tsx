import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Award } from "lucide-react";

const Certificates = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const certificates = [
    {
      id: "microsoft-cybersecurity",
      title: "Microsoft Cybersecurity Analyst",
      issuer: "Microsoft via Coursera",
      date: "May 2025",
      image: "/lovable-uploads/864ceb20-e442-4719-9392-226013008e06.png",
      description: "Professional Certificate in Cybersecurity Analysis covering threat vectors, identity solutions, and security management."
    },
    {
      id: "certified-ethical-hacker",
      title: "Certified Ethical Hacker",
      issuer: "WsCube Tech",
      date: "February 2025",
      image: "/lovable-uploads/4f3441b3-b326-46e7-873b-ede5e981c32e.png",
      description: "2 months comprehensive ethical hacking training covering penetration testing methodologies and security assessment techniques."
    },
    {
      id: "certified-network-security",
      title: "Certified Network Security Practitioner",
      issuer: "The SecOps Group",
      date: "January 2025",
      image: "/lovable-uploads/bd0be634-9980-44d4-b5f5-b72436e91f1e.png",
      description: "Comprehensive network security certification covering CNSP with merit, focusing on network security best practices and implementation."
    },
    {
      id: "google-cybersecurity",
      title: "Google Cybersecurity Professional Certificate",
      issuer: "Google",
      date: "December 2024",
      image: "/lovable-uploads/92c7d245-7eea-4d86-8812-68c549b68516.png",
      description: "Comprehensive cybersecurity training covering network security, incident response, and risk management."
    },
    {
      id: "aws-security",
      title: "AWS Security Fundamentals",
      issuer: "Amazon Web Services",
      date: "January 2025",
      image: "/lovable-uploads/79f5ca70-aa0e-49aa-9059-70548d201ef7.png",
      description: "Cloud security best practices and AWS security services implementation."
    },
    {
      id: "cisco-networking",
      title: "Cisco Networking Basics",
      issuer: "Cisco",
      date: "November 2024",
      image: "/lovable-uploads/25ee78b6-fafc-48e7-9f41-160bd446c268.png",
      description: "Fundamental networking concepts and Cisco networking technologies."
    },
    {
      id: "comptia-security",
      title: "CompTIA Security+ Preparation",
      issuer: "CompTIA",
      date: "October 2024",
      image: "/lovable-uploads/5b8fc484-6832-407f-ace4-78fb7f32becc.png",
      description: "Security fundamentals and industry best practices preparation course."
    },
    {
      id: "ethical-hacking",
      title: "Ethical Hacking Essentials",
      issuer: "EC-Council",
      date: "September 2024",
      image: "/lovable-uploads/62572a5a-da64-4a4f-a5f6-289dd3199695.png",
      description: "Fundamentals of ethical hacking and penetration testing methodologies."
    }
  ];

  return (
    <section className="py-20 w-full bg-cyber-bg-elevated/30">
      <div className="w-full px-6">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Award className="w-5 h-5 text-cyber-accent" />
          <span className="font-mono text-xs text-cyber-text-muted uppercase tracking-[0.2em]">// certifications</span>
        </div>
        <h2 className="text-4xl font-mono font-bold mb-12 text-center cyber-gradient-text">
          Certificates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certificates.map((cert) => {
            const isHovered = hoveredCard === cert.id;
            return (
              <Card
                key={cert.id}
                className={`cyber-card rounded-lg overflow-hidden transition-all duration-300 ${
                  isHovered ? 'shadow-[0_0_20px_hsl(170,80%,40%,0.15)] border-cyber-border-hover scale-[1.03]' : ''
                }`}
                onMouseEnter={() => setHoveredCard(cert.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-4">
                  <div className="mb-4">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className={`w-full h-48 object-cover rounded transition-all duration-300 ${isHovered ? 'scale-[1.03]' : ''}`}
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-mono font-semibold text-sm text-cyber-text">
                      {cert.title}
                    </h3>
                    <p className="text-cyber-accent text-xs font-mono">{cert.issuer}</p>
                    <p className="text-cyber-text-muted text-xs font-mono">{cert.date}</p>
                    <p className="text-sm text-cyber-text-muted leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
