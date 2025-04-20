
const About = () => {
  return (
    <section className="py-20 bg-[#1A1F2C]/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-gray-300 space-y-4">
          <p className="text-lg leading-relaxed">
            I'm currently in my 3rd year of Bachelor's in Computer Science and Engineering at Lovely Professional University. With a passion for Java programming and data-driven storytelling, I've developed a strong foundation in software development and data visualization.
          </p>
          <p className="text-lg leading-relaxed">
            My strengths lie in problem-solving, having solved 250+ DSA challenges, and building insightful dashboards using tools like Tableau, Power BI, and Excel.
          </p>
          <p className="text-lg leading-relaxed">
            I'm constantly exploring new technologies, participating in hackathons like Myntra's HackerRamp and Smart India Hackathon, and pushing myself to turn complex data and logic into meaningful, impactful solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
