
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Training from "@/components/Training";
import { FileText, Video, User, Briefcase, School, Mail, Linkedin } from "lucide-react";
import VideoCV from "@/components/VideoCV";
import React from "react";

// Smooth scroll helper
const scrollToId = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      {/* Navigation shortcut bar */}
      <nav className="flex justify-center gap-8 py-4 bg-[#191B23] border-b border-purple-900/30 sticky top-0 z-50">
        <button onClick={() => scrollToId("about")} className="flex flex-col items-center group focus:outline-none">
          <User className="w-7 h-7 mb-1 text-purple-400 group-hover:scale-110 transition" />
          <span className="text-xs text-purple-200">About</span>
        </button>
        <button onClick={() => scrollToId("projects")} className="flex flex-col items-center group focus:outline-none">
          <Briefcase className="w-7 h-7 mb-1 text-purple-400 group-hover:scale-110 transition" />
          <span className="text-xs text-purple-200">Projects</span>
        </button>
        <button onClick={() => scrollToId("education")} className="flex flex-col items-center group focus:outline-none">
          <School className="w-7 h-7 mb-1 text-purple-400 group-hover:scale-110 transition" />
          <span className="text-xs text-purple-200">Education</span>
        </button>
        <button onClick={() => scrollToId("contact")} className="flex flex-col items-center group focus:outline-none">
          <Mail className="w-7 h-7 mb-1 text-purple-400 group-hover:scale-110 transition" />
          <span className="text-xs text-purple-200">Contact</span>
        </button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
            Megha Thakur
          </h1>
          <p className="text-xl text-gray-300">
            An aspiring developer with a strong command of Java and a deep interest in problem-solving and data visualization. I enjoy turning raw data into meaningful stories through tools like Tableau, Power BI, and MS Excel. With hands-on experience in building projects such as interactive dashboards, Java-based applications, and solving 250+ DSA problems on platforms like LeetCode and GeeksforGeeks, I thrive on analytical thinking and continuous learning. Let's connect!
          </p>
          {/* Always-visible resume/video buttons and social icons */}
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="border-purple-500 hover:bg-purple-500 flex items-center"
                onClick={() => window.open("https://drive.google.com/file/d/19NEay0YFJpEw5cUe2zPgMH8ZYTqiGim4/view?usp=sharing", "_blank")}
              >
                <FileText className="mr-2" /> View Resume
              </Button>
              <Button
                variant="outline"
                className="border-purple-500 hover:bg-purple-500 flex items-center"
                onClick={() => window.open("https://drive.google.com/file/d/1jtxxKz3xn6SFYe948tnfM3BmX1RvRqWq/view?usp=sharing", "_blank")}
              >
                <Video className="mr-2" /> View Video CV
              </Button>
            </div>
            <div className="flex space-x-6 text-purple-400">
              <a 
                href="mailto:meghathakur292@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Email"
                className="hover:text-purple-600 transition"
              >
                <Mail className="w-7 h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/meghathakur28"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-purple-600 transition"
              >
                <Linkedin className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/lovable-uploads/1fd2e7b5-cc8e-4252-bf2b-b01d81e0c90f.png"
            alt="Megha Thakur"
            className="rounded-full w-64 h-64 object-cover mx-auto border-4 border-purple-500 shadow-lg shadow-purple-500/50"
          />
        </div>
      </section>

      {/* Main Sections with IDs */}
      <div id="about"><About /></div>
      <Skills />
      <div id="projects"><Projects /></div>
      <Certificates />
      <VideoCV />
      {/* Place training before education */}
      <div id="training"><Training /></div>
      <div id="education"><Education /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
};

export default Index;

