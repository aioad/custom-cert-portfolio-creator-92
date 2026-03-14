import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Training from "@/components/Training";
import { FileText, User, Briefcase, School, Mail, Linkedin, Award, Star, Heart, Shield, Terminal } from "lucide-react";

import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const scrollToId = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-bg text-cyber-text cyber-grid-bg">
      {/* Navigation */}
      <nav className="flex justify-center gap-6 py-3 bg-cyber-bg/95 backdrop-blur-md border-b border-cyber-border sticky top-0 z-50 overflow-x-auto w-full">
        {[
          { id: "about", icon: User, label: "About" },
          { id: "skills", icon: Shield, label: "Skills" },
          { id: "projects", icon: Briefcase, label: "Projects" },
          { id: "certificates", icon: Award, label: "Certs" },
          { id: "education-training", icon: School, label: "Education" },
          { id: "volunteer", icon: Heart, label: "Volunteer" },
          { id: "contact", icon: Mail, label: "Contact" },
        ].map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => scrollToId(id)}
            className="flex flex-col items-center group focus:outline-none px-2"
          >
            <Icon className="w-5 h-5 mb-1 text-cyber-accent group-hover:drop-shadow-[0_0_6px_hsl(170,80%,40%)] transition-all duration-300" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyber-text-muted group-hover:text-cyber-accent transition-colors">
              {label}
            </span>
          </button>
        ))}
      </nav>

      {/* Hero Section */}
      <section className="w-full px-6 py-24 flex flex-col lg:flex-row items-center justify-between gap-12 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-accent/5 via-transparent to-transparent pointer-events-none" />
        <div className="lg:w-2/3 space-y-6 relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <Terminal className="w-5 h-5 text-cyber-accent" />
            <span className="font-mono text-sm text-cyber-text-muted tracking-widest uppercase">
              Cybersecurity Professional
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-mono font-bold cyber-gradient-text leading-tight">
            Dashmeet Singh
          </h1>
          <p className="text-lg text-cyber-text-muted leading-relaxed max-w-2xl">
            Results-driven cybersecurity professional with a strong foundation in threat analysis, vulnerability identification, and defense strategies. Proven ability to work effectively under pressure, adapt to dynamic environments, and collaborate with teams to deliver high-quality results.
          </p>
          <div className="flex items-center gap-6 pt-2">
            <Button
              className="bg-cyber-accent text-cyber-bg hover:bg-cyber-accent/90 font-mono text-sm tracking-wide border-0 shadow-[0_0_15px_hsl(170,80%,40%,0.3)] hover:shadow-[0_0_25px_hsl(170,80%,40%,0.5)] transition-all"
              onClick={() => window.open("https://drive.google.com/file/d/1IrbfhVKHhjs_OzSAKxNoobR3_ZBNlt07/view?usp=sharing", "_blank")}
            >
              <FileText className="mr-2 w-4 h-4" /> View Resume
            </Button>
            <a
              href="https://www.linkedin.com/in/dashmeet-singh-b4064731a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-text-muted hover:text-cyber-accent transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <div id="about" className="scroll-mt-16"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="certificates"><Certificates /></div>
      <VideoCV />

      {/* Education & Training */}
      <section id="education-training" className="py-16 bg-cyber-bg-elevated/50 overflow-hidden w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-mono font-bold mb-10 text-center cyber-gradient-text tracking-tight">
            Education & Training
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5">
              <div className="cyber-card rounded-lg p-4 mb-4">
                <h3 className="text-xl font-mono font-semibold text-center cyber-glow-text">
                  Technical Training
                </h3>
              </div>
              <Training />
            </div>
            <div className="md:col-span-7">
              <div className="cyber-card rounded-lg p-4 mb-4">
                <h3 className="text-xl font-mono font-semibold text-center cyber-glow-text">
                  Education
                </h3>
              </div>
              <div className="cyber-card rounded-lg p-4">
                <Education />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Experience */}
      <section id="volunteer" className="py-16 bg-cyber-bg overflow-hidden w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-mono font-bold mb-10 text-center cyber-gradient-text tracking-tight">
            Volunteer Experience
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="cyber-card rounded-lg border-cyber-border hover:border-cyber-border-hover transition-all duration-300">
              <CardContent className="p-5">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-md border border-cyber-border bg-cyber-bg-elevated flex items-center justify-center">
                      <Heart className="w-8 h-8 text-cyber-accent" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-cyber-text font-mono font-semibold">Yattra Jan Kalyan NGO</p>
                    <p className="text-cyber-accent text-sm font-mono">June 2023 – August 2023</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-cyber-text-muted ml-2 leading-relaxed text-sm mb-6 space-y-1">
                  <li>Volunteered with a social welfare organization in Barsar, Himachal Pradesh</li>
                  <li>Assisted in providing support to underprivileged children and families</li>
                  <li>Participated in community development programs and educational initiatives</li>
                  <li>Helped with fundraising activities and resource distribution for those in need</li>
                </ul>
                <Carousel opts={{ align: "start", loop: true }} className="w-full">
                  <CarouselContent>
                    {[
                      "/lovable-uploads/17596642-0df7-4265-99c8-c380091a1988.png",
                      "/lovable-uploads/b9784d56-67a7-4b13-9232-966b2fcd1280.png",
                      "/lovable-uploads/7375e64c-f79a-4055-b28b-4e6c13057b26.png",
                      "/lovable-uploads/2566a4d7-2d13-4343-a9c0-ffd5e414ee8c.png",
                    ].map((src, i) => (
                      <CarouselItem key={i} className="basis-full md:basis-1/2">
                        <div className="p-1">
                          <img src={src} alt={`NGO Work ${i + 1}`} className="w-full h-48 object-cover rounded-md border border-cyber-border" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-1 bg-cyber-accent/80 hover:bg-cyber-accent border-none text-cyber-bg" />
                  <CarouselNext className="right-1 bg-cyber-accent/80 hover:bg-cyber-accent border-none text-cyber-bg" />
                </Carousel>
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
