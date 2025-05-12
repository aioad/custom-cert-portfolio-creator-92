
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Training from "@/components/Training";
import { FileText, Video, User, Briefcase, School, Mail, Linkedin, Award, BookOpen, Star } from "lucide-react";
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
      <nav className="flex justify-center gap-4 py-4 bg-[#191B23] border-b border-purple-900/30 sticky top-0 z-50 overflow-x-auto w-full">
        <button onClick={() => scrollToId("about")} className="flex flex-col items-center group focus:outline-none">
          <User className="w-7 h-7 mb-1 text-purple-400 group-hover:scale-110 transition" />
          <span className="text-xs text-purple-200">About</span>
        </button>
        <button onClick={() => scrollToId("skills")} className="flex flex-col items-center group focus:outline-none">
          <Star className="w-7 h-7 mb-1 text-purple-400 group-hover:scale-110 transition" />
          <span className="text-xs text-purple-200">Skills</span>
        </button>
        <button onClick={() => scrollToId("projects")} className="flex flex-col items-center group focus:outline-none">
          <Briefcase className="w-7 h-7 mb-1 text-purple-400 group-hover:scale-110 transition" />
          <span className="text-xs text-purple-200">Projects</span>
        </button>
        <button onClick={() => scrollToId("certificates")} className="flex flex-col items-center group focus:outline-none">
          <Award className="w-7 h-7 mb-1 text-purple-400 group-hover:scale-110 transition" />
          <span className="text-xs text-purple-200">Certificates</span>
        </button>
        <button onClick={() => scrollToId("education-training")} className="flex flex-col items-center group focus:outline-none">
          <BookOpen className="w-7 h-7 mb-1 text-purple-400 group-hover:scale-110 transition" />
          <span className="text-xs text-purple-200">Education & Training</span>
        </button>
        <button onClick={() => scrollToId("contact")} className="flex flex-col items-center group focus:outline-none">
          <Mail className="w-7 h-7 mb-1 text-purple-400 group-hover:scale-110 transition" />
          <span className="text-xs text-purple-200">Contact</span>
        </button>
      </nav>

      {/* Hero Section */}
      <section className="w-full px-6 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
            Megha Thakur
          </h1>
          <p className="text-xl text-gray-300">
            Turning complex problems into elegant solutions with Java and data.<br />
            Passionate about code, curious about data, and always building something impactful.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="border-purple-500 bg-transparent text-purple-300 hover:bg-purple-500 flex items-center"
                onClick={() => window.open("https://drive.google.com/file/d/19NEay0YFJpEw5cUe2zPgMH8ZYTqiGim4/view?usp=sharing", "_blank")}
              >
                <FileText className="mr-2" /> View Resume
              </Button>
              <Button
                variant="outline"
                className="border-purple-500 bg-transparent text-purple-300 hover:bg-purple-500 flex items-center"
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
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="certificates"><Certificates /></div>
      <VideoCV />
      
      {/* Combined Education and Training Section */}
      <section id="education-training" className="py-16 bg-gradient-to-br from-[#181b22]/80 via-[#2A2F3C]/70 to-[#23082a]/90 overflow-hidden w-full">
        <div className="w-full max-w-full">
          <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-purple-700 bg-clip-text text-transparent tracking-wide">
            Education & Technical Training
          </h2>
          
          <div className="flex flex-col md:flex-row w-full">
            {/* Technical Training on the left */}
            <div className="w-full md:w-1/2 px-4">
              <Training />
            </div>
            
            {/* Education on the right */}
            <div className="w-full md:w-1/2 px-4">
              <Education />
            </div>
          </div>
        </div>
      </section>
      
      <div id="contact"><Contact /></div>
    </div>
  );
};

export default Index;
