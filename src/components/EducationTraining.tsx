
import Education from "./Education";
import Training from "./Training";

const EducationTraining = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#181b22]/80 via-[#2A2F3C]/70 to-[#23082a]/90">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-purple-700 bg-clip-text text-transparent tracking-wide">
          Education & Training
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Technical Training on the left */}
          <div className="lg:w-1/2">
            <Training />
          </div>
          {/* Education on the right */}
          <div className="lg:w-1/2">
            <Education />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationTraining;
