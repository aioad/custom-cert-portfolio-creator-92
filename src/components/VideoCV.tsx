import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Video, FileText, RotateCw } from "lucide-react";

const VIDEO_SRC =
  "https://drive.google.com/file/d/1jtxxKz3xn6SFYe948tnfM3BmX1RvRqWq/preview";
const RESUME_PDF = "/resume.pdf";

const VideoCV = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="py-20 bg-cyber-bg-elevated/40 w-full">
      <div className="w-full px-6">
        <h2 className="text-4xl font-mono font-bold mb-12 text-center cyber-gradient-text">
          {flipped ? "Resume" : "Video CV"}
        </h2>
        <div className="max-w-4xl mx-auto" style={{ perspective: "1200px" }}>
          <div
            className="relative w-full transition-transform duration-700"
            style={{
              minHeight: 415,
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <Card
              className="absolute inset-0 w-full h-full cyber-card rounded-lg overflow-hidden transition-all duration-300"
              style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
              onClick={() => setFlipped(true)}
            >
              <div className="relative h-full">
                <iframe src={VIDEO_SRC} title="Video CV" className="w-full h-full min-h-[340px]" allow="autoplay" style={{ border: "none" }} />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cyber-bg to-transparent p-4 flex items-center justify-center">
                  <button className="flex items-center gap-2 text-cyber-accent hover:text-cyber-glow transition-colors font-mono text-sm">
                    <RotateCw className="w-4 h-4" />
                    <span>Flip to view Resume</span>
                  </button>
                </div>
              </div>
            </Card>
            <Card
              className="absolute inset-0 w-full h-full cyber-card rounded-lg overflow-hidden"
              style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              onClick={() => setFlipped(false)}
            >
              <div className="relative h-full">
                <iframe src={RESUME_PDF} title="Resume PDF" className="w-full h-full min-h-[340px]" allow="autoplay" style={{ border: "none" }} />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cyber-bg to-transparent p-4 flex items-center justify-center">
                  <button className="flex items-center gap-2 text-cyber-accent hover:text-cyber-glow transition-colors font-mono text-sm">
                    <RotateCw className="w-4 h-4" />
                    <span>Flip to view Video</span>
                  </button>
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
