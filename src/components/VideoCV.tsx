
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { RotateCw } from "lucide-react";

const VIDEO_SRC =
  "https://drive.google.com/file/d/1jtxxKz3xn6SFYe948tnfM3BmX1RvRqWq/preview";
const RESUME_PDF =
  "https://drive.google.com/file/d/19NEay0YFJpEw5cUe2zPgMH8ZYTqiGim4/preview";

const VideoCV = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="py-20 bg-[#1A1F2C]/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-500">
          {flipped ? "Resume" : "Video CV"}
        </h2>
        <div className="max-w-2xl mx-auto" style={{ perspective: "1200px" }}>
          <div
            className={`relative w-full transition-transform duration-700`}
            style={{
              minHeight: 415,
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* FRONT: Video CV */}
            <Card
              className="absolute inset-0 w-full h-full bg-[#2A2F3C] border-purple-500/30 hover:border-purple-500 overflow-hidden transition-all duration-300 cursor-pointer"
              onClick={() => setFlipped(true)}
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
              tabIndex={0}
              aria-label="Flip to view Resume"
              role="button"
            >
              <div className="relative h-full flex flex-col">
                <iframe
                  src={VIDEO_SRC}
                  title="Video CV"
                  className="w-full flex-1 min-h-[340px]"
                  allow="autoplay"
                  style={{ border: "none" }}
                ></iframe>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A1F2C] to-transparent p-4 flex items-center justify-center pointer-events-none">
                  <span className="flex items-center gap-2 text-purple-300">
                    <RotateCw className="w-5 h-5" />
                    <span>Flip to view Resume</span>
                  </span>
                </div>
              </div>
            </Card>

            {/* BACK: Resume PDF */}
            <Card
              className="absolute inset-0 w-full h-full bg-[#2A2F3C] border-purple-500/40 overflow-hidden transition-all duration-300 cursor-pointer"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
              onClick={() => setFlipped(false)}
              tabIndex={0}
              aria-label="Flip to view Video CV"
              role="button"
            >
              <div className="relative h-full flex flex-col">
                <iframe
                  src={RESUME_PDF}
                  title="Resume PDF"
                  className="w-full flex-1 min-h-[340px] bg-white"
                  allow="autoplay"
                  style={{
                    border: "none",
                    background: "#fff",
                  }}
                ></iframe>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A1F2C] to-transparent p-4 flex items-center justify-center pointer-events-none">
                  <span className="flex items-center gap-2 text-purple-300">
                    <RotateCw className="w-5 h-5" />
                    <span>Flip to view Video CV</span>
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCV;
