
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Code, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for reaching out!",
      description: "I'll get back to you as soon as possible.",
      duration: 5000,
    });
    setFormData({ name: "", email: "", subject: "", description: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactLinks = [
    {
      platform: "Email",
      link: "mailto:meghathakur292@gmail.com",
      icon: <Mail className="h-5 w-5" />,
      username: "meghathakur292@gmail.com",
      color: "bg-red-500/20 text-red-400 border-red-500/30"
    },
    {
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/meghathakur28",
      icon: <Linkedin className="h-5 w-5" />,
      username: "meghathakur28",
      color: "bg-blue-500/20 text-blue-400 border-blue-500/30"
    },
    {
      platform: "GitHub",
      link: "https://github.com/meghathakur28/",
      icon: <Github className="h-5 w-5" />,
      username: "meghathakur28",
      color: "bg-gray-500/20 text-gray-400 border-gray-500/30"
    },
    {
      platform: "LeetCode",
      link: "https://leetcode.com/u/megha-thakur_28/",
      icon: <Code className="h-5 w-5" />,
      username: "megha-thakur_28",
      color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
    },
    {
      platform: "GeeksforGeeks",
      link: "https://www.geeksforgeeks.org/user/meghathaxf7x/",
      icon: <Code className="h-5 w-5" />,
      username: "meghathaxf7x",
      color: "bg-green-500/20 text-green-400 border-green-500/30"
    }
  ];

  return (
    <section className="py-20 bg-[#1A1F2C]/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Contact Me
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {contactLinks.map((contact, index) => (
              <a 
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className={`border h-full hover:scale-105 transition-all duration-300 ${contact.color}`}>
                  <CardContent className="p-6 flex items-center">
                    <div className="mr-4 bg-[#2A2F3C] p-3 rounded-full">
                      {contact.icon}
                    </div>
                    <div>
                      <h3 className="font-bold">{contact.platform}</h3>
                      <p className="text-sm opacity-80">{contact.username}</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-[#2A2F3C] border-purple-500/30 focus:border-purple-500"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[#2A2F3C] border-purple-500/30 focus:border-purple-500"
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-[#2A2F3C] border-purple-500/30 focus:border-purple-500"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="bg-[#2A2F3C] border-purple-500/30 focus:border-purple-500 min-h-[150px]"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white"
                >
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
