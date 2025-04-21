
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Video, FileText } from "lucide-react";

const VIDEO_SRC =
  "https://drive.google.com/file/d/1jtxxKz3xn6SFYe948tnfM3BmX1RvRqWq/preview";
const RESUME_PDF =
  "https://drive.google.com/file/d/19NEay0YFJpEw5cUe2zPgMH8ZYTqiGim4/preview";

const VideoCV = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="py-20 bg-[#1A1F2C]/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Video CV
        </h2>
        <div className="max-w-2xl mx-auto perspective-[1200px]">
          <div
            className={`relative w-full aspect-video transition-transform duration-700 [transform-style:preserve-3d] ${
              flipped ? "rotate-y-180" : ""
            }`}
            style={{
              minHeight: 340,
              cursor: "pointer",
            }}
            onClick={() => setFlipped((f) => !f)}
          >
            {/* FRONT: Video CV */}
            <Card
              className="absolute inset-0 w-full h-full bg-[#2A2F3C] border-purple-500/30 hover:border-purple-500 overflow-hidden transition-all duration-300 flex items-center justify-center"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <div className="group flex flex-col h-full w-full items-center justify-center gap-4">
                <span>
                  <Video className="w-20 h-20 text-purple-400 animate-pulse" />
                </span>
                <span className="text-xl text-purple-100 font-medium">
                  Click to view Resume PDF
                </span>
                <span className="text-gray-400 text-base">
                  (Watch Video CV)
                </span>
              </div>
            </Card>
            {/* BACK: Resume PDF */}
            <Card
              className="absolute inset-0 w-full h-full bg-[#2A2F3C] border-purple-500/40 overflow-hidden flex flex-col"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="flex-1 overflow-hidden rounded-b-lg relative">
                <iframe
                  src={RESUME_PDF}
                  title="Resume PDF"
                  className="w-full h-full min-h-[340px]"
                  allow="autoplay"
                  style={{ border: "none" }}
                />
              </div>
              <div className="flex flex-col items-center py-2">
                <FileText className="w-7 h-7 text-purple-400 mb-1 animate-pulse" />
                <span className="text-sm text-gray-300">
                  Click to return to Video CV
                </span>
                <span className="text-xs text-gray-400"> (Scroll to read Resume) </span>
              </div>
            </Card>
          </div>
          <p className="text-center text-purple-300 mt-6 text-sm italic">
            Tap the card to toggle: Video CV &lt;&rarr;&gt; Resume PDF
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoCV;

