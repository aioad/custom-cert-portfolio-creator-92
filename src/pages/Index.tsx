import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Training from "@/components/Training";
import { FileText, Video, User, Briefcase, School, Mail, Linkedin, Award, BookOpen, Star, Heart } from "lucide-react";
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
          <School className="w-7 h-7 mb-1 text-purple-400 group-hover:scale-110 transition" />
          <span className="text-xs text-purple-200">Education & Training</span>
        </button>
        <button onClick={() => scrollToId("volunteer")} className="flex flex-col items-center group focus:outline-none">
          <Heart className="w-7 h-7 mb-1 text-purple-400 group-hover:scale-110 transition" />
          <span className="text-xs text-purple-200">Volunteer</span>
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

      {/* About Me section - moved right after the first section */}
      <div id="about" className="scroll-mt-16">
        <About />
      </div>

      {/* Main Sections with IDs */}
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="certificates"><Certificates /></div>
      <VideoCV />
      
      {/* Education and Training Sections with improved layout */}
      <section id="education-training" className="py-16 bg-gradient-to-br from-[#181b22]/80 via-[#2A2F3C]/70 to-[#23082a]/90 overflow-hidden w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-purple-700 bg-clip-text text-transparent tracking-wide">
            Education & Technical Training
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Technical Training on the left - smaller size */}
            <div className="md:col-span-5">
              <div className="bg-[#1a1d28]/50 p-4 rounded-xl mb-4">
                <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Technical Training
                </h3>
              </div>
              <div className="h-full flex flex-col">
                <Training />
              </div>
            </div>
            
            {/* Education on the right - larger size */}
            <div className="md:col-span-7">
              <div className="bg-[#1a1d28]/50 p-4 rounded-xl mb-4">
                <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Education
                </h3>
              </div>
              <div className="bg-[#1a1d28]/30 p-4 rounded-xl">
                <Education />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* NGO Experience Section */}
      <section id="volunteer" className="py-16 bg-[#1A1F2C] overflow-hidden w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent tracking-wide">
            Volunteer Experience
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Card className="bg-[#2A2F3C]/90 border-purple-500/40 hover:border-purple-500 transition-all duration-300 shadow-md">
              <CardContent className="p-5">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-md border border-purple-500/50 bg-[#1b1e2e] flex items-center justify-center">
                      <Heart className="w-8 h-8 text-pink-400" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-white/90 font-semibold">Yattra Jan Kalyan NGO</p>
                    <p className="text-purple-400">June 2023 – August 2023</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-300 ml-2 leading-relaxed text-sm mb-4">
                  <li>Volunteered with a social welfare organization in Barsar, Himachal Pradesh</li>
                  <li>Assisted in providing support to underprivileged children and families</li>
                  <li>Participated in community development programs and educational initiatives</li>
                  <li>Helped with fundraising activities and resource distribution for those in need</li>
                </ul>
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="/lovable-uploads/17596642-0df7-4265-99c8-c380091a1988.png"
                    alt="NGO Work 1"
                    className="w-full h-32 object-cover rounded-md border border-purple-400/40"
                  />
                  <img
                    src="/lovable-uploads/b9784d56-67a7-4b13-9232-966b2fcd1280.png"
                    alt="NGO Work 2"
                    className="w-full h-32 object-cover rounded-md border border-purple-400/40"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <div id="contact"><Contact /></div>
    </div>
  );
};

export default Index;
