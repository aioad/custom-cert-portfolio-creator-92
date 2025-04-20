
import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-[#1A1F2C]/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto flex items-center space-x-8">
          <div className="w-1/3">
            <img 
              src="/lovable-uploads/25ee78b6-fafc-48e7-9f41-160bd446c268.png" 
              alt="Megha Thakur" 
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-2/3 text-gray-300 space-y-4">
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
