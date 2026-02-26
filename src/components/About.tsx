
import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1A1F2C]/50 to-[#181b22]/80 w-full">
      <div className="w-full px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:space-x-8 px-4">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <img 
              alt="Megha Thakur" 
              className="w-full h-auto object-cover rounded-lg shadow-lg border-2 border-purple-500/30" 
              src="/lovable-uploads/dashmeet-singh.png" 
            />
          </div>
          
          <div className="w-full md:w-2/3 space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              As a detail-oriented Cyber Security Analyst and aspiring Front-End Developer, I bring a unique blend of technical expertise and creative problem-solving skills. With a strong foundation in cybersecurity, I've honed my abilities to identify vulnerabilities, analyze threats, and develop effective security measures. Meanwhile, my passion for front-end development drives me to craft intuitive, user-friendly interfaces that enhance the overall user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
