import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Code, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", description: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "I'll get back to you soon.", duration: 5000 });
    setFormData({ name: "", email: "", subject: "", description: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactLinks = [
    { platform: "Email", link: "mailto:meghathakur292@gmail.com", icon: <Mail className="h-5 w-5" />, username: "meghathakur292@gmail.com" },
    { platform: "LinkedIn", link: "https://www.linkedin.com/in/meghathakur28", icon: <Linkedin className="h-5 w-5" />, username: "meghathakur28" },
    { platform: "GitHub", link: "https://github.com/meghathakur28/", icon: <Github className="h-5 w-5" />, username: "meghathakur28" },
    { platform: "LeetCode", link: "https://leetcode.com/u/megha-thakur_28/", icon: <Code className="h-5 w-5" />, username: "megha-thakur_28" },
    { platform: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/user/meghathaxf7x/", icon: <Code className="h-5 w-5" />, username: "meghathaxf7x" }
  ];

  return (
    <section className="py-20 bg-cyber-bg-elevated/30 w-full">
      <div className="w-full px-6">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Mail className="w-5 h-5 text-cyber-accent" />
          <span className="font-mono text-xs text-cyber-text-muted uppercase tracking-[0.2em]">// contact</span>
        </div>
        <h2 className="text-4xl font-mono font-bold mb-12 text-center cyber-gradient-text">
          Get In Touch
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactLinks.map((contact, index) => (
              <a key={index} href={contact.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                <Card className="cyber-card rounded-lg h-full hover:border-cyber-border-hover hover:shadow-[0_0_15px_hsl(170,80%,40%,0.1)] transition-all duration-300">
                  <CardContent className="p-5 flex items-center">
                    <div className="mr-4 bg-cyber-bg-elevated p-3 rounded-lg border border-cyber-border text-cyber-accent">
                      {contact.icon}
                    </div>
                    <div>
                      <h3 className="font-mono font-semibold text-sm text-cyber-text">{contact.platform}</h3>
                      <p className="text-xs text-cyber-text-muted font-mono">{contact.username}</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <Card className="cyber-card rounded-lg border-cyber-border">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Your Name" name="name" value={formData.name} onChange={handleChange}
                  className="bg-cyber-bg border-cyber-border focus:border-cyber-accent text-cyber-text font-mono text-sm" required />
                <Input type="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleChange}
                  className="bg-cyber-bg border-cyber-border focus:border-cyber-accent text-cyber-text font-mono text-sm" required />
                <Input placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange}
                  className="bg-cyber-bg border-cyber-border focus:border-cyber-accent text-cyber-text font-mono text-sm" required />
                <Textarea placeholder="Your Message" name="description" value={formData.description} onChange={handleChange}
                  className="bg-cyber-bg border-cyber-border focus:border-cyber-accent text-cyber-text font-mono text-sm min-h-[150px]" required />
                <Button type="submit"
                  className="w-full bg-cyber-accent text-cyber-bg hover:bg-cyber-accent/90 font-mono text-sm tracking-wide shadow-[0_0_15px_hsl(170,80%,40%,0.3)]">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
