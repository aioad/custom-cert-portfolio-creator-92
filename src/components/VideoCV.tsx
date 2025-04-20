
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Video } from "lucide-react";

const VideoCV = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-[#1A1F2C]/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Video CV
        </h2>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-[#2A2F3C] border-purple-500/30 hover:border-purple-500 transition-all duration-300 overflow-hidden">
            {!isPlaying ? (
              <div 
                className="relative cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                <div className="aspect-video bg-black/50 flex items-center justify-center">
                  <Video className="w-20 h-20 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-xl text-purple-200 font-medium">Click to Play Video CV</span>
                </div>
              </div>
            ) : (
              <div className="aspect-video">
                <iframe
                  src="https://drive.google.com/file/d/1jtxxKz3xn6SFYe948tnfM3BmX1RvRqWq/preview"
                  allow="autoplay"
                  className="w-full h-full"
                ></iframe>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoCV;
