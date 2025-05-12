
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

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

    {/* NGO Experience */}
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
        <ul className="list-disc list-inside text-gray-300 ml-2 leading-relaxed text-sm">
          <li>Volunteered with a social welfare organization in Barsar, Himachal Pradesh</li>
          <li>Assisted in providing support to underprivileged children and families</li>
          <li>Participated in community development programs and educational initiatives</li>
          <li>Helped with fundraising activities and resource distribution for those in need</li>
        </ul>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <img
            src="/lovable-uploads/17596642-0df7-4265-99c8-c380091a1988.png"
            alt="NGO Work with Children"
            className="w-full h-32 object-cover rounded-md border border-purple-400/40"
          />
          <img
            src="/lovable-uploads/b9784d56-67a7-4b13-9232-966b2fcd1280.png"
            alt="NGO Community Support"
            className="w-full h-32 object-cover rounded-md border border-purple-400/40"
          />
        </div>
      </CardContent>
    </Card>

    {/* Winter Training */}
    <Card className="bg-[#2A2F3C]/90 border-purple-500/40 hover:border-purple-500 transition-all duration-300 shadow-md">
      <CardContent className="p-5">
        <div className="flex items-center mb-4">
          <div className="mr-4">
            <img
              src="https://codeforces.org/s/0/favicon-96x96.png"
              alt="Codeforces Logo"
              className="w-12 h-12 rounded-md border border-purple-500/50"
              style={{ objectFit: "contain", background: "#1b1e2e" }}
            />
          </div>
          <div className="space-y-2">
            <p className="text-white/90 font-semibold">Codeforces Competitive Programming</p>
            <p className="text-purple-400">January 2025 – February 2025</p>
          </div>
        </div>
        <ul className="list-disc list-inside text-gray-300 ml-2 leading-relaxed text-sm">
          <li>Mastered competitive programming techniques and problem-solving strategies</li>
          <li>Participated in coding contests and algorithmic challenges</li>
          <li>Enhanced proficiency in time and space complexity optimization</li>
          <li>Developed skills in pattern recognition for complex programming problems</li>
        </ul>
      </CardContent>
    </Card>
  </div>
);

export default Training;
