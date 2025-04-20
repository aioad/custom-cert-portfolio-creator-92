
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { FileText, Video } from "lucide-react";
import VideoCV from "@/components/VideoCV";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Megha Thakur
          </h1>
          <p className="text-xl text-gray-300">Student, Coding and Data Analyst</p>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="border-purple-500 hover:bg-purple-500"
              onClick={() => window.open("https://drive.google.com/file/d/19NEay0YFJpEw5cUe2zPgMH8ZYTqiGim4/view?usp=sharing", "_blank")}
            >
              <FileText className="mr-2" /> Resume
            </Button>
            <Button
              variant="outline"
              className="border-purple-500 hover:bg-purple-500"
              onClick={() => window.open("https://drive.google.com/file/d/1jtxxKz3xn6SFYe948tnfM3BmX1RvRqWq/view?usp=sharing", "_blank")}
            >
              <Video className="mr-2" /> Video CV
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/lovable-uploads/1fd2e7b5-cc8e-4252-bf2b-b01d81e0c90f.png"
            alt="Megha Thakur"
            className="rounded-full w-64 h-64 object-cover mx-auto border-4 border-purple-500"
          />
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Certificates />
      <VideoCV />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
