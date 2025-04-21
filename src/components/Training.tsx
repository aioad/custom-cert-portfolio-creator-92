
import { Card, CardContent } from "@/components/ui/card";
import { Book } from "lucide-react";

const Training = () => (
  <section id="training" className="py-14 bg-[#1A1F2C]/80 flex justify-center">
    <div className="container mx-auto px-4 max-w-2xl">
      <Card className="bg-[#2A2F3C]/90 border-purple-500/40 hover:border-purple-500 transition-all duration-300 shadow-md">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Book className="w-6 h-6 text-purple-400" />
            <h3 className="text-2xl font-bold text-purple-300">Technical Training</h3>
          </div>
          <div className="w-full mb-6 flex justify-center">
            {/* Show the full certificate image */}
            <img
              src="/lovable-uploads/b1a80735-8174-4426-b1e3-aa6682c053f5.png"
              alt="DSA Training Certificate"
              className="max-w-full rounded-lg shadow-lg object-contain border-2 border-purple-500 bg-black"
              style={{ maxHeight: "350px", width: "auto", display: "block" }}
            />
          </div>
          <div className="space-y-2">
            <p className="text-white/90 font-semibold">SPRUCE (powered by Hitbullseye)</p>
            <p className="text-purple-400">June 2024 – July 2024</p>
            <ul className="list-disc list-inside text-gray-300 ml-4 leading-relaxed text-sm">
              <li>Studied fundamental and advanced concepts of data structures, including arrays, linked lists, stacks, queues, trees, graphs, and hash tables.</li>
              <li>Learned algorithm design and analysis, focusing on sorting, searching, dynamic programming, and graph algorithms.</li>
              <li>Applied theoretical knowledge in practical scenarios through hands-on projects in Java, demonstrating proficiency in implementing and optimizing data structures and algorithms.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default Training;
