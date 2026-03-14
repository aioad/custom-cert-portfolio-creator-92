import React from 'react';
import { Terminal } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-cyber-bg-elevated/40 w-full">
      <div className="w-full px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:space-x-10 px-4">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <div className="relative">
              <img 
                alt="Dashmeet Singh" 
                className="w-full h-auto object-cover rounded-lg border border-cyber-border shadow-[0_0_30px_hsl(170,80%,40%,0.1)]" 
                src="/lovable-uploads/dashmeet-singh.png" 
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-cyber-bg/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
          
          <div className="w-full md:w-2/3 space-y-5">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-cyber-accent" />
              <span className="font-mono text-xs text-cyber-text-muted uppercase tracking-[0.2em]">// about_me</span>
            </div>
            <h2 className="text-3xl font-mono font-bold cyber-gradient-text">
              About Me
            </h2>
            <p className="text-base text-cyber-text-muted leading-relaxed">
              As a detail-oriented Cyber Security Analyst and aspiring Front-End Developer, I bring a unique blend of technical expertise and creative problem-solving skills. With a strong foundation in cybersecurity, I've honed my abilities to identify vulnerabilities, analyze threats, and develop effective security measures. Meanwhile, my passion for front-end development drives me to craft intuitive, user-friendly interfaces that enhance the overall user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
