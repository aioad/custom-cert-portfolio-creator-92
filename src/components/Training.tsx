
import { Card, CardContent } from "@/components/ui/card";

const Training = () => (
  <div className="w-full space-y-4">
    {/* DSA Training */}
    <Card className="bg-[#2A2F3C]/90 border-purple-500/40 hover:border-purple-500 transition-all duration-300 shadow-md">
      <CardContent className="p-5">
        <div className="w-full mb-4 flex justify-center">
          <img
            src="/lovable-uploads/b1a80735-8174-4426-b1e3-aa6682c053f5.png"
            alt="DSA Training Certificate"
            className="max-w-full rounded-lg shadow-lg object-contain border-2 border-purple-500 bg-black"
            style={{ maxHeight: "200px", width: "auto", display: "block" }}
          />
        </div>
        <div className="space-y-2">
          <p className="text-white/90 font-semibold">SPRUCE (powered by Hitbullseye)</p>
          <p className="text-purple-400">June 2024 – July 2024</p>
          <ul className="list-disc list-inside text-gray-300 ml-2 leading-relaxed text-sm">
            <li>Studied fundamental and advanced concepts of data structures</li>
            <li>Learned algorithm design and analysis techniques</li>
            <li>Applied theoretical knowledge in practical scenarios through Java projects</li>
          </ul>
        </div>
      </CardContent>
    </Card>

    {/* Winter Training */}
    <Card className="bg-[#2A2F3C]/90 border-purple-500/40 hover:border-purple-500 transition-all duration-300 shadow-md">
      <CardContent className="p-5">
        <div className="space-y-2">
          <p className="text-white/90 font-semibold">Codeforces Competitive Programming</p>
          <p className="text-purple-400">January 2025 – February 2025</p>
          <ul className="list-disc list-inside text-gray-300 ml-2 leading-relaxed text-sm">
            <li>Mastered competitive programming techniques and problem-solving strategies</li>
            <li>Participated in coding contests and algorithmic challenges</li>
            <li>Enhanced proficiency in time and space complexity optimization</li>
            <li>Developed skills in pattern recognition for complex programming problems</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default Training;
