import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Sparkles } from "lucide-react";

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

  const handleMouseEnter = (cardId: string) => {
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section className="py-20 w-full">
      <div className="w-full px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Certificates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certificates.map((cert) => {
            const isHovered = hoveredCard === cert.id;
            
            return (
              <Card 
                key={cert.id}
                className={`bg-[#2A2F3C] border-purple-500/30 hover:border-purple-500 transition-all duration-300 relative overflow-hidden ${isHovered ? 'shadow-lg shadow-purple-500/30 scale-105' : ''}`}
                onMouseEnter={() => handleMouseEnter(cert.id)}
                onMouseLeave={handleMouseLeave}
              >
                {isHovered && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>
                    <div className="absolute -top-4 -right-4">
                      <Sparkles className="w-10 h-10 text-purple-400 animate-pulse" />
                    </div>
                  </div>
                )}
                <CardContent className="p-4 relative z-10">
                  <div className="mb-4">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className={`w-full h-48 object-cover rounded-lg transition-all duration-300 ${isHovered ? 'scale-105' : ''}`}
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className={`font-semibold transition-colors duration-300 ${isHovered ? 'text-white' : 'text-white/90'}`}>
                      {cert.title}
                    </h3>
                    <p className="text-purple-400 text-sm">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm">{cert.date}</p>
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${isHovered ? 'text-gray-200' : 'text-gray-300'}`}>
                      {cert.description}
                    </p>
                  </div>
                  {isHovered && (
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 w-3/4 animate-pulse"></div>
                  )}
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
