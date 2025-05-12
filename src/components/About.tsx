
import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const About = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#1A1F2C]/50 to-[#181b22]/80 w-full">
      <div className="w-full px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:space-x-8 px-4">
          <div 
            className="w-full md:w-1/3 mb-8 md:mb-0 relative perspective-1000"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className={`relative w-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Front of card */}
              <div 
                className={`w-full h-full backface-hidden ${isFlipped ? 'opacity-0' : 'opacity-100'}`}
                style={{ backfaceVisibility: 'hidden', transition: 'opacity 0.7s' }}
              >
                <img 
                  src="/lovable-uploads/25ee78b6-fafc-48e7-9f41-160bd446c268.png" 
                  alt="Megha Thakur" 
                  className="w-full h-auto object-cover rounded-lg shadow-lg border-2 border-purple-500/30"
                />
                {isFlipped && (
                  <div className="absolute top-0 right-0">
                    <Sparkles className="w-10 h-10 text-purple-400 animate-pulse" />
                  </div>
                )}
              </div>
              
              {/* Back of card (same image for demo) */}
              <div 
                className={`absolute inset-0 w-full h-full backface-hidden ${isFlipped ? 'opacity-100' : 'opacity-0'}`} 
                style={{ 
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  transition: 'opacity 0.7s'
                }}
              >
                <img 
                  src="/lovable-uploads/25ee78b6-fafc-48e7-9f41-160bd446c268.png" 
                  alt="Megha Thakur" 
                  className="w-full h-auto object-cover rounded-lg shadow-lg border-2 border-pink-500/50"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg"></div>
                <div className="absolute top-0 right-0">
                  <Sparkles className="w-10 h-10 text-pink-400 animate-pulse" />
                </div>
              </div>
            </div>
            
            {isFlipped && (
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 w-1/2 animate-pulse"></div>
            )}
          </div>
          
          <div className="w-full md:w-2/3 text-gray-300 space-y-5">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg leading-relaxed">
              An aspiring developer with a strong command of Java and a deep interest in problem-solving and data visualization. I enjoy turning raw data into meaningful stories through tools like Tableau, Power BI, and MS Excel.
            </p>
            <p className="text-lg leading-relaxed">
              With hands-on experience in building projects such as interactive dashboards, Java-based applications, and solving 250+ DSA problems on platforms like LeetCode and GeeksforGeeks, I thrive on analytical thinking and continuous learning.
            </p>
            <p className="text-lg leading-relaxed">
              Let's connect and explore how technology can transform data into insights!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
